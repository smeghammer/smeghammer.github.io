#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
#print core("/dev/subdev/subsubdev/subsubsubdev/", "ff");    #modify to use $ENV{'SCRIPT_NAME'}
print core($ENV{'SCRIPT_NAME'});
