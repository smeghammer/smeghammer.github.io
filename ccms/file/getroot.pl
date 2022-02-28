##############################################################
#### FILE METHOD - 
#### get filesystem root path.
####
#### INPUT:         none.
#### OUTPUT:        string webserver root path.
#### DEPENDANCIES:  none
##############################################################

sub getRoot
{
    return $ENV{'DOCUMENT_ROOT_REAL'} . "/";
}

1;  #must always return 1.
