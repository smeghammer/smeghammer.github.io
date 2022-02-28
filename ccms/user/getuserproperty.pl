#!/usr/bin/perl

#use this to determine whether the edit/delete etc links appear for the given user:
sub getUserProperty
{
  my $user      = getCookie("user");
  my $property  = $_[0];  #the user property to retrieve
  my $returnval = "";
  for(my $counter=0;$counter<scalar(@USERS);$counter++)
  {
    if($user eq $USERS[$counter]{'user'})
    {
        #logger("getUserProperty: user = $user");
        $returnval = $USERS[$counter]{$property};
    }
  }
  return $returnval;
}

1;
