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

#my ( $name, $path, $extension ) = fileparse ( $file, '\..*' );
#$file = $name . $extension;

my $UPLOADDIR = "images";

$file=~m/^.*(\\|\/)(.*)/; # strip the remote path and keep the filename
my $name = $2; 

print $name;

print <<HTML_HEAD;
<html>
<head>
<title>image upload test</title>
</head>
<body>
$IMAGE_LOCATION
HTML_HEAD


my $result = "";
if($file){

    print $cgi->param('img');

    $result = "Saved file /$IMAGE_LOCATION$file";

    $root = getRoot();

    open(LOCAL, ">$root/$IMAGE_LOCATION$file") or die $!; 
    binmode(LOCAL);
    while(<$file>) {
        print LOCAL $_;
    }
    close LOCAL;
    print $result;
}
else{
    print <<END_FORM_HTML;

    <form name="upload" enctype="multipart/form-data" method="post" action="$ENV{'SCRIPT_NAME'}">
        <input type="file" name="img" /><br />
        <input type="submit" value="OK" />
    </form>

END_FORM_HTML
}

print <<HTML_FOOT;
</body>
</html>
HTML_FOOT
