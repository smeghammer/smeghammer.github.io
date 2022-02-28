##############################################################
#### FILE METHOD - 
#### Get file name without extension or path:
####
#### INPUT:         string relative filepath/name.
#### OUTPUT:        string statusmessage
#### DEPENDANCIES:  getRoot,
##############################################################

sub updateFile
{
    logger("updateFile: Begin...");
  my $root          = getRoot();
  my $file          = $_[0];
  my $filecontents  = $_[1];
  my $result        = "";

    

  $result           = "";
  $fullpath         = $root . $file;
    
    logger("updateFile: Initial values:");
    logger("updateFile: --> root = $root");
    logger("updateFile: --> file = $file");
    logger("updateFile: --> filecontents = $filecontents");
    logger("updateFile: --> fullpath = $fullpath");
    
  if(-e $fullpath)#if exists
  {
    logger("updateFile: --> File exists OK. Proceed");
    $result         = "<div class=\"system_message\">Updating file " . $fullpath . "</div>";
    open UPDATEFILE, ">" . $fullpath;
    logger("updateFile: --> Filehandle opened OK.");
    #set execute permissions as it's a .pl file...:
    chmod 0755, $fullpath;
    logger("updateFile: --> CHMOD OK.");
    
    print UPDATEFILE $filecontents;
    logger("updateFile: --> New content printed to filehandle OK");
    close UPDATEFILE;
  }
  return $result;
}

1;  #must always return 1.
