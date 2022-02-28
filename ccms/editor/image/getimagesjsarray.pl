##############################################################
#### EDITOR METHOD - 
#### get list of gif/jpg in configured images folder
####
#### INPUT:         string image path.
#### OUTPUT:        array of images.
#### DEPENDANCIES:  getRoot
##############################################################

sub getImagesJSArray{
  my $path              = $_[0];    
  my $root              = getRoot();
  my $extn              = "";
  
  opendir IMAGES, $root . $path;
  
  #an array:
  my @contents = readdir IMAGES;
  my $output = "";
  my @images;

  foreach $image ( @contents ){
    if ( -d $image ) {}  
    else{
      $extn = substr( $image,index($image,".")+1,length($image));
      if(lc($extn) eq "jpg" or lc($extn) eq "gif" or lc($extn) eq "png"){
        #push images onto image array. I need the image count to suppress the final comma in the JS array.
        push(@images,$image);
      }
    }
  }
  close IMAGES;
  

  
  $output .= "[\"xxx\", \"" . $path . $image . "\"],\n";
  $output .= scalar(@images);
  
  return @images;
  #return $output;
}
1;  #must always return 1.
