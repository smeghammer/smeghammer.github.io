##############################################################
#### EDITOR METHOD - 
#### get list of gif/jpg in /images/ folder and generate 
#### appropriate links for adding/viewing images. 
#### TODO: 13.05.07: Use this to filter the images by path:
####
#### INPUT:         string form element (for JS identification
####                of element), string image path.
#### OUTPUT:        string HTML image insert linklist.
#### DEPENDANCIES:  getRoot
##############################################################

sub getImagesForInsert
{
  my $form_element      = $_[0];
  my $imagepath         = $_[1];    
  my $path              = "/images/";
  my $root              = getRoot();
  my $extn              = "";
  my $ADD_TITLETEXT     = "Add image at current cursor location";
  my $PREVIEW_TITLETEXT = "open an image preview";
  
  
  opendir IMAGES, $root . $path;
  
  #an array:
  my @contents = readdir IMAGES;
  my $output = "<table>";

  foreach $image ( @contents )
  {
    if ( -d $image ) {}  
    else
    {
      $extn = substr( $image,index($image,".")+1,length($image));
      if(lc($extn) eq "jpg" or lc($extn) eq "gif" or lc($extn) eq "png")
      {
        $output .= "<tr><td>" . $image . "</td>";
        $output .= "<td><a href=\"#\" onclick=\"insertAtCursor(document.newpage." . $form_element . ", '" . $path.$image . "',false)\" title=\"$ADD_TITLETEXT\"><strong>+</strong></a>&nbsp;</td>\n"; 
        $output .= "<td><a href=\"#\" onclick=\"openImagePreview('" . $path.$image . "','" . $form_element . "')\" title=\"$PREVIEW_TITLETEXT\">view</a>&nbsp;</td></tr>\n";
      }
    }
  }
  $output .= "</table>";
  close IMAGES;
  return $output;
}
1;  #must always return 1.
