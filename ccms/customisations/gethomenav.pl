sub getHomeNav
{
    @parts = split(/\r\n/,getFile("/ccms/data/navtest.dat"));
    my $output = "<ul>";
    for($a=0;$a<scalar(@parts);$a++){
        $output .= "<li><a href=\"" . $parts[$a] . ".pl\" title=\"" . getXMLData("linktext",getFile($parts[$a].".xml")) . "\">" . getXMLData("linktext",getFile($parts[$a].".xml")) . "</a></li>\r\n";
    }
    $output .= "</ul>";
    return $output;
}


1;
