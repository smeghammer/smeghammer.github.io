#!/usr/bin/perl -w
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

use CGI::Carp qw( fatalsToBrowser );
use strict; 
print "Content-type: text/html\r\n\r\n";

#this is a *nix command-line email utility:
my $sendmail    = "/usr/sbin/sendmail -t"; 
my $reply_to    = "Reply-to: silas\@smeghammer.com\n"; #the hosting domain!
my $subject     = "Subject: Website enquiry\n"; 
my $content     = ""; 
my $to          = "rick\@cg-services.co.uk,sjewitt\@blueyonder.co.uk,silas\@thecoven.co.uk\n";

#get POSTed data:
my $buffer; 
my @pairs; 
my $pair; 
my $name; 
my $value;
my %FORM;
# Read in text
$ENV{'REQUEST_METHOD'} =~ tr/a-z/A-Z/;
if ($ENV{'REQUEST_METHOD'} eq "POST"){
    read(STDIN,$buffer,$ENV{"CONTENT_LENGTH"});
}
else {
    $buffer = $ENV{'QUERY_STRING'};
}

# Split information into name/value pairs
@pairs = split(/&/, $buffer);
my $msgFromSubject = "";
foreach $pair (@pairs){
	($name, $value) = split(/=/, $pair);
	if($name eq "subject"){
        $msgFromSubject .= $value . "<br />";
    }
	$value =~ tr/+/ /;
	#$value =~ s/%(..)/pack("C", hex($1))/eg;
	$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
    $FORM{$name} = $value; #only useful for single values - checkboxes overwrite!
}

my $msgFromName     = $FORM{'name'};
my $msgFromEmail    = $FORM{'email'};
my $msgFromPhone    = $FORM{'phone'};
my $msgFromAddr = $FORM{'address'};
$msgFromAddr =~ s/[\n]/<br \/>/g;
my $msgFromMessage = $FORM{'message'};
$msgFromMessage =~ s/[\n]/<br \/>/g;

$content = "
<html style=\"font-family:arial;\">
    <body>
        <p>
            <b>Email enquiry</b><br />
            <i>From: </i>$msgFromName<br />
            <i>Email: </i>$msgFromEmail<br />
            <i>Tel: </i>$msgFromPhone<br />
            <i>Address:</i><br />
            $msgFromAddr<br />
            <i>Subject:</i><br />
            $msgFromSubject<br />
            <i>Enquiry/comments:</i><br />
            $msgFromMessage<br />
        </p>
    </body>
<html>";

my $send_to = "To: " . $to; 
open(SENDMAIL, "|$sendmail") or die "Cannot open $sendmail: $!"; 
print SENDMAIL "From: autoreply\@cg-services.co.uk\n";
print SENDMAIL $reply_to; 
print SENDMAIL $subject; 
print SENDMAIL $send_to; 
print SENDMAIL "Content-type: text/html\n\n"; 
print SENDMAIL $content; 
close(SENDMAIL); 

if($? == 0){
    print "Thank you for your query.";
}
else{
    print "There was a problem sending your query. return code=" . $?; #the '$?' retrieves the returncode.
}
