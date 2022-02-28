#!/usr/bin/perl
$document_root = $ENV{'DOCUMENT_ROOT_REAL'} . "/";
require $document_root . "ccms/config/includes.pl";

#check for currently logged in:
$logged_in = getAuth();
logger("at beginning of login: currently logged in=$logged_in");
#$logged_in = false;



#have login details been POSTed?
if(($ENV{'REQUEST_METHOD'} eq 'POST') or ($logged_in eq true))
{
    $user = "";
    $pwd = "";
    #get form vars if posted:
    read(STDIN, $postdata,$ENV{'CONTENT_LENGTH'});
    @pairs = split(/&/, $postdata);
    
    foreach $pair (@pairs) 
    {
        ($name, $value) = split(/=/, $pair);
        $value =~ tr/+/ /;
        $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
        $FORM{$name} = $value;
        if($name eq "user"){
            $user = $value;
        }
        
        if($name eq "pwd"){
            $pwd = $value;
        }
    }
    
    #do user/pwd match auth user?
    #use array of users to check that the submitted username/pwd is stored.
    #if so, set cookies holding user, fullname and authorised.
    #don't forget to kill the cookies on logout!
    logger("login.pl: trying $user and $pwd: " . authenticate($user,$pwd));

    if(authenticate($user,$pwd) eq true or ($logged_in eq true))
    {
        $logged_in = true;
        

        print "Set-Cookie:authorised=yes\r\n";
        print "Set-Cookie:user=" . $user . "\r\n";
        print "Content-type: text/html\r\n\r\n";
print <<END_OK_HTML;
<html>
<head>
<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css" />
<script src="/ccms/editor/script/edit.js" type="text/javascript"></script>
<title>Login OK</title>
</head>
<body>
<div id="login">
<h1>Authorised</h1>
<div>$user logged in OK.<br />
<script type="text/javascript" language="javascript">
//document.write("Click <a href=\"" + returnurl + "\">here</a> to continue.");
document.write('<a href=\"' + returnurl + '\">Continue</a>');
</script>
</div>
</div>
</body>
END_OK_HTML
    }
    else
    {
        print "Content-type: text/html\r\n\r\n";
        print <<END_NOT_OK_HTML;
<html>
<head>
<link rel="stylesheet" href="/ccms/styles/edit.css" type="text/css">
<script src="/ccms/editor/script/edit.js" type="text/javascript"></script>
<title>Login failed</title>
</head>
<body>
<div id="login">
<h1>Not authorised</h1>
<div>Password or username is not correct.<br />
Click <a href="">here</a> to try again.

<script language=\"javascript\" type=\"text/javascript\">
document.write('[<a href=\"/login.pl?return=' + returnurl + '\">Retry</a>]');
</script>


</div>

</div>
</body>
END_NOT_OK_HTML
    }
}

#otherwise, render form:
else
{
    print $LOGIN_PAGE_HEADER;
    print $LOGIN_PAGE_INITIAL_FORM;
    print $LOGIN_PAGE_FOOTER;
}
