#!/usr/bin/perl
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
if(length($document_root) == 0){$document_root = "C:\/DEV\/webtest\/";}
$incfile = $document_root . "include/subs.pl";
require $incfile;
$returnurl = getRequest("return");
        $logged_in = false;
        print "Set-Cookie:authorised=no\r\n";
        print "Content-type: text/html\r\n\r\n";
        print <<END_OK_HTML;
<html>
<head>
<link rel="stylesheet" href="ccms/styles/edit.css" type="text/css">
<title>Login OK</title>
</head>
<body>
<div id="login">
<h1>Logged out</h1>
<div>logged out OK.<br />
            Click <a href="$returnurl">here</a> to continue.    
</div>
</div></body>
END_OK_HTML
