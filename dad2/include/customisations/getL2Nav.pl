######################################################################
#### LEFT HAND NAV RENDERER: 
#### 
#### INPUT: Current page relative URL
####                                                         
#### DEPENDANCIES:  none.                                    
######################################################################
sub getL2Nav
{
    my $currUrl             = $_[0];
    my @currPageUrlParts    = split("/",$currUrl);
    my $currLevel           = getNavItemLevel($currUrl);
    my $currSection         = getNavItemSection($currUrl);
    my $currSubSection      = getNavItemSubSection($currUrl);
    my $counter             = 0;

    my $lhnav = "\n<ul id=\"lhnav\">\n";

    #my @tempArray;
    #my @tempArray2;
    my $checkSubSection;
    #####################################
    if(@currPageUrlParts[1] ne "index.pl" || $currLevel > 1)
    {
        #iterate over the nav array:
        for(my $i=0;$i<scalar(@nav2);$i++)
        {
            #print ".";
            #we are only interested in L2 nav items:
            if(getNavItemLevel($nav2[$i]{relativeUrl}) eq 2 && $nav2[$i]{visible} eq "true")
            {
                #figure out which subsection we are on:
                $checkSubSection = getNavItemSubSection($nav2[$i]{relativeUrl});
                #print $nav2[$i]{visible}."<br />";
                if($currUrl eq $nav2[$i]{relativeUrl})
                {
                    $counter++;
                    $lhnav .= "\t<li class=\"on\">$nav2[$i]{linkText}";   
                    $lhnav .= getL3Nav($currUrl);   #insert nested HTML list for L3 nav
                    $lhnav .= "</li>\n";
                }
                
                #sibs and childs:
                else
                {
                    #current section homepage - render direct children when on section homepage:
                    if($currSection eq getNavItemSection($nav2[$i]{relativeUrl}) && getNavItemLevel($nav2[$i]{relativeUrl}) eq 2 && $currLevel <= 2)
                    {
                        $counter++;
                        $lhnav .= "\t<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>\n";
                    }
                    
                    #current section homepage - render L3 sibs when on L3 page:
                    if($currSection eq getNavItemSection($nav2[$i]{relativeUrl}) && getNavItemLevel($nav2[$i]{relativeUrl}) eq 2 && $currLevel >= 3)
                    {
                        $counter++;
                        if($checkSubSection eq $currSubSection)
                        {   $lhnav .= "\t<li class=\"on\"><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a>";
                            $lhnav .= getL3Nav($currUrl,$nav2[$i]{section});   #insert nested HTML list for L3 nav
                        }
                        else
                        {   
                            $lhnav .= "\t<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a>";
                        }
                        $lhnav .= "</li>\n";
                    }
                }
            }
        }
        $lhnav .= "</ul>\n";
    }

    if($counter > 0)
    {
        return($lhnav);
    }
}

1;
