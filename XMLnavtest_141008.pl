#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
#print core($ENV{'SCRIPT_NAME'});

#$XML = getFile("navdata.xml");
#print $XML;

#$itemcount = getXMLData("itemcount",$XML);
#$pathdata = getXMLData("path",$XML);
#$pagedata = getXMLData("item1",$XML);

#source is array of hashes:
#my @navdata = (
#       {url => 'test1.pl',  linktext  => 'linktext1'},
#       {url => 'test2.pl',  linktext  => 'linktext2'},
#       {url => 'test3.pl',  linktext  => 'linktext3'},
#       {url => 'test4.pl',  linktext  => 'linktext4'}
#  );

#pust the data from the nav XML onto the array:
#my @navdata;
#@navdata[0] = {url => 'test1.zip',  linktext  => 'item 1'};
#@navdata[1] = {url => 'test2.zip',  linktext  => 'item 2'};
#@navdata[2] = {url => 'test3.zip',  linktext  => 'item 3'};
#@navdata[3] = {url => 'test4.zip',  linktext  => 'item 4'};
#####################
#for(my $a=0;$a<$itemcount;$a++){
#    @navdata[$a] = {
#        url => getXMLData('url',getXMLData("item$a",$XML)),  
#        linktext  => getXMLData('linktext',getXMLData("item$a",$XML))
#    };
#}
########################

@navdata = getXMLNavData();

print "<html>START<br />";
print "navdata length: " . scalar(@navdata) . "<br />";
for(my $a=0;$a<scalar(@navdata);$a++){
    print $a . "-" . $navdata[$a]{'linktext'} . "<br>";
}

print <<END_HTML;
<head>
    <title>NAVDATA TEST</title>
</head>
<body>

Path: $pathdata<br />
Num Items: $itemcount<br />
<xmp>PAGES: $pagedata</xmp>
</body>
</html>
END_HTML
