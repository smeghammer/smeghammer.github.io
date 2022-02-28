function sendToMail(){
    m=document.frmData.txt_messageQ.value;
    n=document.frmData.txt_nameQ.value;
    e=document.frmData.txt_emailQ.value;
    c=document.frmData.txt_contactQ.value;
    if(n==""){
        alert("Please Enter Your Name");
        document.frmData.txt_nameQ.focus();
        return false;
    }
    if(e==""){
        alert("Please Enter Your email");
        document.frmData.txt_emailQ.focus();
        return false
    }
    if(c==""){
        alert("Please Enter Your Phone Number ");
        document.frmData.txt_contactQ.focus();
        return false;
    }
    if(m==""){
        alert("Please Enter Your Message");
        document.frmData.txt_messageQ.focus();
        return false
    }
    document.frmData.submit();
    return true
}
function BlankText(){
	document.frmData.txt_messageQ.value="";
	document.frmData.txt_nameQ.value="";
	document.frmData.txt_emailQ.value="";
	document.frmData.txt_contactQ.value="";
	return false;
}
function chkField(){
	if(document.frmData.name.value==""){
			alert("Please Enter Your Name");
			document.frmData.name.focus();
			return false;
		}
		if(document.frmData.phone.value==""){
			alert("Please Enter Your Telephone No.");
			document.frmData.phone.focus();
			return false;
		}
		if(document.frmData.email.value==""){
			alert("Please Enter Your email");
			document.frmData.email.focus();
			return false;
		}
		document.frmData.submit();
		return true
}
