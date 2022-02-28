sub getDefaultNav
{
    #TODO: extract the data file from tag(?) and pass here:
    #@parts = split(/\r\n/,getFile("/ccms/data/serviceofferings.dat"));
    #print("Supplied parameter: ".$_[0]."<br />");
    my @parts = split(/\n/,getFile($_[0]));
    my $a;
    my $spacer = $_[1];
    
    
    my $output = "\n$spacer<ul>\n";
    for($a=0;$a<scalar(@parts);$a++){
        my @bits = split(/,/,$parts[$a]);

        
        if(fileExists($bits[0].".pl") eq 1){
            if(scalar(@bits) eq 2){
                $output .= "\t$spacer<li>" . getXMLData("linktext",getFile($bits[0].".xml"));

           
                if(fileExists("/ccms/data/" . $bits[1]) eq 1){
                    $output .= getDefaultNav("/ccms/data/" . $bits[1],"$spacer\t");
                }
            }
            else{
                $output .= "\t$spacer<li><a href=\"" . $bits[0] . ".pl\" title=\"" . getXMLData("linktext",getFile($bits[0].".xml")) . "\">" . getXMLData("linktext",getFile($bits[0].".xml")) . "</a>";
            }
        }
        $output .= "</li>\n";
    }
    $output .= "$spacer</ul>\n";
    
    
    return $output;
}


1;
