#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
#print core($ENV{'SCRIPT_NAME'});

#get the nav data from the default XMLNav file.
#my @navdata;
#@navdata[0] = {url => 'test1.zip',  linktext  => 'item 1'};
#@navdata[1] = {url => 'test2.zip',  linktext  => 'item 2'};
#@navdata[2] = {url => 'test3.zip',  linktext  => 'item 3'};
#@navdata[3] = {url => 'test4.zip',  linktext  => 'item 4'};
#@navdata[4] = {url => 'test1.zip',  linktext  => 'item 1'};
#@navdata[5] = {url => 'test2.zip',  linktext  => 'item 2'};
#@navdata[6] = {url => 'test3.zip',  linktext  => 'item 3'};
#@navdata[7] = {url => 'test4.zip',  linktext  => 'item 4'};
#@navdata[8] = {url => 'test1.zip',  linktext  => 'item 1'};
#@navdata[9] = {url => 'test2.zip',  linktext  => 'item 2'};
#@navdata[10] = {url => 'test3.zip',  linktext  => 'item 3'};
#@navdata[11] = {url => 'test4.zip',  linktext  => 'item 4'};


#set XMLNav file from the navdata. This would be set from the editor gui.
#$test = setXMLNavData(@navdata);

@currNavData = getXMLNavData();

#collect request data:
$actionItem     = getRequest("item");
$newUrl         = getRequest("url");
$newLinktext    = getRequest("linktext");

$JSNavArray = "var navArray=new Array();\n";
if($actionItem ne ""){
    print("actionItem '$actionItem' is defined...");
    my @newNavData;
    $n = 0;
    for($x=0;$x<scalar(@currNavData);$x++){
        
        if($actionItem eq "item$x"){
            print "ADDING ITEM!<br />";
            $newNavData[$x + $n] = {url => $newUrl,  linktext  => $newLinktext};
            $n = 1;
        }
        
        $newNavData[$x + $n] = $currNavData[$x];
    }
    setXMLNavFile(setXMLNavData(@newNavData));
    #print("<xmp>".setXMLNavData(@newNavData)."</xmp>");
}



$navEditForm = "";
for(my $a=0;$a<scalar(@currNavData);$a++){
    #build radio array for form:
    $navEditForm .= "<input type=\"radio\" name=\"item\" value=\"item$a\"";
    if($actionItem eq "item".$a){
        $navEditForm .= " checked=\"checked\" ";
    }
    $navEditForm .= " />$currNavData[$a]{'linktext'}<br />\n";

    #and build JS array for client-side checking:
    $JSNavArray .= "navArray.push({url:\"" . $currNavData[$a]{'url'} . "\",linktext:\"" . $currNavData[$a]{'linktext'} . "\"})\n";
}

print <<END_HTML;
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script type="text/javascript" src="/ccms/editor/script/edit.js"></script>
    <script type="text/javascript">
    $JSNavArray
    </script>
    <title>NAVDATA WRITE TEST</title>
</head>
<body>
<form name="newnav" method="get" action="$ENV{SCRIPT_NAME}">

$navEditForm

<input type="button" value="Add above" onclick="updateNav(document.forms.newnav,'above')" /><br />
<input type="button" value="Add below" onclick="updateNav(document.forms.newnav,'below')" /><br />
<input type="button" value="Remove" onclick="updateNav(document.forms.newnav,'remove')" /><br />
<input type="hidden" name="action" value="" />
new URL: <input type="text" name="url" value="$url" />
new Linktext: <input type="text" name="linktext" value="$linktext" />
</form>
</body>
</html>
END_HTML
