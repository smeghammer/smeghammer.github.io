#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

require $document_root . "ccms/file/getfilecontentsasarray.pl";

$file = "ccms/data/navtest.dat";

print "getting file $file";
@array = getFileContentsAsArray($file);
@start = @array;
@end = @array;

@start = splice(@start,0,5);
@end = splice(@end,5,@array);
@insert = ("/rick/arch\r\n");

@new = (@start,@insert,@end);

$output = join("",@new);




print "START<br />";
print "item 2: " . $array[1] . "<br />";
print "LENGTH: " . @array . "<br />";
print "LENGTH: " . @start . "<br />";
print "LENGTH: " . @end . "<br />";
print "LENGTH: " . @new . "<br />";
print "final:<xmp> " . $output . "</xmp>";
print "END<br />";
print(getRequest("action") . "<br />");

if(getRequest("action") eq "add"){
    print("updating <br />");
    print(updateFile($file,$output));
}
