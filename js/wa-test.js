/** define the WAD data outside of teh function module, to make it tidier... */
import {filenames} from "./modules/filenames.js";
import {additional} from "./modules/additional.js";
import {readmes} from "./modules/readmes.js";

document.getElementById('search_btn').addEventListener('click',function(){
    doSearch(document.getElementById('term').value);
})

/** so we need to do the following:
 * 1: split the UUID as 0-2, 2->end
 * 2: build links as
 * 
3a6ed416d91d9910175c08687262412c5ad6f2e6

https://archive.org/download/wadarchive/DATA/3a.zip/3a%2F6ed416d91d9910175c08687262412c5ad6f2e6%2F3a6ed416d91d9910175c08687262412c5ad6f2e6.wad.gz

we need:
 - type = filenames[0].split('.')[1] (wad or pk3, usually) 
 - [0-2].zip/[0-2]%2F[2->end]%2F[0->end].[type].gz
and tack that on the end of
https://archive.org/download/wadarchive/DATA/

make linktext from 
filenames[0]
Find a JS routine to save as the filename, NOT the uuid...
* */
function getQueryString(param){
    try{
        var out = null;
        var urlStr = document.location.search;
        var qStr = urlStr.split(/\?/)[1];
        var params = qStr.split(/&/g);
        for(var a=0;a<params.length;a++){
            if(params[a].split(/=/)[0] === param){
                out = params[a].split(/=/)[1];
            }
        }
        return out;
    }
    catch(e){
        return false;
    }
}

function find(arg){
    let out = [];
    let rex = new RegExp(arg);
    for(let counter=0;counter < filenames.length; counter++){
       
        // console.log(filenames[counter].filenames[0].toLowerCase());
        if( filenames[counter].filenames[0] && filenames[counter].filenames[0].toLowerCase().search(rex) !== -1){
            out.push(filenames[counter]);
        };
    };
    return(out);
};

/** build the readme overlay */
function viewReadmeHandler(){
    console.log(this.getAttribute('data-key'));
    console.log(this.getAttribute('data-wadname'));
    console.log(additional[this.getAttribute('data-key')]);
    /** check for a readme in the static data, and  */
    let readme = readmes[this.getAttribute('data-key')];
    if(readme){
        /** TODO: sort out the dialogue box, WITHOUT resorting to jQuery! */
        let wadname = this.getAttribute('data-wadname');
        let readmeOverlayWrapper = document.createElement('div');
        let readmeTitlebar = document.createElement('div');
        let readmeTitlebarHeading = document.createElement('h2');
        readmeTitlebar.setAttribute('class','titlebar');
        let readmeCloseBox = document.createElement('div');
        readmeCloseBox.setAttribute('class','closebox');
        readmeCloseBox.setAttribute('id','dialogue_close');

        readmeCloseBox.addEventListener('click',function(){
            document.getElementById('dialogue').innerHTML="";
        })
        readmeCloseBox.appendChild(document.createTextNode('X'));
        readmeTitlebar.appendChild(readmeCloseBox);

        readmeTitlebarHeading.appendChild(document.createTextNode('readme for ' + wadname))
        readmeTitlebar.appendChild(readmeTitlebarHeading);
        readmeTitlebar.appendChild(readmeCloseBox);
        let readmePreformatDisplay = document.createElement('pre');
        
        readmePreformatDisplay.appendChild(document.createTextNode(readme.readmes[0]))

        readmeOverlayWrapper.appendChild(readmeTitlebar);
        readmeOverlayWrapper.appendChild(readmePreformatDisplay);
        readmeOverlayWrapper.setAttribute('class','dialogue');
        let target = document.getElementById('dialogue');
        target.innerHTML = "";
        target.appendChild(readmeOverlayWrapper);
    }
    console.log(readmes[this.getAttribute('data-key')]);
};

let iwad_name_mapper = {
    'DOOM':'doom.png',
    'TNT':'doom2.png',
    'PLUTONIA':'doom2.png',
    'DOOM2':'doom2.png',
    'HEXEN':'hexen.png',
    'HERETIC':'heretic.png',
    'STRIFE':'strife.png'
}

