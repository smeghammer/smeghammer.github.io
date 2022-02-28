#generate an HTML unordered list structure of topnav links:
sub getPrimaryNav
{
    #passed argument - page URL:
    my $currUrl     = $_[0];

    my $currLevel           = getNavItemLevel($currUrl);
    my $currSection         = getNavItemSection($currUrl);
    
    #output:
    my $topnav              = "<ul id=\"topnav\">\n";
    
    for($i=0;$i<scalar(@nav2);$i++)
    {
        if((getNavItemLevel($nav2[$i]{relativeUrl}) eq 1) && ($nav2[$i]{relativeUrl} ne "/index.pl") && $nav2[$i]{visible} eq "true")
        {
            if($currUrl eq $nav2[$i]{relativeUrl})
            {
                $topnav .= "\t<li class=\"on\">$nav2[$i]{linkText}</li>\n";
            }
            
            else
            {
                if($currLevel eq 1)
                {
                    $topnav .= "\t<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>\n";
                }
                if($currLevel > 1)
                {
                    if($currSection eq getNavItemSection($nav2[$i]{relativeUrl}))
                    {
                        $topnav .= "\t<li  class=\"on\"><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>\n";    
                    }
                    else
                    {
                        $topnav .= "\t<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>\n";
                    }
                }
            }
        }
    }
    $topnav .= "</ul>\n";
    return($topnav);
}

1;
