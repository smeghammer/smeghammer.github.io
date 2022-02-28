sub getHomeLink
{
    my $out = "<a href=\"/index.pl\" title=\"Home\">Home</a>";
    if($ENV{'SCRIPT_NAME'} eq "/index.pl"){
        $out = "Home";
    }
    return $out;
}

1;
