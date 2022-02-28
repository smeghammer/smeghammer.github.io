/* menu CSS & javascript borrowed from www.zuid-holland.nl. Well, I did help build it... */  
var agt         = navigator.userAgent.toLowerCase();
var appVer      = navigator.appVersion.toLowerCase();
var is_minor    = parseFloat(appVer);
var is_major    = parseInt(is_minor);
var is_opera    = (agt.indexOf("opera") != -1);
var is_mac      = (agt.indexOf("mac")!=-1);
var iePos       = appVer.indexOf('msie');
if (iePos != -1) {
		if(is_mac) {
			var iePos     = agt.indexOf('msie');
			is_minor      = parseFloat(agt.substring(iePos+5,agt.indexOf(';',iePos)));
		}
		else is_minor     = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)));
		is_major          = parseInt(is_minor);
}
var is_ie = ((iePos!=-1) && (!is_opera) );

var sfHover = function(){
    if(is_ie){
        var uls = document.getElementById("topnav").getElementsByTagName("ul");
        var iframelock =new Array()
        for(var i = 0; i < uls.length; i++){
            if (uls[i].parentNode.id.indexOf('topnav') < 0){
                iframelock[i]=document.createElement("iframe");
                iframelock[i].setAttribute("id", "iframemenuhider"+i);
                iframelock[i].setAttribute("scrolling", "no");
                iframelock[i].setAttribute("height", "10");
                iframelock[i].style.position='absolute';
                iframelock[i].style.left='1px';
                iframelock[i].style.top='1px';
                iframelock[i].style.width='173px';
                var lis=uls[i].getElementsByTagName("LI");
                uls[i].insertBefore(iframelock[i],lis[0]);
                uls[i].parentNode.frame=iframelock[i];
                uls[i].parentNode.ulist = uls[i];
            }
        }
    }
    var sfEls = document.getElementById("topnav").getElementsByTagName("li");
    for (var i = 0; i < sfEls.length; i++){
        sfEls[i].mainObject=this;
        sfEls[i].onmouseover=function(){
            this.className+="sfhover";
            if(is_ie){
                if(this.ulist){
                    setTimeout(createContextFunction(this.mainObject,'setframeheight',''),100);
                }
            }
        }
        sfEls[i].onmouseout=function(){
            this.className=this.className.replace(new RegExp("sfhover\\b"), "");
        }
    }
}

var setframeheight = function() {
	var sfEls = document.getElementById("topnav").getElementsByTagName("li");
	for (var i = 0; i < sfEls.length; i++) {
		if (sfEls[i].ulist) {
		if(sfEls[i].ulist.offsetHeight>0){
			//sfEls[i].ulist.style.border='1px solid #d6c33e'
			var frameheight=(parseInt(sfEls[i].ulist.offsetHeight)-3)
			sfEls[i].frame.height=frameheight+'px';
			}
		}
	}
}

function createContextFunction(context, method,argument) { 
	return (function(){ eval("context."+method+"('"+argument+"')"); return false; }); 
}

var setframeheight = function() {
	var sfEls = document.getElementById("topnav").getElementsByTagName("li");
	for (var i = 0; i < sfEls.length; i++) {
		if (sfEls[i].ulist) {
			if(sfEls[i].ulist.offsetHeight>0){
				//sfEls[i].ulist.style.border='1px solid #d6c33e'
				var frameheight=(parseInt(sfEls[i].ulist.offsetHeight)-3)
                sfEls[i].frame.height=frameheight+'px';
			}
		}
	}
}
/*
toolbar=0|1 	Specifies whether to display the toolbar in the new window.
location=0|1 	Specifies whether to display the address line in the new window.
directories=0|1 	Specifies whether to display the Netscape directory buttons.
status=0|1 	Specifies whether to display the browser status bar.
menubar=0|1 	Specifies whether to display the browser menu bar.
scrollbars=0|1 	Specifies whether the new window should have scrollbars.
resizable=0|1 	Specifies whether the new window is resizable.
width=pixels 	Specifies the width of the new window.
height=pixels 	Specifies the height of the new window.
top=pixels 	Specifies the Y coordinate of the top left corner of the new window. (Not supported in version 3 browsers.)
left=pixels 	Specifies the X coordinate of the top left corner of the new window. (Not supported in version 3 browsers.) 
*/
function popup(url){
    var win = window.open(url,'popup',"resizable=0,menubar=0,status=0,width=700,height=660,resizable=0,scrollbars=1");
    win.focus();
}
