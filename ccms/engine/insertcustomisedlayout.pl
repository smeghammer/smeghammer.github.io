##############################################################
#### ENGINE -                                                
#### 
#### insertCustomisedLayout
#### This method is a STUB and is where all the custom stuff
#### goes - navs, other programmatically inserted content etc.
####                                                         
#### DEPENDANCIES:  core.pl, any additional custom functions 
#### that are created..                                    
##############################################################

sub insertCustomisedLayout
{
    #input of core and ccms_content[n] post-processed string
    $output = $_[0];
    
    #do funky customisation stuff here:
    #will mostly be nav stuff. TODO: I will generate a nav OBJECT during page creation
    $output = replace($output,"{CMS_LHNAV}","bananana!!");
    
    $output = replace($output,"{CMS_HOMELINK}",getHomeLink());    
    $output = replace($output,"{CMS_LHNAV_TITLE}","[perhaps something funky here too]");
    $output = replace($output,"{CMS_RHNAV}",getFile("/ccms/template/lhnavtemp.tmpl"));
    
    #for Dad:
    $output = replace($output,"{CMS_DADLHNAV}",getDadNav());
    
    #for Rick:
    $output = replace($output,"{CMS_SERVICESNAV}",getHomeNav());

    return $output;
}

sub getDadNav
{
    my @navitems = (
        {url=>'index.pl',linktext=>'Home'},
        {url=>'1.pl',linktext=>'Concerts'},
        {url=>'2.pl',linktext=>'Workshops'},
        {url=>'3.pl',linktext=>'Compositions'},
        {url=>'4.pl',linktext=>'Bibliography'},
        {url=>'5.pl',linktext=>'Reviews'},
        {url=>'6.pl',linktext=>'Contact'},
    );
    my $output = "<ul id=\"lhnav\">";
    my @arr;
    for(my $a=0;$a<@navitems;$a++){
        @arr = split(/\//,$ENV{'SCRIPT_NAME'});
        if($arr[length(@arr)+1] ne $navitems[$a]{'url'}){
            $output .= "<li><a href=\"" . $navitems[$a]{'url'} . "\" title=\"" . $navitems[$a]{'linktext'} . "\">" . $navitems[$a]{'linktext'} . "</a></li>";
        }
        else{
            $output .=  "<li class=\"hilite\">" . $navitems[$a]{'linktext'} . "</li>";
        }
    }

    $output .= "</ul>";
    
    return $output;
}

1; #must return 1
