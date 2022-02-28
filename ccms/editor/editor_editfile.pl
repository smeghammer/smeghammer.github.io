#!/usr/bin/perl
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#get the element that is to be edited:
$ELEMENT_TO_EDIT            = getRequest("contentid");
$ELEMENT_TO_EDIT_CAPTION    = "";  #set this from the friendlyname attribute of the element, below:
$IMAGE_ELEMENT_FILTER       = "";

if(getAuth() eq false)
{
    logger("editor_editfile: Not logged in - redirect to root.");
    print "HTTP/1.1 302 Object moved\r\n";
    print "Location: " . $SITE_BASE_URL . "\r\n";
}
print "Content-type: text/html\r\n";
print "Expires: 0\r\n\r\n";

logger("editor_editfile: Begin.");

#result message:
$result             = "";

#form enabled/disabled:
$FIELD_IS_ENABLED   = "disabled=\"disabled\"";
$formvalue          = "";  #reset this

#handle a submitted update:
if($ENV{'REQUEST_METHOD'} eq 'POST')
{
    logger("editor_editfile: Data had been POSTed:");
    #get form vars if posted:
    read(STDIN, $postdata,$ENV{'CONTENT_LENGTH'});
    @pairs = split(/&/, $postdata);
    foreach $pair (@pairs) 
    {
        ($name, $value) = split(/=/, $pair);
        $value =~ tr/+/ /;
        $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
        $FORM{$name} = $value;
    }
    
    #set hidden field passing the field being edited:
    $ELEMENT_TO_EDIT    = $FORM{"contentid"};
    $datatype           = $FORM{'datatype'};
    $fname              = $FORM{'fname'};
    $formvalue          = replace($FORM{$ELEMENT_TO_EDIT},"\n","");  #odd stuff with spurous newlines
    
    logger("editor_editfile: --> ELEMENT_TO_EDIT: $ELEMENT_TO_EDIT.");
    logger("editor_editfile: --> datatype: $datatype.");
    logger("editor_editfile: --> fname: $fname.");
    logger("editor_editfile: --> formvalue: $formvalue.");
}
#otherwise, just set the current page name:
else
{
    $fname              = urlDecode(getRequest("fname"));
}
 
#load the XML file to edit if a filename is passed:
if(length($FORM{"fname"}) > 0 || length($fname) > 0)
{
    logger("editor_editfile: fname length > 0: Continue...");
    #continue if passed file exists:
    logger("editor_editfile: --> loading XML file $path$fname");
    if(fileExists($path . $fname) == 1)
    {
        logger("editor_editfile: --> XML datafile exists: Proceed");
        #set flag to enable form:
        $FIELD_IS_ENABLED = "";
        
        #get the data for the submitted file:
        logger("editor_editfile: --> loading XML file $path$fname");
        $src_xml = getFile($path . "/" . $fname);
        
        #we have $fname at this point, from either the initial url param, or from the POSTed value:
        #we can therefore set the friendlyname property:
        $ELEMENT_TO_EDIT_CAPTION    = getXMLTagParameter($ELEMENT_TO_EDIT,$src_xml,friendlyname);
        
        #set vars from XML. we want to get the content of the passed XML content tag:
        $linktext                   = getXMLData("linktext",    $src_xml);
        $pagetitle                  = getXMLData("pagetitle",   $src_xml);
        $description                = getXMLData("description", $src_xml);
        $keywords                   = getXMLData("keywords",    $src_xml);
        
        #if $formvalue has not been set - ie the form has not yet been submitted - set it from the XML:
        if(length($formvalue) eq 0)
        {
          $formvalue        = getXMLData($ELEMENT_TO_EDIT,        $src_xml);
        }

        $content            = getXMLData($ELEMENT_TO_EDIT,        $src_xml);

        #get the datatype of the passed content tag, and render an appropriate HTML form element.
        #this call is only made if the value has not been passed on form submission:
        if(length($datatype) eq 0)
        {
          $datatype = getXMLTagParameter($ELEMENT_TO_EDIT,$src_xml,"datatype");
        }
        ################################################################
        # GENERATE EDIT ELEMENTS BY CONTENT TYPE 
        # datatypes are "property", "text", "string", "image" or "core".
        ################################################################
        
        $CONTENT_ELEMENT    = "";
        if($datatype eq "text")
        {
          $CONTENT_ELEMENT  = "<textarea style=\"font-family:arial;font-size:9pt;\" name=\"$ELEMENT_TO_EDIT\" id=\"$ELEMENT_TO_EDIT\" cols=\"108\" rows=\"24\">$formvalue</textarea><span style=\"font-size:0.8em;\">[Editor by <a href=\"http://tinymce.moxiecode.com/\" title=\"Tiny MCE\" target=\"_blank\">TinyMCE</a>.]</span>";
        }
        
        if($datatype eq "string")
        {
          $CONTENT_ELEMENT  = "<input type=\"text\" name=\"$ELEMENT_TO_EDIT\" value=\"$formvalue\" />";
        }
        
        if($datatype eq "image")
        {
          $CONTENT_ELEMENT = "<select name=\"$ELEMENT_TO_EDIT\">";
          $IMAGE_ELEMENT_FILTER = getXMLTagParameter($ELEMENT_TO_EDIT,$src_xml,"imagepath");
          $CONTENT_ELEMENT .= getImagesAsDropdown($content, $IMAGE_ELEMENT_FILTER);
          print($IMAGE_ELEMENT_FILTER);
        }

        if($FORM{"update"} eq "go")
        {
            logger("editor_editfile: --> begin update step:");
            $linktext       = $FORM{"linktext"};
            $pagetitle      = $FORM{"pagetitle"};
            $description    = $FORM{"description"};
            $keywords       = $FORM{"keywords"};
            $content        = $FORM{$ELEMENT_TO_EDIT};
            $fname          = $FORM{"fname"};
            
            logger("editor_editfile: --> Core data values:");
            logger("editor_editfile: --> linktext = $linktext");
            logger("editor_editfile: --> pagetitle = $pagetitle");
            logger("editor_editfile: --> description = $description");
            logger("editor_editfile: --> keywords = $keywords");
            logger("editor_editfile: --> $ELEMENT_TO_EDIT = $content");
            logger("editor_editfile: --> fname = $fname");
            logger("editor_editfile: --> content = $content");
            $src_xml        = getFile($path . "/" . $fname);
            
            logger("editor_editfile: --> source XML BEFORE processing:");
            logger("$src_xml");
            $src_xml        = setXMLData("pagetitle",       $src_xml,   $pagetitle);
            $src_xml        = setXMLData("linktext",        $src_xml,   $linktext);
            $src_xml        = setXMLData("description",     $src_xml,   $description);
            $src_xml        = setXMLData("keywords",        $src_xml,   $keywords);
            #$src_xml        = replace(setXMLData($ELEMENT_TO_EDIT,  $src_xml,   $content),"\n",""); #more funky stuf with newlines
            $src_xml        = setXMLData($ELEMENT_TO_EDIT,  $src_xml,   $content);
            logger("editor_editfile: --> source XML AFTER processing:");
            logger("$src_xml");
            
            logger("editor_editfile: --> Sending processed XML string to updateFile:");
            updateFile($fname,$src_xml);
        }
    }
    else
    {
        $result = "<p>File does not exist. Cannot continue.</p>";
    }
    #pass the name of the element - which is also the name of the form field:
    #note - we dont want to add an image to a string - such as a heading.
    if($datatype eq "text")
    {
      $imagelinks = getImagesForInsert($ELEMENT_TO_EDIT);
    }
}

