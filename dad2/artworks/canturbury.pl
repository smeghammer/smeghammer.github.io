#!/usr/bin/perl
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

print core($ENV{'SCRIPT_NAME'});

#secondary nav:
sub getLeftNav()
{
    $currUrl = $_[0];
    my @pathparts;
    my $topnav = "<ul>\n";
    for($i=0;$i<scalar(@nav);$i++)
    {
        @pathparts = split("/",$nav[$i][1]);
        #print scalar @pathparts;
        if((scalar @pathparts eq 2) && ($nav[$i][1] ne "/index.pl"))
        {
            if($currUrl eq $nav[$i][1])
            {
                $topnav .= "\t<li class=\"hilite\">$nav[$i][0]</li>\n";
            }
            else
            {
                $topnav .= "\t<li><a href=\"$nav[$i][1]\" title=\"$nav[$i][0]\">$nav[$i][0]</a></li>\n";
            }
        }
    }
    $topnav .= "</ul>\n";
    return($topnav);
}
