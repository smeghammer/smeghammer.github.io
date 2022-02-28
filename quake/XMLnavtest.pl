#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
#print core($ENV{'SCRIPT_NAME'});

#get the nav data from the default XMLNav file.
print "calling nav file...<br>";
@navdata = getXMLNavData();
print "called nav file.<br>";

#set XMLNav file from the navdata. This would be set from the editor gui.
#$test = setXMLNavData(@navdata);

print "<html>";
print "navdata length: " . scalar(@navdata) . "<br />";
for(my $a=0;$a<scalar(@navdata);$a++){
    print $a . "-" . $navdata[$a]{'linktext'} . "<br>";
}

print <<END_HTML;
<head>
    <title>NAVDATA TEST</title>
</head>
<body>
<xmp>
$test
</xmp>
</body>
</html>
END_HTML
