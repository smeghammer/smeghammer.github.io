#!/usr/bin/perl
#use strict;
#use warnings;
use CGI;

use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#set standard input to BINARY mode:
binmode(STDIN);

my $cgi = new CGI;
my $file = $cgi->param('img');
#my $file2 = $cgi->param('img');

my $UPLOADDIR = "images";

#$file=~m/^.*(\\|\/)(.*)/; # strip the remote path and keep the filename
#my $name = $2; 

my $result = "";
if($file){
    $result = "Saved file $UPLOADDIR/$file";

    open(LOCAL, ">$UPLOADDIR/$file") or die $!; 
    binmode(LOCAL);
    while(<$file>) {
        print LOCAL $_;
    }
    close LOCAL;
}

print <<END_FORM_HTML;
<html>
<head>
<title>image upload test</title>
</head>
<body>
<form name="upload" enctype="multipart/form-data" method="post" action="$ENV{'SCRIPT_NAME'}">
    <input type="file" name="img" /><br />
    <input type="submit" value="OK" />
</form>
$result
</body>
</html>
END_FORM_HTML


