##############################################################
#### EDITOR METHOD - 
#### get list of gif/jpg in /images/ folder and generate 
#### dropdown when the content tag is of type IMAGE.
#### Will accept a sub-path parameter to allow obtaining 
#### images from a subfolder.
#### (this and getImagesForInsert should ideally be subclasses
#### of a generic listImages method...)
####
#### INPUT:         string currentimage, string sub path.
#### OUTPUT:        string HTML dropdown.
#### DEPENDANCIES:  getRoot
##############################################################

sub getImagesAsDropdown
{
  my $current_image = $_[0];
  my $sub_path      = $_[1];
  
  if(length(scalar $sub_path) ne 0){
    $sub_path = "$sub_path/"
  }
  
  my $path          = "/$sub_path";
  my $root          = getRoot();
  my $extn          = "";
  my $selected      = "";
  my $output        = "<option value=\"remove\">[Clear]</option>\n";

  opendir IMAGES, $root . $path;
  
  #an array:
  my @contents = readdir IMAGES;
  #loop over list:
  foreach $image ( @contents )
  {
    if ( -d $image ) {}  
    else
    {
      $extn = substr( $image,index($image,".")+1,length($image));
      if(lc($extn) eq "jpg" or lc($extn) eq "gif" or lc($extn) eq "png")
      {
        $selected = "";
        if($image eq $current_image)
        {
          $selected = "selected=\"selected\"";
        }
        $output .= "<option value=\"" . $image . "\" " . $selected . ">" . $image . "</option>\n";
      }
    }
  }

  close IMAGES;
  return $output;
}
1;  #must always return 1.
