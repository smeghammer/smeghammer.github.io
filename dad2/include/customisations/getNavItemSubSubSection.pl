######################################################################
#### NAV ITEM LEVEL DETERMINATION METHOD: 
#### 
#### INPUT: Current page relative URL
#### OUTPUT: String indicating current SUB SECTION
####                                                     
#### DEPENDANCIES:  none.                                    
######################################################################
sub getNavItemSubSubSection
{
    my $currUrl             = $_[0];
    my @currPageUrlParts    = split("/",$currUrl);
    my $currSubSubSection      = false;
    
    #only a sub-section if at level 2 or more:
    if(@currPageUrlParts eq 4)
    {
        $s = $currPageUrlParts[3];
        @x = split(/\./,$s);
        $currSubSubSection = @x[0];
    }
    
    #sub-URLs - "section/part/page.pl" - return 'subsection'
    if(scalar @currPageUrlParts > 4)
    {
        $currSubSubSection = @currPageUrlParts[3];
    }

    return $currSubSubSection;
}
1;
