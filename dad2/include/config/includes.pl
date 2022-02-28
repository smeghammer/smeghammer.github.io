use CGI::Carp qw(fatalsToBrowser);
##############################################################
#### INCLUDE -                                                
#### list of perl files that are to be required. One file
#### per function is the model. This file is then included
#### in the perl stub file.
#### 
#### DEPENDANCIES:  none.                                    
##############################################################

my $document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";

##############################################################
#### custom methods - ADD CUSTOM FUNCTION IMPORTS HERE                                    
##############################################################
require $document_root . "include/customisations/getPrimaryNav.pl";
require $document_root . "include/customisations/getL2Nav.pl";
require $document_root . "include/customisations/getL3Nav.pl";
require $document_root . "include/customisations/getL4Nav.pl";
require $document_root . "include/customisations/getNavItemLevel.pl";
require $document_root . "include/customisations/getNavItemSection.pl";
require $document_root . "include/customisations/getNavItemSubSection.pl";
require $document_root . "include/customisations/getNavItemSubSubSection.pl";
require $document_root . "include/customisations/getContent.pl";
##############################################################
#### core methods - DO NOT EDIT                                    
##############################################################
#auth
require $document_root . "include/editor/auth/authenticate.pl";
require $document_root . "include/editor/auth/getAuth.pl";

#logging
require $document_root . "include/util/logging/logger.pl";

#config data
require $document_root . "include/config/config.pl";

#render edit links
require $document_root . "include/editor/editlinks/getEditLinks.pl";
require $document_root . "include/editor/editlinks/getEditPanel.pl";

#render image use output
require $document_root . "include/editor/image/getImagesAsDropdown.pl";
require $document_root . "include/editor/image/getImagesForInsert.pl";

#file manipulation stuff
require $document_root . "include/file/createFile.pl";
require $document_root . "include/file/fileExists.pl";
require $document_root . "include/file/getFile.pl";
require $document_root . "include/file/getPath.pl";
require $document_root . "include/file/getPureFileName.pl";
require $document_root . "include/file/getRoot.pl";
require $document_root . "include/file/updateFile.pl";

#utility methods
require $document_root . "include/util/cookie/getCookie.pl";
require $document_root . "include/util/logging/logger.pl";
require $document_root . "include/util/string/replace.pl";
require $document_root . "include/util/string/replaceNewline.pl";
require $document_root . "include/util/url/getRequest.pl";
require $document_root . "include/util/url/urlDecode.pl";

#XML manipulation stuff
require $document_root . "include/XML/getXMLData.pl";
require $document_root . "include/XML/setXMLData.pl";
require $document_root . "include/XML/getXMLTagParameter.pl";

#engine
require $document_root . "include/engine/core.pl";
1;  #must return 1
