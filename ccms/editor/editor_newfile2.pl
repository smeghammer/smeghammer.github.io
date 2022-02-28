#!/usr/bin/perl
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#check for no auth and redirect if no login:
if(getAuth() eq false){
    print "HTTP/1.1 302 Object moved\r\n";
    print "Location: " . $SITE_BASE_URL;
}
print "Content-type: text/html\r\n\r\n";

#generate empty radio array:
if(length($FORM{"fname"}) eq 0){
  #set up the form radio buttons for path using the global config directories array:
  $path_radio_buttons = "<input type=\"radio\" name=\"path\" value=\"/\" />/<br />\n";
  for(my $a = 0; $a < scalar(@SITE_SECTIONS); $a++){
    $path_radio_buttons .= "<input type=\"radio\" name=\"path\" value=\"/" . $SITE_SECTIONS[$a]{path} . "/\" />/" . $SITE_SECTIONS[$a]{path} . "/<br />\n";
  }
}


if($ENV{'REQUEST_METHOD'} eq 'POST')
{
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
}
#we can use the authorised user - held as a cookie value - to add to the metadata of the page:
$user = getCookie("user");
 
if(length($FORM{"fname"}) > 0)
{
  #loop over form vars - each element has the same name as the 'tag' defined in the config sub.
  $fname      = $FORM{"fname"};
  $linktext   = $FORM{"linktext"};
  $pagetitle  = $FORM{"pagetitle"};
  $description= $FORM{"description"};
  $keywords   = $FORM{"keywords"};
  $author     = $FORM{"author"};
  $path       = $FORM{"path"};

    #set up the form radio buttons for path using the global config directories array, this time with the selected one checked:
    $path_radio_buttons = "<input type=\"radio\" name=\"path\" value=\"/\" ";
    if($path eq "/")
    {
      $path_radio_buttons .= "checked=\"checked\"";
    }
    $path_radio_buttons .= " />/<br />\n";
    for(my $a = 0; $a < scalar(@SITE_SECTIONS); $a++)
    {
      $path_radio_buttons .= "<input type=\"radio\" name=\"path\" value=\"/" . $SITE_SECTIONS[$a]{path} . "/\" ";
      
      #determine which radio button will be selected:
      if($path eq "/".$SITE_SECTIONS[$a]{path}."/")
      {
        $path_radio_buttons .= "checked";
      }
      $path_radio_buttons .= " />/" . $SITE_SECTIONS[$a]{path} . "/<br />\n";
    }

    #replace excess newlines:
    $content    = replace($content,"\n","");
    
    #result message:
    $result     = "";
    
    #load XML template:
    $src_xml = getFile("ccms/template/content_template.xml");
  
    #replace the core XML template placeholders with submitted vars:
    $src_xml     = replace($src_xml,"{CMS_PAGETITLE}",    $pagetitle);
    $src_xml     = replace($src_xml,"{CMS_KEYWORDS}",     $keywords);
    $src_xml     = replace($src_xml,"{CMS_AUTHOR}",       $user);         #from logged in user above.
    $src_xml     = replace($src_xml,"{CMS_OWNER}",        $user);         #from logged in user above.
    $src_xml     = replace($src_xml,"{CMS_DESCRIPTION}",  $description);
    $src_xml     = replace($src_xml,"{CMS_LINKTEXT}",     $linktext);

    #now create the new XML file at submitted path:
    if(fileExists($path . $fname . ".xml") == 0)
    {
        #print "creating file...<br>";
        $result = createFile($fname . ".xml",$path,$src_xml);
    }
    else
    {
        $result = "XML datafile already exists. Cannot continue."
    }
    
    #create the source .pl file:
    $src_pl_stub = getFile("ccms/template/stub_src_template.tmpl");
    if(fileExists($path . $fname . ".pl") == 0)
    {
        #now replace the CMS tags with the appropriate values:
        $src_pl_stub = replace($src_pl_stub,"{CMS_PATHONLY}",   $path);
        $src_pl_stub = replace($src_pl_stub,"{CMS_FILENAME}",   $fname);
        createFile($fname . ".pl",$path,$src_pl_stub);
        $result = "<p>File '". $path . $fname . ".pl' created successfully!</p>";
        $result .= "Select the content area to edit from the links below:<br />";
        
        #generate content editing links from list of editable areas
        #defined in the XML template:
        #[note to me: can I redo the XML functions to return a hashmap? or can I pass a wildcard?]
        
        for($counter=0;$counter<scalar(@TAGS_TO_RENDER);$counter++)
        {
          if($TAGS_TO_RENDER[$counter]{createeditlink} eq true)
          {
            $result .= "<a href=\"/ccms/editor/editor_editfile.pl?fname=". $path . $fname . ".xml&amp;contentid=" . $TAGS_TO_RENDER[$counter]{tag} . "\">" . getXMLTagParameter($TAGS_TO_RENDER[$counter]{tag},$src_xml,"friendlyname") . "</a><br />";
          }
        }
     }
    else
    {
        $result = "File already exists. Cannot continue.";
    }
}
print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<script type="text/javascript" src="/script/edit.js"></script>
<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css" />
<title>EDITOR: create new page</title>

</head>
<body>
<div>
<form name="newpage" method="post" action="$ENV{"SCRIPT_NAME"}">
<h1>Create new page</h1>
<p>New page properties:</p>
<table>
    <tr>
        <td class="left"></td>
        <td>filename: (no extension)</td>
        <td><input type="text" name="fname" value="$fname" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td>linktext:</td>
        <td><input type="text" name="linktext" value="$linktext" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td>page title:</td>
        <td><input type="text" name="pagetitle" value="$pagetitle" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td>HTML description:</td>
        <td><input type="text" name="description" value="$description" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td>HTML keywords: (nnn,nnn,nnn)</td>
        <td><input type="text" name="keywords" value="$keywords" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td>HTML Author:</td>
        <td><input type="text" name="author" value="$author" /></td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td valign="top"><b>Path:</b></td>
        <td>
            $path_radio_buttons
        </td>
        <td class="right"></td>
    </tr>
    <tr>
        <td class="left"></td>
        <td></td>
        <td><input type="submit" value="Create" /><input type="reset" value="Clear" /></td>
        <td class="right"></td>
    </tr>
    
     <tr>
         <td class="left"></td>
        <td>Content:</td>
        <td>$result</td>
        <td class="right"></td>
    </tr>
</table>
</form>
</div>
</body>
</html>
END_HTML
