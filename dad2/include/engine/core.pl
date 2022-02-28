##############################################################
#### ENGINE -                                                
#### generates the page to render from - ultimately - the 
#### XML data file.        
#### 
#### CALL HIERARCHY:
#### HTTP request for stub perl file
#### -> calls getPage() with stub file nane
#### 
#### The initial HTTP call is to the perl stub file
####                                                         
#### DEPENDANCIES:  none.                                    
##############################################################

sub core
{
    #submitted URL:
    my $currurl         = $_[0];
    logger("rendering page $currurl");
    #returned string:
    my $output = "";
    
    #get core data from array:
    my $currlinktext    = "";
    my $currsection     = "";
    my $currlayout      = "";
    for(my $counter=0;$counter<scalar @nav2;$counter++)
    {
        #if the passed URL matches the URL in the array, return the elements:
        if($nav2[$counter]{relativeUrl} eq $currurl)
        {
            $currlinktext = $nav2[$counter]{linkText};
            $currsection  = $nav2[$counter]{section};
            $currlayout   = $nav2[$counter]{layoutTemplate};
        }
    }

    #get the layout defined in config.pl by hask key $currentlayout and replace the {CMS_} tags
    $output  = replace(getFile($TEMPLATES{$currlayout}),"{CMS_TOPNAV}",     getPrimaryNav($currurl));
    $output  = replace($output,"{CMS_LHNAV}",      getL2Nav($currurl));
    $output  = replace($output,"{CMS_TITLE}",      $currlinktext);
    $output  = replace($output,"{CMS_CONTENT}",      getContent($currurl));
    return $output;
}

1; #must return 1
