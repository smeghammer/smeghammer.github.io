##############################################################
#### CONFIGURATION -                                         #
#### core and site specific configuration parameters.        #
####                                                         #
#### DEPENDANCIES:  none.                                    #
##############################################################

#TODO: Add path constants for the template etc. locations

##############################################################
#### array of XML tags to render.                            #
#### These must match the XML data file:                     #
####                                                         #
#### The edit forms have the same core element names. The    #
#### render function loops over this when performing the     #
#### placeholder replacement.                                #
##############################################################
@TAGS_TO_RENDER =
(
  {placeholder=>'{CMS_PAGETITLE}',  tag=>'pagetitle',   createeditlink=>false},  	#COMMON TO ALL FILES
  {placeholder=>'{CMS_LINKTEXT}',   tag=>'linktext',    createeditlink=>false},  	#COMMON TO ALL FILES
  {placeholder=>'{CMS_KEYWORDS}',   tag=>'keywords',    createeditlink=>false},  	#COMMON TO ALL FILES
  {placeholder=>'{CMS_AUTHOR}',     tag=>'author',      createeditlink=>false},  	#COMMON TO ALL FILES
  {placeholder=>'{CMS_DESCRIPTION}',tag=>'description', createeditlink=>false},  	#COMMON TO ALL FILES
  {placeholder=>'{CMS_OWNER}',      tag=>'owner',       createeditlink=>false},     #COMMON TO ALL FILES
  {placeholder=>'{CMS_CONTENT1}',   tag=>'content1',    createeditlink=>true},
  {placeholder=>'{CMS_CONTENT2}',   tag=>'content2',    createeditlink=>true},
  {placeholder=>'{CMS_CONTENT3}',   tag=>'content3',    createeditlink=>true}, 
  {placeholder=>'{CMS_CONTENT4}',   tag=>'content4',    createeditlink=>true},
  {placeholder=>'{CMS_CONTENT5}',   tag=>'content5',    createeditlink=>true}, 
  {placeholder=>'{CMS_CONTENT6}',   tag=>'content6',    createeditlink=>true},
  {placeholder=>'{CMS_CONTENT7}',   tag=>'content7',    createeditlink=>true}, 
);


##############################################################
#### array of directories, for use in nav                    #
#### generation. These must map to directories on the        #
#### webserver filesystem:                                   #
####                                                         #
#### This array is used to generate both the second level    #
#### nav and the create form path-selection radio buttons.   #
##############################################################
@SITE_SECTIONS = 
(
  {path=>'dev',                                 linktext=>'Coding stuff'},
  {path=>'dev/subdev',                          linktext=>'More coding'},
  {path=>'dev/subdev/subsubdev',                linktext=>'Stuff'},
  {path=>'dev/subdev/subsubdev/subsubsubdev',   linktext=>'Stuff'},
  {path=>'reddwarf',                            linktext=>'Red Dwarf'},
  {path=>'quake',                               linktext=>'QUAKE!'},
  {path=>'metal',                               linktext=>'Metal!'},
  {path=>'academic',                            linktext=>'University etc.'},
  {path=>'dad',                                 linktext=>'Dad'}
);

##############################################################
#### String/Array of image and upload directories.                      #
#### Hook into an auth system eventually?                    #
##############################################################
$IMAGE_LOCATION     = "images";
$DOCUMENT_LOCATION  = "docs";
$MEDIA_LOCATION     = "media";

#Global editing rights:
$RIGHTS_ADMIN   = 1;
$RIGHTS_BROWSE  = 2;
$RIGHTS_EDIT    = 4;
$RIGHTS_CREATE  = 8;
$RIGHTS_DELETE  = 16;
$RIGHTS_UPLOAD  = 32;

##############################################################
#### array of user hashes. Each hash contains username, user #
#### full name and password. The login page uses this array  #
#### to check that the login attempt is valid:               #
#### NOTE: addition of the above flags in the 'rights'       #
#### property in the user hash below doesn't work?           #
##############################################################
{
    @USERS =
    (
        {user=>'silas',      password=>'asteroth666', fullname=>'Silas Jewitt',               email=>'silas@thecoven.co.uk',  rights=>1,groups=>{}},
        {user=>'rick',       password=>'rc30biker',   fullname=>'Rick Cullen',                email=>'rick@cg-services.co.uk',rights=>36,groups=>{}},
        {user=>'clement',    password=>'elemental',   fullname=>'Clement Jewitt',             email=>'',  rights=>4,groups=>{}}
    );
}

##############################################################
#### the default layout template. It may be over-ridden      #
#### by an entry in either the folder defaults or in the     #
#### individual page XML file.                               #
##############################################################
$DEFAULT_TEMPLATE       = "ccms/template/layout.tmpl";

##############################################################
#### Logging                                                 #
####                                                         #
#### A boolean value to turn on/off logging.                 #
##############################################################
$USE_LOGGING            = false;

1;  #must always return 1.
