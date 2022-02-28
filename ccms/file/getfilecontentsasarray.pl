##############################################################
#### FILE METHOD - 
#### get content of a file.
####
#### INPUT:         string relative path/filename.
#### OUTPUT:        string filecontents.
#### DEPENDANCIES:  getRoot
##############################################################

sub getFileContentsAsArray
{
  my $path            = $_[0];    #relative path to file
  my $root            = getRoot();
  my $fullpath        = $root . $path;
  my @filecontents;
  

  open FILE, $fullpath || die logger("cannot open $fullpath : $!");
  @filecontents = <FILE>;
  close FILE;
  return @filecontents;
}

1;  #must always return 1.
