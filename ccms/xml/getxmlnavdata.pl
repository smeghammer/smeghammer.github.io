##############################################################
#### XML METHOD - 
#### get an array of hashes representing the current dir
#### nav data:
####
#### INPUT:         none
#### OUTPUT:        array of hashes. url & linktext, for further
####                formatting.
#### DEPENDANCIES:  none.
####             
##############################################################

sub getXMLNavData{
    $path = getPath() . "/navdata.xml";
    my $XMLSource   = getFile($path);
    my $itemcount      = getXMLData("itemcount",$XMLSource);
    my $pagedata       = getXMLData("item1",$XMLSource);
    my @navdata;
    
    for(my $a=0;$a<$itemcount;$a++){
        @navdata[$a] = {
            url => getXMLData('url',getXMLData("item$a",$XMLSource)),  
            linktext  => getXMLData('linktext',getXMLData("item$a",$XMLSource))
        };
    }
    
    return @navdata;
}

1;  #must always return 1.
