#get folder content
sub getFolderContent
{
  $path         = $_[0];    #nav root
  $extension    = $_[1];    #directory default page - ie current 'home' - WITHOUT extension
  
  my $root = getRoot();
  my $currpage;     #the current page in iteration
  my $currUrl;      #placeholder for item URL
  my $currLinktext; #placeholder for item linktext
  my $currStatus;   #placeholder for whether link or just linktext
  #my $FILES_TO_INCLUDE = ".xml";   #regexp? or array?
  my $comparator;
  my @result;       #an array of hashmaps
  my $leading = "";
  
  #determine if we are at the root. bugger about with the path if not:
  my $atRoot = true;
  if(length($path) > 0){
    #if we are NOT at root, add a leading slash:
    $atRoot = false;
    $leading = "/";
  }
  
  opendir NAV, $root . $path;
  
  #an array:
  my @contents = readdir NAV;

  #print @contents;
  foreach $listitem(@contents){
    #check for double // if path is zero-length:
    $currpage = $leading . $listitem;  #listitem is the current item in the folder. NO slashes
    
    #check whether its a file or a directory, ignore directories:
    if ( -d $listitem ){}  
    else{
      #check the current file is of correct type and NOT the default directory page:
      if((substr($currpage,(index($currpage,".")+1),length($currpage)) eq $extension)){
        push(@result,$listitem);
      }
    }
  }
  close NAV;
  return @result;         #an array of nav items
}
1;  #must always return 1.
