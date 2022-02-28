#!/usr/bin/perl
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

$image = getRequest("image");
$field = getRequest("field");

print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css" />
<title>Image preview</title>
<script type="text/javascript" src="/script/edit.js"></script>
</head>
<body>
    <div id="img">
        <img id="imageToInsert" src="$image" alt="Selected image" />

    <br />

    <ul>
        <li><a href="#" onclick="insertAtCursor(opener.document.newpage.$field,'$image',true)">Add this image</a></li>
        <li><a href="#" onclick="window.close();">Done</a></li>
    </ul>
    </div>

<script type="text/javascript">
if(document.images['imageToInsert'])
{
    window.resizeTo(document.images['imageToInsert'].width + 20,document.images['imageToInsert'].height + 200);
}
</script>
</body>

</html>
END_HTML
