##############################################################
#### XML METHOD - 
#### set an XML string from an array of hashes. the string is
#### passedto the file save function for saving in the current
#### dir.
#### nav data:
####
#### INPUT:         array of hashes. url & linktext
#### OUTPUT:        none.
#### DEPENDANCIES:  none.
####             
#### NOTES:         The array of hashes is generated from the
####                editor GUI.
##############################################################

sub setXMLNavData{
    #get the passed array of hashes:
    my @args = @_; 
    my $XMLSource   = "navdataTEST.xml";
    my $itemcount      = scalar(@args);
    my $pagedata       = getXMLData("item1",$XMLSource);
    my $xmlnavdata     = "<?xml version=\"1.0\" encoding=\"windows-1250\"?>\n<navdata>";
    
    $xmlnavdata     .= "\n\t<itemcount>$itemcount</itemcount>";
    for(my $a=0;$a<$itemcount;$a++){
        $xmlnavdata .= "\n\t<item$a>\n\t\t\<url>" . $args[$a]{'url'} . "</url>";  
        $xmlnavdata .= "\n\t\t\<linktext>" . $args[$a]{'linktext'} . "</linktext>\n\t\</item$a>"; 
    }
    $xmlnavdata .= "\n</navdata>";
    
    #pass to file save method:
    setXMLNavFile("navdata.xml",getPath(),$xmlnavdata);
    
    return $xmlnavdata;
}

1;  #must always return 1.
