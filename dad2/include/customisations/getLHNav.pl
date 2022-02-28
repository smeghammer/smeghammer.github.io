sub getLHNav
{
    $currUrl    = $_[0];
    
    my @currPageUrlParts = split("/",$currUrl);
    my $currLevel  = -1;
    
    if((scalar @currPageUrlParts) eq 2){  $currLevel = 1;}
    if((scalar @currPageUrlParts) eq 3){  $currLevel = 2;}
    if((scalar @currPageUrlParts) eq 4){  $currLevel = 3;}

    my @pathparts;
    my $topnav = "<ul>\n";
    my $currSection;
    if($currLevel > 1)
    {
        $currSection = @currPageUrlParts[1];
    }
    
    print (scalar @currPageUrlParts);
    if(@currPageUrlParts[1] ne "index.pl" || $currLevel > 1)
    {
        for($i=0;$i<scalar(@nav);$i++)
        {
            #check that we only get LEVEL 1 nav items:
            @pathparts = split("/",$nav[$i][1]);
            
            if(scalar @pathparts > 2)
            {
                if($currUrl eq $nav[$i][1])
                {
                    $topnav .= "\t<li class=\"hilite\">$nav[$i][0]</li>\n";
                }
                
                else
                {
                    if($currLevel eq 1)
                    {
                        $topnav .= "\t<li><a href=\"$nav[$i][1]\" title=\"$nav[$i][0]\">$nav[$i][0]</a></li>\n";
                    }
                    if($currLevel > 1)
                    {
                    print $nav[$i][2]."<br>";
                        if($currSection eq $nav[$i][2])
                        {
                            $topnav .= "\t<li><a href=\"$nav[$i][1]\" title=\"$nav[$i][0]\"><strong>$nav[$i][0]</strong></a></li>\n";    
                        }
                        else
                        {
                           $topnav .= "\t<li><a href=\"$nav[$i][1]\" title=\"$nav[$i][0]\">$nav[$i][0]</a></li>\n";
                        }
                    }
                }
            }
        }
        $topnav .= "</ul>\n";
    }
    return($topnav);
}

1;