function doSearch(term){
    const link_prefix = 'https://archive.org/download/wadarchive/DATA/';
	if(term){
	    let matches = find(term)
	    console.log(matches);
	    // and for each, build links:
	    let out = document.createElement('ul');
        if(matches.length){

           /**      
            https://archive.org/download/wadarchive/DATA/98.zip/98%2F5be27cb4c21e6cfba8acbdfbe823831710886f%2F985be27cb4c21e6cfba8acbdfbe823831710886f.wad.gz
            */
            for(let a=0;a<matches.length;a++){
                let _li = document.createElement('li');
                
                

                /** prepare download href: */
                let type = 'wad';
                let check = new RegExp('pk3');
                if(matches[a].filenames[0].search(check) !== -1){
                    type = 'pk3';
                }
                /** Construct the paths for the current entry - this is a remote URL*/
                let _dir = matches[a]._id.substring(0,2)
                let path = _dir + '.zip/' + _dir + "%2F" + matches[a]._id.substring(2,matches[a]._id.length) + "%2F" + matches[a]._id + "." + type + ".gz";
                let _link = link_prefix + path;

                /** this is an OBJECT KEY, so I don't need to iterate over a big ass array: */
                let key = _dir + matches[a]._id.substring(2,matches[a]._id.length);
                
                let readme_icon = document.createElement('img');
                readme_icon.setAttribute('class','readme');
                
                /** process readme links, if found */
                let readme_link = document.createElement('a');   //readme link
                if(readmes[key]){
                    /** here, we render a link/icon for the readme: */
                    readme_icon.setAttribute('src','/images/text.png');
                    readme_link.appendChild(readme_icon);
                    readme_link.setAttribute('data-key',_dir + matches[a]._id.substring(2,matches[a]._id.length));
                    readme_link.setAttribute('data-wadname',matches[a].filenames[0]);
                    readme_link.setAttribute('title','Readme file for '+ matches[a].filenames[0]);
                    /* and append the click handler to open the : */
                    readme_link.addEventListener('click',viewReadmeHandler);
                }
                else{
                    /** if nothing found, render the empty img tag: */
                    readme_link.appendChild(readme_icon);
                }
                /** end readmes links */

                /** process engine type  */
                let iwad = document.createElement('img');
                
                if(additional[key] && additional[key]['iwad']&& additional[key]['iwad'].length){
                    console.log(additional[key]['iwad']);
                    console.log(iwad_name_mapper[additional[key]['iwad']]);
                    //iwad.setAttribute('src','/images/iwads/' +additional[key]['iwad'].toString().toLowerCase() + '.png');
                    iwad.setAttribute('src','/images/iwads/' + iwad_name_mapper[additional[key]['iwad']]);
                    iwad.setAttribute('class','iwad_logo');
                    //iwad.appendChild(document.createTextNode("["+additional[key]['iwad'].toString()+"]"));
                }
                else{
                    iwad.setAttribute('src','/images/trans.gif');
                    iwad.setAttribute('class','iwad_logo_missing');
                }

                
                /** build the download DOM element: */
                let dl_link = document.createElement('a');   //download link
                dl_link.setAttribute('href',_link);
                dl_link.setAttribute('title','Download ' + matches[a].filenames[0]);
                let _img = document.createElement('img');
                _img.setAttribute('src',"/images/dl-anim.gif");
                _img.setAttribute('class',"dlicon");
                dl_link.appendChild(_img);
                /** do the same for the images/maps/titlepics... */

                /** And show the filename next to the various icons: */
                let filename_display = document.createElement('span');   //summary link
                filename_display.appendChild(document.createTextNode(matches[a].filenames[0]));

                /** assemble list item DOM snippet: */
                _li.appendChild(dl_link);
                _li.appendChild(readme_link);
                _li.appendChild(iwad);
                _li.appendChild(filename_display);
                
                /** finally, append to list: */
                out.appendChild(_li);
            }
        }
        else{
            let _li = document.createElement('li');
            _li.appendChild(document.createTextNode('No matches!'))
            out.appendChild(_li);
        }
        document.getElementById('sausage').innerHTML = "";
	    document.getElementById('sausage').appendChild(out);
	}
}

function getDownloadLink(link){
    //todo
}

function getSummaryLink(link){
    //todo
}

function setKeypressHandlers(){
    // its all changed!!: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    document.getElementById('term').addEventListener('keyup',function(evt){
        console.log(evt.code);
        if (evt.code === 'Enter'){    //enter
            console.log('autoclicking');
            document.getElementById('search_btn').click();
        }

    });
    document.querySelector('body').addEventListener('keyup',function(evt){
        console.log(evt.code);
        if(evt.code === 'Escape'){
            //close any opened overlay

            /** because it might not actually be open */
            try{ 
                console.log('closing dialogue...')
                document.getElementById('dialogue_close').click();
            }
            catch(ex){
                console.log("nothing to close");
            }
        }
    });
}

//set the click handler for the text field so the button is clicked on [enter]
setKeypressHandlers();
let term = getQueryString('term');

doSearch(term);
