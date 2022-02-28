#!/usr/bin/perl
##############################################################################
# By BumbleBeeWare.com 2006
# Simple CAPTCHA using static premade images
# form.cgi
##############################################################################
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
print "Content-type: text/html\n\n";

# get a random number for the querry on the captcha.cgi
# a random number will force old browsers to update the image
# here we just used the time function, since it will be unique on every access of the page
$randomnumber = time;

print "<html>
<head>
<title>TEST CAPTCHA IMAGE Verification</title>
</head>

<body>

<form method=\"POST\" action=\"check-captcha.pl\">
    <p align=\"center\"><img src=\"/ccms/captcha/captcha.pl?$randomnumber\" width=\"100\" height=\"43\" /></p>
    <center><input type=\"text\" size=\"20\" name=\"verifytext\"><input
    type=\"submit\" name=\"checktext\" value=\"Verify\"></center>
</form>
</body>
</html>";


