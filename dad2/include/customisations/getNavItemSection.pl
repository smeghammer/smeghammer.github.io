######################################################################
#### NAV ITEM SECTION DETERMINATION METHOD: 
#### 
#### INPUT: Current page relative URL
#### OUTPUT: Integer indicating the depth of the passed URL -
#### /path/part/url.htm would be section 'path'
####                                                     
#### DEPENDANCIES:  none.                                    
######################################################################
sub getNavItemSection
{
    my $currUrl             = $_[0];
    my @currPageUrlParts    = split("/",$currUrl);
    my $currSection         = (scalar @currPageUrlParts) - 1;
    
    #root URLs - "/section.pl" - return 'section'
    if(@currPageUrlParts eq 2)
    {
        $s = $currPageUrlParts[1];
        @x = split(/\./,$s);
        $currSection = @x[0];
    }
    
    #sub-URLs - "section/part/page.pl" - return 'section'
    if(scalar @currPageUrlParts > 2)
    {
        $currSection = @currPageUrlParts[1];
    }
    return $currSection;
}
1;
