#!/usr/bin/perl -w
use CGI::Carp qw( fatalsToBrowser );
use strict; 
use CGI; 
my $query = new CGI; 

#this is a *nix command-line email utility:
my $sendmail    = "/usr/sbin/sendmail -t"; 
my $reply_to    = "Reply-to: silas\@smeghammer.com\n"; #the hosting domain!
my $subject     = "Subject: test\n"; 
my $content     = "arse\n"; 
my $to          = "sjewitt\@blueyonder.co.uk\n";

my $send_to = "To: " . $to; 
open(SENDMAIL, "|$sendmail") or die "Cannot open $sendmail: $!"; 
print SENDMAIL "From: webcontact\n";
print SENDMAIL $reply_to; 
print SENDMAIL $subject; 
print SENDMAIL $send_to; 
print SENDMAIL "Content-type: text/plain\n\n"; 
print SENDMAIL $content; 
close(SENDMAIL); 
print $query->header; 
print "Sendmail execution finished. return code=" . $?; #the '$?' retrieves the returncode.
 