print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<script type="text/javascript" src="/ccms/editor/script/edit.js"></script>
<script language="javascript" type="text/javascript" src="/ccms/editor/tiny_mce/tiny_mce.js"></script>

<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css" />
<link rel="stylesheet" href="/edit/wysiwyg/styles/styles.css" type="text/css" />
<title>EDITOR: edit existing page</title>

</head>
<body>

<script language="javascript" type="text/javascript">
tinyMCE.init({
	mode : "textareas",
	theme : "advanced",
    theme_advanced_buttons1 : "bold,italic,underline,|,formatselect,|,justifyleft,justifycenter,justifyright,|,bullist,numlist,anchor,link,unlink,|,image,code",
    theme_advanced_buttons2 : "",
    theme_advanced_buttons3 : "",
    theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	theme_advanced_statusbar_location : "bottom",
	plugins : "advimage",
	
	//call server-side script to return links - determined by config?
	//external_link_list_url : "/ccms/editor/tinymce_linklist.pl",
	
	//Call server-side script to return images - determined by config?
    external_image_list_url : "/ccms/editor/tinymce_imagelist.pl"
});
</script>

<div>
<form name="newpage" method="post" action="$ENV{"SCRIPT_NAME"}">
    <input type="hidden" name="fname" value="$fname" $FIELD_IS_ENABLED />
    <input type="hidden" name="update" value="go" $FIELD_IS_ENABLED />
    <input type="hidden" name="contentid" value="$ELEMENT_TO_EDIT" />
    <input type="hidden" name="datatype" value="$datatype" />
    <h1>Standard page properties:</h1>
    <table>
        <tr>
            <td class="left"></td>
            <td>Linktext:</td>
            <td><input type="text" name="linktext" value="$linktext" $FIELD_IS_ENABLED /></td>
            <td>Title:</td>
            <td><input type="text" name="pagetitle" value="$pagetitle" $FIELD_IS_ENABLED /></td>
            <td class="right"></td>
        </tr>
        <tr>
            <td class="left"></td>
            <td>Description:</td>
            <td><input type="text" name="description" value="$description" $FIELD_IS_ENABLED /></td>
            <td>Keywords:</td>
            <td><input type="text" name="keywords" value="$keywords" $FIELD_IS_ENABLED /></td>
            <td class="right"></td>
        </tr>
    </table>
    <h1>Edit '$ELEMENT_TO_EDIT_CAPTION':</h1>
    <table>
        <tr>
            <td class="left"></td>
            <td colspan="4">$CONTENT_ELEMENT</td>
            <td class="right"></td>
        </tr>
        <tr>
            <td class="left"></td>
            <td colspan="4">
                <input type="button" value="Update" onclick="submitAndRefresh()" $FIELD_IS_ENABLED />
                <!-- input type="reset" value="Clear" $FIELD_IS_ENABLED / -->
            </td>
            <td class="right"></td>
        </tr>
    </table>
END_HTML
######## Removed. Replace with an image browser/URL copy list
#if($datatype eq "text"){
#print <<END_IMAGE_HTML;
#    <h1>Add images:</h1>
#    <p>Choose from the available images here. Click on the '+' to add.</p>
#    <table>
#        <tr>
#            <td class="left"></td>
#            <td>
#                <div id="availableimages">$imagelinks</div>
#            </td>
#            <td class="right"></td>
#        </tr>
#    </table>
#END_IMAGE_HTML
#}
print <<END_HTML2;
    $result
    <p><a href="/ccms/editor/editor_newfile2.pl">Add a new page</a> or <a href="#" onclick="window.close();">Exit</a></p>
    </form>
</div>
</body>
</html>
END_HTML2
