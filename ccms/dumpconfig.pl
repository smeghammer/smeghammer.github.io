#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
print "<html><head><title>CONFIG</title></head><body>";
#get config:
print "<h1>TAGS</h1>";
print "<table border=\"1\">\n";
print "<tr><td>CCMS TAG</td><td>CCMS NAME</td><td>Edit link rendered</td></tr>\n";
for(my $a=0;$a<@TAGS_TO_RENDER;$a++){
    print "<tr><td>" . $TAGS_TO_RENDER[$a]{placeholder} . "</td><td>" . $TAGS_TO_RENDER[$a]{tag} . "</td><td>" . $TAGS_TO_RENDER[$a]{createeditlink} . "</td></tr>\n";
}
print "</table>\n";

print "<h1>SITE SECTIONS</h1>";
print "<table border=\"1\">\n";
print "<tr><td>CCMS TAG</td><td>CCMS NAME</td></tr>\n";
for(my $a=0;$a<@SITE_SECTIONS;$a++){
    print "<tr><td>" . $SITE_SECTIONS[$a]{path} . "</td><td>" . $SITE_SECTIONS[$a]{linktext} . "</td></tr>\n";
}
print "</table>\n";

print "<h1>USERS</h1>";
print "<table border=\"1\">\n";
print "<tr><td>Username</td><td>Full Name</td><td>Email</td><td>Permission mask</td></tr>\n";
for(my $a=0;$a<@SITE_SECTIONS;$a++){
    print "<tr><td>" . $USERS[$a]{user} . "</td><td>" . $USERS[$a]{fullname} . "</td><td>" . $USERS[$a]{email} . "</td><td>" . $USERS[$a]{rights} . "</td></tr>\n";
}
print "</table>\n";
print "<h1>OTHER</h1>";
print "<table border=\"1\">";
print "<tr><td>Default layout template</td><td>$DEFAULT_TEMPLATE</td></tr>";
print "<tr><td>Logging enabled</td><td>$USE_LOGGING</td></tr>";
print "</table>";
print "</body></html>\n";
