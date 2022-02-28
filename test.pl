#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
$data = getFile("/ccms/config/navdata.dat");
print "TEST = $data" . "<br>";
$path = "ccms/config/navdata.dat";
$root            = getRoot();
$fullpath        = $root . $path;
print $fullpath . "<br>";
@navdata;
@temp;
open FILE, $fullpath || die "cannot open $fullpath : $!";
while( <FILE> )  #this syntax gets the input line.
{
    @temp = split(/,/,$_);
    
    print "data = '$_' <br>";
    #ignore comments
    if(length($_) > 3 && index($_,/#/) ne -1 && @temp eq 4){
        push(@navdata,{linktext => $temp[0], url =>  $temp[1], parent =>  $temp[2],order => $temp[3]});
    }
}
close FILE;

#build a nav hierarchy:
#$a = 0;
#$b = 0;
#$counter = 0;
#while($counter < @navdata){
    #print($navdata[$counter] . "<br />");
 #   $counter++;
#}

#getnavtree(@navdata);
###get L1:
#sub getnavtree
#{
#    my $sourcedata = $_[0];
#    #my $level = $_[1];
#    
#}


print "NAV DATA TEST: $navdata[0]{'linktext'}<br>";

#1,
#2,
#4,
#8,
#16,
#32

#bitwise test:
print 51 & 8;
