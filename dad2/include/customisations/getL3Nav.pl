######################################################################
#### LEFT HAND NAV RENDERER: 
#### 
#### INPUT: Current page relative URL
####                                                          
#### DEPENDANCIES:  none.                                    
######################################################################
sub getL3Nav
{
    my $currUrl             = $_[0];
    my $currSection         = getNavItemSection($currUrl);
    my $currSubSection      = getNavItemSubSection($currUrl);
    my $currSubSubSection   = getNavItemSubSubSection($currUrl);
    my @currPageUrlParts    = split("/",$currUrl);
    my $currLevel           = getNavItemLevel($currUrl);
    my $L3count             = 0;
    my @pathparts;
    my $l3nav               = "";

    
    #print "L3: currSection: $currSection<br />";
    #print "L3: currSubSection: $currSubSection<br />";
    
    if(@currPageUrlParts[1] ne "index.pl" || $currLevel > 2)
    {
        #iterate over the nav array:
        for(my $i=0;$i<scalar(@nav2);$i++)
        {
            #we are only interested in L3 nav items:
            if(getNavItemLevel($nav2[$i]{relativeUrl}) eq 3 && $nav2[$i]{visible} eq "true")
            {
                $subsect = getNavItemSubSection($nav2[$i]{relativeUrl});
                
                $subsubsect = getNavItemSubSubSection($nav2[$i]{relativeUrl});
                
                #check for the index [2] being the subsection. This will only be true for the child pages.
                #we also only want to show L3 items in general:
                
                #if we are on L2 homepage, display L3 as child links:
                if($currSubSection eq $subsect && $currLevel eq 2)
                {
                    $l3nav .= "<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>";
                    $L3count++;
                }
                
                #if we are on L3, diplay L3 sibs + self:
                if(($currSubSection eq $subsect) && ($currLevel eq 3))
                {
                    #show children of SELF when on L4 parent page:
                    if($nav2[$i]{relativeUrl} eq $currUrl)
                    {
                        $l3nav .= "<li class=\"on\">$nav2[$i]{linkText}";
                        $l3nav .= getL4Nav($currUrl);
                        $l3nav .= "</li>";
                    }
                    #otherwise, just render a link to the sibs:
                    else
                    {
                        $l3nav .= "<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>";
                    }    
                    $L3count++;
                }
                
                #show link from parent:
                if(($currSubSection eq $subsect) && ($currLevel > 3))
                {
                    #PARENT:
                    if($currSubSubSection eq $subsubsect)
                    {
                        $l3nav .= "<li class=\"on\"><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a>";
                        $l3nav .= getL4Nav($currUrl);
                        $l3nav .= "</li>";
                    }
                    else
                    {
                        $l3nav .= "<li class=\"on\"><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>";
                    }
                    $L3count++;
                }
            }
        }
    }

    if($L3count > 0)
    {
        return("\n<ul id=\"l3nav\">$l3nav</ul>\n");
    }
}
1;
