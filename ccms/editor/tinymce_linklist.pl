#!/usr/bin/perl
print "Content-type: text/javascript\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

print <<END_HTML;
var tinyMCELinkList = new Array(
	// Name, URL
	["", "/a.pl"],
	["", "/index.pl"]);
END_HTML
