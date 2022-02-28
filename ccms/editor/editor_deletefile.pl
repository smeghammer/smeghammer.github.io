#!/usr/bin/perl
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#check for no auth and redirect if no login:
if(getAuth() eq false){
    print "HTTP/1.1 302 Object moved\r\n";
    print "Location: http://www.themidge.co.uk/\r\n";
}
print "Content-type: text/html\r\n\r\n";

#result message:
$result     = "";
$path       = "";
#get the file request value:
$fname      = urlDecode(getRequest("page"));
@pathparts = split(/\//,$fname);
$pathpart_length = @pathparts;
if($pathpart_length > 2){
  $path = "/" . @pathparts[1];
}
#print $path;
#print "filename submitted<br>";
if(fileExists($fname . ".xml") == 1){
    $result = "File $fname exists. Deleting...";
    #delete both the XML and the perl file:
    unlink($document_root . $fname . ".pl");
    unlink($document_root . $fname . ".xml");
}
else{
    $result = "File does not exist. Cannot continue.";
}

print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<script type="text/javascript" src="/script/edit.js"></script>
<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css" />
<title>EDITOR: delete page</title>

</head>
<body>
    <div>
        <h1>Deleting Page '$fname'</h1>
        <p>$result</p>
        <p>[<a href="$path/">Close</a>]</p>
    </div>
</body>
</html>
END_HTML
