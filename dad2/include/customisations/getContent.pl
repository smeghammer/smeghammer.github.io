######################################################################
#### content renderer
#### 
#### INPUT: Current page relative URL
#### OUTPUT: Content file relating to unput URL, or a no-found message                                    
#### DEPENDANCIES:  none.                                    
######################################################################
sub getContent
{
    my $currUrl    = $_[0];
    my @currPageUrlParts = split(/\./,$currUrl);
    my $currContentFile = $currPageUrlParts[0] . ".tmpl";
    my $result;
    #first check that it exists:
    if(fileExists($currContentFile))
    {
        #$result = "getting content...";
        $result .= getFile($currContentFile);
    }
    else
    {
        logger("content file '$currContentFile' not found");
        #my @bits = split(,$currPageUrlParts[0]);
        createFile($currContentFile,"<!-- Automatically created content stub -->\n\n<!-- end content stub -->");
        $result = "content file not found - creating stub '$currContentFile'...";
    }
    return $result;
}
1;
