sub getLink{
    my $output = "";
    if(fileExists($_[0]. ".pl") eq 1){
        $output .= "<a href=\"" . $_[0] . ".pl\" title=\"" . getXMLData("linktext",getFile($_[0].".xml")) . "\">" . getXMLData("linktext",getFile($_[0].".xml")) . "</a>";
    }
    return $output;
}
1;
