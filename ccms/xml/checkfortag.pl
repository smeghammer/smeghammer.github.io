
sub checkForTag{
  my $tag         = $_[0];    #tag from which to get data
  my $str         = $_[1];    #The XML file contents
  my $regexp_start = "<" . $tag . ".*?>"; #non-greedy match
  if($str =~ $regexp_start){
    return true;
  }
  else{
    return false;
  }
}
1;
