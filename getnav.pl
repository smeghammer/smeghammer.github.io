#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

@parts = split(/\n/,getFile("/ccms/data/navtest.dat"));
#print scalar(@parts);

$output = "<ul>";
for($a=0;$a<scalar(@parts);$a++){
    $output .= "<li><a href=\"" . $parts[$a] . ".pl\" title=\"" . getXMLData("linktext",getFile($parts[$a].".xml")) . "\">" . getXMLData("linktext",getFile($parts[$a].".xml")) . "</a></li>";
}
$output .= "</ul>";

#print $output;

print "NAV: ".getHomeNav();
