/*
detect ?login:
*/
if(document.location.toString().indexOf("?login") != -1){
    document.location = "/login.pl?return=" + document.location.toString().split("?")[0];
}
var returnurl = "";
if(document.location.toString().indexOf("?return") != -1){
    returnurl = document.location.toString().split("?return=")[1];
}
if(document.location.toString().indexOf("?config") != -1){
    document.location = "/ccms/dumpconfig.pl";
}


//myField accepts an object reference, imagename accepts the text string to add
function insertAtCursor(myField,imagename,flag)
{
    //IE support
    if (opener.document.selection)
    {
        //cope with adding image either from preview or directly:
        if(flag)
        {
            myField.focus();
            sel = opener.document.selection.createRange();        
            sel.text = "<img src=\"" + imagename + "\" />";
        }
        else
        {
            myField.focus();
            sel = document.selection.createRange();        
            sel.text = "<img src=\"" + imagename + "\" />";
        }
    }

    //Mozilla/Firefox/Netscape 7+ support
    else if (myField.selectionStart || myField.selectionStart == '0')
    {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
                        + "<img src=\"" + imagename + "\" alt=\"[add appropriate alt text]\" />"
                        + myField.value.substring(endPos, myField.value.length);
    } 
    else
    {
        myField.value += myValue;
    }

} 

//open simple HTML page with link to add image to content:
function openImagePreview(image,field)
{
    var w = window.open('/ccms/editor/imagepreview.pl?image=' + image + '&field=' + field, 'pic', 'scrollbars=yes,toolbar=no,menubar=no,status=no,width=200,height=300');
    w.focus();
}

function editPage(url)
{
    var e = window.open(url, 'win', 'scrollbars=no,toolbar=no,menubar=no,status=yes,width=800,height=620')
    //e.document.write(url);
    e.focus();
}

function submitAndRefresh()
{
    document.newpage.submit();
    opener.location.reload(true);
}


function confirmDelete(frm)
{
    if(confirm("Permanently delete this page?"))
    {
        frm.submit();
        return true;
    }
    else
    {
        return false;
    }
}
