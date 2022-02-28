##############################################################
#### EDITOR METHOD - 
#### generate edit links panel on page being edited.
####
#### INPUT:         string current page, string default page
#### OUTPUT:        string HTML edit links panel.
#### DEPENDANCIES:  getPureFileName
##############################################################
sub getEditPanel
{
    logger("in getEditPanel: Passed $_[0] and $_[1]");
    my $page           = $_[0];
    my $defaultpage    = $_[1];
    
    #get username:
    my $username = getUserProperty("fullname");
    
    my $output  =     "<div style=\"font-family:arial,sans-serif;font-size:0.8em;padding:2px;padding-left:30px;border:1px dashed black;background-color:white;margin:2px;\"><div class=\"editpanel\">Welcome <strong>$username</strong></div><div> ";
    $output .=    "<span class=\"editlink\">";
    
    
    #add stuff here to only show links to sufficiently authorised peeps.
    if((getUserProperty("rights") & $RIGHTS_CREATE) || (getUserProperty("rights") & $RIGHTS_ADMIN))
    {
        $output .=    "<a href=\"#\" onclick=\"editPage('/ccms/editor/editor_newfile2.pl')\">";
        $output .=    "<strong>Create</strong></a> new page.</span>";
    }

    #allow image upload:
    if((getUserProperty("rights") & $RIGHTS_UPLOAD) || (getUserProperty("rights") & $RIGHTS_ADMIN)){
        $output .=    "<a href=\"#\" onclick=\"editPage('/ccms/editor/editor_newimage.pl')\">";
        $output .=    "<strong>Upload</strong></a> image.</span>";    
    }

    if((getUserProperty("rights") & $RIGHTS_DELETE) || (getUserProperty("rights") & $RIGHTS_ADMIN))
    {
        #we don't want to delete the default page, otherwise going to directory will throw a 404 error.
        if(getPureFileName($page) ne $defaultpage)
        {
            $output .=    "<span class=\"editlink\">";
            $output .=    "<a onclick=\"javascript:return(confirm('Really delete this page?'));\" href=\"/ccms/editor/editor_deletefile.pl?page=" . substr($page,0,index($page,".")) . "\">";
            $output .=    "<strong>Delete</strong></a> this page.</span>";
        }
    }
    
    $output .=    "<span class=\"editlink\">";
    $output .=    "[<a href=\"/logout.pl?return=" . $page . "\"><strong>Logout</strong></a>]";
    $output .=    "</span></div></div>";
    #logger($output);
    return $output;
}

1;  #must return 1            
            
