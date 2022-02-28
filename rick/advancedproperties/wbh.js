// JavaScript Document
  //globals:
  var backgroundColour = "#E6FF00";
  var borderColour = "#8D9E00";
   
  window.onload=function()
  {
      try{
      var elems = document.getElementsByTagName("li");
      
      //get the tabs:
      for(var a=0;a<elems.length;a++)
      {
        //retrieve the TABS:
        if(hasClassName("tab",elems[a]))
        {
          //attach the handlers:
          elems[a].onmouseover = function()
          {
            //this.style.backgroundColor = borderColour;
            this.style.textDecoration="underline";
            this.style.cursor = "pointer";
            this.style.cursor = "hand";
          }
          elems[a].onmouseout = function()
          { 
            //this.style.backgroundColor = backgroundColour;
            this.style.textDecoration="none";
          }
          
          //note the 'a' variable does not conflict.
          elems[a].onclick = function()
          { 
            //get all tab CONTENT elements:
            //var elems = document.getElementsByTagName("span");
            var elems = document.getElementsByTagName("div");
            var tab_content = new Array();
            
            
            for(var a=0;a<elems.length;a++)
            { 
              if(hasClassName("tab_content",elems[a]))
              {
                tab_content.push(elems[a]);
              }
            }
            //and highlight the selected one:
            for(var a=0;a<tab_content.length;a++)
            {
              //hide all
              tab_content[a].style.display = "none";
            }
            var selectedTab = document.getElementById(this.id + "_content");
            selectedTab.style.display = "block";
            
            //and highlight the selected tab:
            var tabs = new Array();
            var tabelems = document.getElementsByTagName("li");
            for(var a=0;a<tabelems.length;a++)
            {   
              if(hasClassName("tab",tabelems[a]))
              { 
                //alert("removing class '"+tabelems[a].className+"'");    
                tabelems[a].style.fontWeight="normal";
              }
            }
            this.style.fontWeight = "bold";
          }
        }
      }
      }
      catch(e)
      {
        alert(e.message);
      }
      
  }
  
  /*
  test if supplied test class name is applied to elem:
  params: stringToTestFor, DOM element
  */
  function hasClassName(testName,elem)
  {
    var val = false;
    if(elem.className.toString().length > 0)
    {
      var classNames = elem.className.split(" ");
      for(var a=0;a<classNames.length;a++)
      {   
        if(testName.toString() == classNames[a].toString())
        {       
          val = true;
        }
      }
    }
    return val;
  }

