######################################################################
#### LEFT HAND NAV RENDERER: 
#### 
#### INPUT: Current page relative URL
####                                                          
#### DEPENDANCIES:  none.                                    
######################################################################
sub getL4Nav
{
    my $currUrl             = $_[0];
    my $currSection         = getNavItemSection($currUrl);
    my $currSubSection      = getNavItemSubSection($currUrl);
    my $currSubSubSection   = getNavItemSubSubSection($currUrl);
    #my @currPageUrlParts    = split("/",$currUrl);
    my $currLevel           = getNavItemLevel($currUrl);
    my $L3count             = 0;
    my @pathparts;
    my $l4nav               = "";
    my $subsect;
    my $subsubsect;
    
    #print "L4: currSection: $currSection<br />";
    #print "L4: currSubSection: $currSubSection<br />";
    #print "L4: currSubSubSection: $currSubSubSection<br />";
    
    if(@currPageUrlParts[1] ne "index.pl" || $currLevel > 3)
    {
        #iterate over the nav array:
        for(my $i=0;$i<scalar(@nav2);$i++)
        {
            #print getNavItemLevel($nav2[$i]{relativeUrl});
            
            #we are only interested in L4 nav items:
            if(getNavItemLevel($nav2[$i]{relativeUrl}) eq 4 && $nav2[$i]{visible} eq "true")
            {        
                $subsect = getNavItemSubSection($nav2[$i]{relativeUrl});
                $subsubsect = getNavItemSubSubSection($nav2[$i]{relativeUrl});
                #print ".";
                
                #check for the index [2] being the subsection. This will only be true for the child pages.
                #we also only want to show L3 items in general:
                
                #if we are on L3, display L4 as child links:
                if($currSubSubSection eq $subsubsect && $currLevel eq 3)
                {
                    $l4nav .= "<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>";
                    $L4count++;
                }
                
                #if we are on L4, diplay L4 sibs + self:
                if($currSubSubSection eq $subsubsect && $currLevel >= 4)
                {
                    if($nav2[$i]{relativeUrl} eq $currUrl)
                    {
                        $l4nav .= "<li class=\"on\">$nav2[$i]{linkText}</li>";
                    }
                    else
                    {
                        $l4nav .= "<li><a href=\"$nav2[$i]{relativeUrl}\" title=\"$nav2[$i]{linkText}\">$nav2[$i]{linkText}</a></li>";
                    }    
                    $L4count++;
                }
            }
        }
    }
    #print "Count: ".$L4count;
    #return if we are 
    if($L4count > 0)
    {
        return("\n<ul id=\"l4nav\">$l4nav</ul>\n");
    }
}
1;
