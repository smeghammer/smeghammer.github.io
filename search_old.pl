#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";
#print core($ENV{'SCRIPT_NAME'});

$searchoutput   = "";
@currfolder;
$currfile       = "";
$currtagcontent = "";
$currsummary    = "";

$qt = getRequest("qt");
#force lower case:
$qt  =~ tr /A-Z/a-z/;  #'tr'anslate.

#print "Searchterm: $qt<br />";


$PATH_PREFIX = "/";
$HIT_ON_CURRENT_PAGE = false;
if(length($qt) > 0)
{
 # print scalar(@SITE_SECTIONS) . "<br>";
  for(my $a=0;$a<scalar(@SITE_SECTIONS);$a++)
  {
    $PATH_PREFIX = "/";
    if(length($SITE_SECTIONS[$a]{path}) eq 0){
      $PATH_PREFIX = "";
    }
  
    @currfolder = getFolderContent($SITE_SECTIONS[$a]{path},"xml");
    for(my $b=0;$b<scalar(@currfolder);$b++)
    {
      $HIT_ON_CURRENT_PAGE = false;
      #to generate my search index file, I need to get only the content 
      $currfile = getFile($SITE_SECTIONS[$a]{path} . "/" . $currfolder[$b]);
      #iterate over the config array of content tags:
      for(my $c = 0; $c < scalar(@TAGS_TO_RENDER); $c++)
      {
        #test for presence of tag:
  #      print "-checking for tag '$TAGS_TO_RENDER[$c]{tag}'<br>";
        if(checkForTag($TAGS_TO_RENDER[$c]{tag},$currfile) eq true)
        {
          $currtagcontent = getXMLData($TAGS_TO_RENDER[$c]{tag},$currfile);
          $currtagcontent =~ s/<(.*?)>//gi;	    # remove anything that starts with "<" and ends with ">"
          #force to lower case. funky regexp stuff again...
          $currtagcontent =~ tr /A-Z/a-z/;  #'tr'anslate.
          
          
          #check for presence of tag (put in subs_xml eventually as regexp test):
          #i need to check this if there are more tags defined in subs_config
          #than are used in majority of files - if there is for example a different layout
          #used for some pages. 
          #test for search term:
          if(index($currtagcontent,$qt) > -1)
          {
   #         print "<!-- HIT IN TAG  $TAGS_TO_RENDER[$c]{tag}-->\n";
   #         print "<!--TAG:  ".$currtagcontent."-->\n<!-- ";
            $currsummary = substr($currtagcontent,index($currtagcontent,$qt)-25,(index($currtagcontent,$qt)+25));
            #$currsummary = substr($currtagcontent,487,557);
   #         print length $currtagcontent;
   #         print "\n";
            #$currsummary = substr($currtagcontent,190,180);
   #         print index($currtagcontent,$qt) . "\n";
   #         print index($currtagcontent,$qt)."\n";
   #         print index($currtagcontent,$qt)+70;
            #$currsummary = $currtagcontent;
   #         print "-->\n<!--SUMM LENGTH: " . length($currsummary). " -->\n";
            $HIT_ON_CURRENT_PAGE = true; 
          }
        }
      }
      if($HIT_ON_CURRENT_PAGE eq true)
      {
        $searchoutput .= "<a href=\"/" . $SITE_SECTIONS[$a]{path} . $PATH_PREFIX . getPureFileName($currfolder[$b]) . ".pl\">" . getXMLData("linktext",$currfile) . "</a><br>\n";
        $searchoutput .= "&nbsp;...".$currsummary."...<br>";
      }
    } 
  } 
  if(length($searchoutput) eq 0)
  {
    $searchoutput = "No results found.";
  }
}

else
{
  $searchoutput = "No searchterm.";
}

#print getPage("", "search",$searchoutput);

#print $searchoutput;
#print core($ENV{'SCRIPT_NAME'});

