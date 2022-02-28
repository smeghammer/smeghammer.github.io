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
require $document_root . "ccms/customisations/homelink.pl";
require $document_root . "ccms/customisations/gethomenav.pl";

##############################################################
#### Static strings - login HTML etc.                                    
##############################################################
require $document_root . "ccms/config/staticstrings.pl";

##############################################################
#### core methods - DO NOT EDIT                                    
##############################################################
#auth
require $document_root . "ccms/editor/auth/authenticate.pl";
require $document_root . "ccms/editor/auth/getauth.pl";

#user methods
require $document_root . "ccms/user/getuserproperty.pl";

#logging
require $document_root . "ccms/util/logging/logger.pl";

#engine
require $document_root . "ccms/engine/core.pl";
require $document_root . "ccms/engine/insertcustomisedlayout.pl";

#config data
require $document_root . "ccms/config/config.pl";

#render edit links
require $document_root . "ccms/editor/editlinks/getcontenteditlink.pl";
require $document_root . "ccms/editor/editlinks/geteditlinks.pl";
require $document_root . "ccms/editor/editlinks/geteditpanel.pl";

#render image use output
require $document_root . "ccms/editor/image/getimagesasdropdown.pl";
require $document_root . "ccms/editor/image/getimagesforinsert.pl";
require $document_root . "ccms/editor/image/getimagesjsarray.pl";

#file manipulation stuff
require $document_root . "ccms/file/createfile.pl";
require $document_root . "ccms/file/setxmlnavfile.pl";
require $document_root . "ccms/file/fileexists.pl";
require $document_root . "ccms/file/getfile.pl";
require $document_root . "ccms/file/getpath.pl";
require $document_root . "ccms/file/getpurefilename.pl";
require $document_root . "ccms/file/getroot.pl";
require $document_root . "ccms/file/updatefile.pl";

#utility methods
require $document_root . "ccms/util/cookie/getcookie.pl";
require $document_root . "ccms/util/logging/logger.pl";
require $document_root . "ccms/util/string/replace.pl";
require $document_root . "ccms/util/string/replacenewline.pl";
require $document_root . "ccms/util/url/getrequest.pl";
require $document_root . "ccms/util/url/urldecode.pl";

#XML manipulation stuff
require $document_root . "ccms/xml/getxmldata.pl";
require $document_root . "ccms/xml/getxmldataarray.pl";
require $document_root . "ccms/xml/setxmldata.pl";
require $document_root . "ccms/xml/getxmltagparameter.pl";

#nav stuff:
require $document_root . "ccms/xml/getxmlnavdata.pl";   #return array of hashes of current dir navdata
require $document_root . "ccms/xml/setxmlnavdata.pl";   #set XML file of nav data as created via edit gui

1;  #must return 1
