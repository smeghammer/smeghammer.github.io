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
    logger("core: Begin.");
    my $LOGGED_IN_USER  = getAuth();
    
    #my $path            = $_[0];
    #my $file            = $_[1];
 
    logger("$ENV{'SCRIPT_NAME'} Begin engine for $file");
    
    #extract required parameters from ENV{'SCRIPT_NAME'}:
    logger("core: Passed param: $_[0]");
    
    ##split on '/':
    my @pathParts = split(/\//,$_[0]);
    logger("core: path parts length: " . scalar(@pathParts));
    my $_pathPartsLength = scalar(@pathParts);
    logger("core: path parts length: $_pathPartsLength");
    #get page identifier:
    my $_filename = $pathParts[$_pathPartsLength-1];
    logger("core: calculated filename: " . $_filename);
    
    #get filename without extension:
    my @fileParts       = split(/\./,$_filename);
    my $file            = $fileParts[0];
    
    #assemble the path:
    my $path = "";
    for(my $c=0;$c<$_pathPartsLength-1;$c++){
        logger("core: adding '$pathParts[$c]' to path");
        $path .= $pathParts[$c] . "/";
    }
    logger("core: constructed path = $path");
    
    # get XML data file for supplied page:
    my $data            = getFile($path . "/" . $file . ".xml");
    logger("PATH TO CURRENT DATA FILE: ".$path . "/" . $file . ".xml");
    # get layout template file. also, check for and use layout page defined 
    # in the page if present - eg index page.:
    my $layout          = "";
    
    # default to the global layout page:
    my $layoutSrc       = $DEFAULT_TEMPLATE;

    # over-ride with the folder cfg layout if found:
    if(fileExists($path . "defaults.cfg"))
    {
        logger("core: defaults.cfg found. ");
        #is there a 'checkfortag() method? if not, make one...'
        $default_data       = getFile($path . "defaults.cfg");
        if(getXMLData("layoutpage",$default_data) ne "")
        {
            logger("LAYOUTPAGE: " . getXMLData("layoutpage",$default_data));
            logger("over-riding with folder alternate layout 'ccms/template/" . getXMLData("layoutpage",$default_data) . "' for page '$path'");
            #print "/ccms/template/" . getXMLData("layoutpage",$default_data);
            #check that it actually exists:
            if(fileExists("/ccms/template/" . getXMLData("layoutpage",$default_data))){
                
                $layoutSrc = "/ccms/template/" . getXMLData("layoutpage",$default_data);
            }
            else{
                logger(" -> " . getXMLData("layoutpage",$default_data) . " not found! Falling back to $layoutSrc");
            }
        }
    }
    #print $layoutSrc;
    # and over-ride with the PAGE layout if found:
    if(length(getXMLData("layoutpage",$data)) ne 0)
    {
        $layoutSrc = "ccms/template/" . getXMLData("layoutpage",$data);
        logger("core.pl: over-riding with PAGE alternate layout 'ccms/template/" . getXMLData("layoutpage",$data) . "' for page '$path'");
        #print "<br />getting data from page: <xmp>" . $data . "</xmp>";
        #print getXMLData("layoutpage",$data);
        ################################################################################
        #$homenav = getFolderNavData(); #TODO: this is a function specific to this site.
        ################################################################################
    }
    
    #load the layout once it has been determined:
    $layout          = getFile($layoutSrc);
    #print $layout;
    # vars holding default values.
    # the page that is displayed when a FOLDER is rendered. correlates with 
    # that set in .htaccess. Also, indicates the page that cannot be deleted
    # during an editing session. It is used to suppress rendering of the 
    # 'delete page' link: (TODO: I may not actually need this in anything other
    # than the global defaults)
    my $default_page;           
    my $default_section = "";   # root
    my $output          = "";   # string returned to render the page

    # now check for a 'defaults.cfg' in the current directory:    
    # if a defaults.cfg exists, use values stored here
    # rather than stored as local defaults - ie initialised
    # when a new page is created:
    # much of this is stll to develop...
    my $default_page;
    if(fileExists($path . "defaults.cfg"))
    {
        $default_data       = getFile($path . "defaults.cfg");
        $default_page       = getXMLData("defaultpage",$default_data);
        $default_section    = getXMLData("currentdirectory",$default_data); #for later use?
        #logger("Defaults config file 'defaults.cfg' found: Using default values from this.");
        #logger(" --> defaultpage: $default_page");
        #logger(" --> currentdirectory: $default_section");
    }
    else
    {
        $default_page = getXMLData("defaultpage",$data);
    }

    ###################################################################
    # nav stuff: These are dependant on the site build                #
    ###################################################################
    my $atRoot  = "false";
    if($path eq "/" || !$path)
    {
        $atRoot = "true";
    }
    ###################################################################
    # END nav stuff:                                                  #
    ###################################################################
    
    #get editlink if session cookie is set:
    my $editlink = "";

    #GENERATE AN Editlink if logged in: (call function in /ccms/edit part)
    #logger("checking for logged in user:");
    if($LOGGED_IN_USER eq true)
    {
        #logger(" -> logged in user OK");
        #level of auth is checked here:
        $editlink = getEditPanel($ENV{"SCRIPT_NAME"}, $default_page);
    }
    ###################################################################################################################
    #replace CMS placeholders in layout template:
    #loop over global config array defining tags to render from XML file:
    #we also want icons by each editable element if logged in. These
    #will pass the element and what type of content it is to the edit content page.
    #the edit content page will then allow editing of this particular element.
    my $editicon = "";
    my $alttext = "";
    my $contenttype = "";

    # Iterative replacement of content tags. These don't require any format, so a simple replace will do.
    # The navs are different - see below - and all require additional logic.
    # The array @TAGS_TO_RENDER is defined in the 'configs.pl' configuration file.
    # TODO: 13.05.07: Need to add 'title' attributes to the tags
    #logger("iterating over TAGS");
    for(my $i = 0; $i < scalar(@TAGS_TO_RENDER); $i++)
    {
        logger("core: -> current TAG: $TAGS_TO_RENDER[$i]{'tag'}");
        $img_start_tag  = "";
        $img_end_tag    = "";
        $contenttype    = getXMLTagParameter($TAGS_TO_RENDER[$i]{'tag'},$data,"datatype");
        #logger(" -> tag content type: $contenttype");
        
        
        
        # if there is an editing session, generate the edit links for each content tag.
        # Edit links are rendered only for tags whose TYPE is 
        #logger("LOGGED IN: $LOGGED_IN_USER");            
        #######################################################
        # render edit links if current user has $RIGHTS_EDIT: #
        #######################################################
        if((($LOGGED_IN_USER eq true) && (getUserProperty("rights") & $RIGHTS_EDIT)) || (($LOGGED_IN_USER eq true) && (getUserProperty("rights") & $RIGHTS_ADMIN)))
        {
            #test user rights:
            logger("core: user rights: " . getUserProperty("fullname"));
            logger("core: user rights: " . getUserProperty("rights"));
            
            $editicon       = "";
            $alttext        = "";

            #logger("start generating edit links......");
            $editicon       = getContentEditLink($TAGS_TO_RENDER[$i]{'tag'},$path.$file);
            # generate edit link for elements that have a datatype of text (body copy) 
            # or string (a label/title)- ie editable:
            #logger("content type: $contenttype");
            if($contenttype eq "text" || $contenttype eq "string")
            {
                #logger("its a text tag...");
                $alttext = getXMLTagParameter($TAGS_TO_RENDER[$i]{'tag'},$data,"friendlyname");
                $editicon = "<a href=\"#\" onclick=\"editPage('/ccms/editor/editor_editfile.pl?fname=".$path.$file.".xml&amp;contentid=" . $TAGS_TO_RENDER[$i]{'tag'} . "')\">";
                $editicon .= "<img src=\"/ccms/editor/images/edit.gif\" alt=\"Edit " . $alttext . "\" style=\"border:none;\" /></a>&nbsp;";
            }
            
            #generate edit link for elements that have a datatype of image - ie editable: GET DIFFERENT ICON!
            if($contenttype eq "image")
            {
                logger("its an image tag...");
                $alttext = getXMLTagParameter($TAGS_TO_RENDER[$i]{'tag'},$data,"friendlyname");
                $editicon = "<a href=\"#\" onclick=\"editPage('/ccms/editor/editor_editfile.pl?fname=".$path.$file.".xml&amp;contentid=" . $TAGS_TO_RENDER[$i]{'tag'} . "')\">";
                $editicon .= "<img src=\"/ccms/editor/images/edit.gif\" alt=\"Edit " . $alttext . "\" style=\"border:none;\" /></a>&nbsp;";
            }
        }
        ###################################
        # END EDIT TAG RENDERING SECTION. #
        ###################################
        
        #if $contenttype is 'image', then we need to wrap image tags around the content - ONLY if there is content!
        #NOTE: The XML parameter is surrounded by / and / DOCUMENT THIS
        if($contenttype eq "image")# && length(replaceNewline(getXMLData($TAGS_TO_RENDER[$i]{'tag'}) eq 0)
        {
            $img_start_tag = "<img src=\"" . getXMLTagParameter($TAGS_TO_RENDER[$i]{'tag'},$data,"imagepath") . "/";
            $img_end_tag = "\" />";
        }
        
        $layout = replace($layout,$TAGS_TO_RENDER[$i]{'placeholder'},$editicon . $img_start_tag . getXMLData($TAGS_TO_RENDER[$i]{'tag'},$data).$img_end_tag);
        #$layout = replace($layout,$TAGS_TO_RENDER[$i]{'placeholder'},$editicon . $img_start_tag . replaceNewline(getXMLData($TAGS_TO_RENDER[$i]{'tag'},$data).$img_end_tag));
    }
    
    #replace the edit link:
    $layout     = replace($layout,"{CMS_EDITLINK}",     $editlink);
      
    #pass the processed string to stub method 
    #  'insertCustomisedLayout'
    #Here, custom nav etc methods for replacement of
    #{CMS_NAV} tags can be created. This method is provided
    #as a stub file and may be modified as required.
    $layout     = insertCustomisedLayout($layout);
       
    #return processed string:
    $output .= $layout;
    
    return $output;
}

1; #must return 1
