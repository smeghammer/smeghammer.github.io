#!/usr/bin/perl
print "Content-type: text/javascript\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#this may be an ARRAY of image locations, hence the actualJS array is generated here.

@images;
#cool - I can push an array onto an array.
#push(@images,getImagesJSArray($IMAGE_LOCATION));
push(@images,getImagesJSArray($IMAGE_LOCATION));
@_temp;

$output = "";

for(my $a;$a<scalar(@images);$a++){
    @_temp = split(/\./,$images[$a]);
    $output .= "[\"$images[$a]\",\"/" . $IMAGE_LOCATION . "/$images[$a]\"]";
    if($a < scalar(@images)-1){
        $output .= ",";
    }
    $output .= "\n";
}

print <<END_HTML;

var tinyMCEImageList = new Array(
	$output
);
END_HTML
