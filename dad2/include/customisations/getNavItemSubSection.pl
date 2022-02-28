######################################################################
#### NAV ITEM LEVEL DETERMINATION METHOD: 
#### 
#### INPUT: Current page relative URL
#### OUTPUT: String indicating current SUB SECTION
####                                                     
#### DEPENDANCIES:  none.                                    
######################################################################
sub getNavItemSubSection
{
    my $currUrl             = $_[0];
    my @currPageUrlParts    = split("/",$currUrl);
    my $currSubSection      = false;
    
    #only a sub-section if at level 2 or more:
    if(@currPageUrlParts eq 3)
    {
        $s = $currPageUrlParts[2];
        @x = split(/\./,$s);
        $currSubSection = @x[0];
    }
    
    #sub-URLs - "section/part/page.pl" - return 'subsection'
    if(scalar @currPageUrlParts > 3)
    {
        $currSubSection = @currPageUrlParts[2];
    }
    return $currSubSection;
}
1;
