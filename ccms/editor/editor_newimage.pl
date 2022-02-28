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
my $origfile = $cgi->param('img');

#use configured image upload dir:
my $UPLOADDIR = $IMAGE_LOCATION;

#extract the filename from a path (as passed by IE):
$file=~m/^.*(\\|\/)(.*)/; # strip the remote path and keep the filename
my $name = $2; 

#check for IE as IE passes the whole path. Set the filename to the path-stripped version:
if(index($ENV{'HTTP_USER_AGENT'},"MSIE") != -1){
    $file = $name;
}

#render HTML header:
print <<HTML_HEAD;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="/ccms/styles/edit.css" rel="stylesheet" type="text/css" />
<title>Upload</title>
</head>
<body>
HTML_HEAD

#process upload:
if($file){
    my $result = "";
    #print "form value: ".$file."<br>";
    #print "extracted filename: ".$name."<br>";

    $root = getRoot();

    #check for existence of file first:
    print "checking file /$IMAGE_LOCATION/$file";
    if(fileExists("/$IMAGE_LOCATION/$file") eq 1){
        $result .= "File '$file' already exists.<br />Please rename and try again.";
    }
    else{
        $result .= " File saved as '$file'.";
        #print "File Exists: ".fileExists("/$IMAGE_LOCATION/$file") . "<br />";
        open(LOCAL, ">$root/$IMAGE_LOCATION/$file") or die $!; #set the filename fo whatever we determine:
        binmode(LOCAL);
        while(<$origfile>) {    #load file as passed by the browser form
            print LOCAL $_;
        }
        close LOCAL;
    }
    #print 
    print <<END_UPLOAD
    <div class="popup_wrapper">
    $result;
    </div>
END_UPLOAD
}
#render form:
else{
    print <<END_FORM_HTML;
    <div class="popup_wrapper">
        <h1>Image upload</h1>
        <span class="popup_form">
            
            <p>Browse to an image and click OK:</p>
            <form name="upload" enctype="multipart/form-data" method="post" action="$ENV{'SCRIPT_NAME'}">
                <table>
                    <tr>
                        <td>
                            Select file:
                        </td>
                        <td>
                            <input class="input_file" type="file" name="img" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>    
                            <input class="input_ok" type="submit" value="OK" />
                        </td>
                    </tr>
                </table>
            </form>
        </span>
    </div>
END_FORM_HTML
}

print <<HTML_FOOT;
    <p>
        [<a href="#" onclick="javascript:alert('Closing window');window.close();">close</a>]
    </p>
</body>
</html>
HTML_FOOT
