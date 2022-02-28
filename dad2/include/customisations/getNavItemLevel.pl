######################################################################
#### NAV ITEM LEVEL DETERMINATION METHOD: 
#### 
#### INPUT: Current page relative URL
#### OUTPUT: Integer indicating the depth of the passed URL -
#### /path/part/url.htm would be level 3
####                                                     
#### DEPENDANCIES:  none.                                    
######################################################################
sub getNavItemLevel
{
    my $currUrl             = $_[0];
    my @currPageUrlParts    = split("/",$currUrl);
    my $currLevel           = (scalar @currPageUrlParts) - 1;
    return $currLevel;
}
1;
