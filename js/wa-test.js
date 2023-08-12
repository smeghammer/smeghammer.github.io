/** define the WAD data outside of the function module, to make it tidier... */
import {filenames} from "./modules/filenames.js";
import {additional} from "./modules/additional.js";
import {readmes} from "./modules/readmes.js";
import {wads} from "./modules/wads.js";

document.getElementById('search_btn').addEventListener('click',function(){
    doSearch(document.getElementById('term').value);
})

/** 
 * TODO: add tooltips to IWAD image, indicating TNT, PLUTONIA etc. for base IWAD...
 * 
 * TODO: There is a descriptive text witihn other metadata too. Get this if available...
 * so we need to do the following:
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

/**
 * `directory`: 2-digit path prefix
 * 
 * `path`: the entry UUID
 * 
 * `category`: type of image (`SCREENSHOTS`, `MAPS`, `GRAPHICS`; or `false`)
 * 
 * `image`: the image name from the metadata (ignored if category is `false`. Required; may be `false`)
 * 
 * `filetype`: download filetype (`.wad.gz` or `.pk3.gz`) 
 * 
 * screenshots:
 * https://archive.org/download/wadarchive/DATA/  02            ".zip/" 02            "%2F"  2b30c47f9392da00ace3124ec96e8354d6e086  "%2F"  SCREENSHOTS  "%2F"  MAP06.png
 * 
 * format for images:
 * prefix                                   + "/" + directory + ".zip/" + directory + "%2F" + path                                  + "%2F" + category + "%2F" + image
 * 
 * format for download:
 * download:
 * https://archive.org/download/wadarchive/DATA/    02           .zip/    02           %2F    2b3a3736bf8f30ca6abef5180feed1a277f689  %2F     022b3a3736bf8f30ca6abef5180feed1a277f689   .wad.gz
 * prefix                                   + "/" + directory + ".zip/" + directory + "%2F" + path                                  + "%2F" + directory + path                          + filetype
 * 
 * directory = 2 char refix - 01
 * path = UUID
 * category = MAPS, SCREENSHOTS etc. (should be an enum)
 * image = IMAGENAME.png
 * filetype = .wad.gz or .pk3.zip
 * 
 * examples:
 * 
 * interpic:
 * https://archive.org/download/wadarchive/DATA/02.zip/02%2F2a8b2793f1f723ce7bb4caaeb24678930c7637%2FGRAPHICS%2FINTERPIC.PNG
 * 
 * titlepic:
 * https://archive.org/download/wadarchive/DATA/02.zip/02%2F2a8b2793f1f723ce7bb4caaeb24678930c7637%2FGRAPHICS%2FTITLEPIC.PNG
 * 
 * credit:
 * https://archive.org/download/wadarchive/DATA/02.zip/02%2F2a8b2793f1f723ce7bb4caaeb24678930c7637%2FGRAPHICS%2FCREDIT.PNG
 * 
 * maps:
 * https://archive.org/download/wadarchive/DATA/02.zip/02%2F2ac67772fbe2f62b9876ebba22a0d22f7813e0%2FMAPS%2FZE23.PNG
 * 
 */
function getRemoteURL(directory,path,category,image,filetype){
    const link_prefix = 'https://archive.org/download/wadarchive/DATA';
    let data = [];
    let directory_suffixed = directory + '.zip';
    let returnval = null;
    if(filetype){ /** download */
        returnval = link_prefix + "/" + directory + ".zip/" + directory + "%2F" + path + "%2F" + directory + path + filetype;
    }
    else{  /** image URL */
        returnval = link_prefix + "/" + directory + ".zip/" + directory + "%2F" + path + "%2F" + category + "%2F" + image;
    }
    return(returnval);
}

function find(arg){
    let out = [];
    let rex = new RegExp(arg);
    for(let counter=0;counter < filenames.length; counter++){
        if( filenames[counter].filenames[0] && filenames[counter].filenames[0].toLowerCase().search(rex) !== -1){
            out.push(filenames[counter]);
        };
    };
    return(out);
};

/** 
 * `wadname`: WAD name passed in as dialogue title (str)
 * 
 * `data`: DOM object constructed elsewhere constituting the dialogue content (HTMLDomElement)
 * 
 * get the basic overlay framework, with title, close box, display
 * area:
 */
function getOverlayFrame(wadname,data){
    let dialogueOuter = document.createElement('div');
    dialogueOuter.setAttribute('class','dialogue');
    let dialogueTitlebar = document.createElement('div');
    let dialogueTitlebarHeading = document.createElement('h2');
    dialogueTitlebar.setAttribute('class','titlebar');
    let dialogueCloseBox = document.createElement('div');
    dialogueCloseBox.setAttribute('class','closebox');
    dialogueCloseBox.setAttribute('id','dialogue_close');

    dialogueCloseBox.addEventListener('click',function(){
        document.getElementById('dialogue').innerHTML="";
    })
    dialogueCloseBox.appendChild(document.createTextNode('X'));
    dialogueTitlebar.appendChild(dialogueCloseBox);

    dialogueTitlebarHeading.appendChild(document.createTextNode(wadname))
    dialogueTitlebar.appendChild(dialogueTitlebarHeading);
    dialogueTitlebar.appendChild(dialogueCloseBox);
    let dialogueContainer = document.createElement('div');
    dialogueContainer.setAttribute('id','dialogue-content');
    dialogueContainer.appendChild(data);
    dialogueOuter.appendChild(dialogueTitlebar);
    dialogueOuter.appendChild(dialogueContainer);
    return(dialogueOuter);
}

/** build the ID Games readme overlay */
function viewReadmeHandler(){

    /** check for a readme in the static data, and  */
    let readme = readmes[this.getAttribute('data-key')];
    if(readme){

        /** TODO: sort out the dialogue box, WITHOUT resorting to jQuery! */
        let wadname = this.getAttribute('data-wadname');
        if(additional[this.getAttribute('data-key')]['name']){
            wadname = additional[this.getAttribute('data-key')]['name'];
        }
        let readmePreformatDisplay = document.createElement('pre');
        readmePreformatDisplay.appendChild(document.createTextNode(readme.readmes[0]))
        showDialogue(getOverlayFrame(wadname, readmePreformatDisplay))
    }
};

function showDialogue(data){
    let target = document.getElementById('dialogue');
    target.innerHTML = "";
    target.appendChild(data)
}

/** TODO: preload image with promise  */
function preloadImage(url){
    // see https://stackoverflow.com/questions/72223103/how-to-know-when-image-preloading-is-done-with-javascript
    let current_image = new Image()
    current_image.src = url;
    return new Promise((done, fail)=>{
        current_image.onload = ()=>{
            done();
        }
        current_image.onerror = () => {
            fail(new Error('failed to load '+url));
        }
    });
}

/** handler for pagination links */
function paginate(evt){
    // hide all images:
    let list = document.querySelectorAll('#dialogue-content > div > img');
    for(let a=0;a<list.length;a++){
        list[a].classList.add('hidden');
    }
    // show the one related to this anchor:
    let query = '#dialogue-content > div > img[data-imagenum="'+this.getAttribute('data-imagenum')+'"]';
    let imgToShow = document.querySelector(query);
    imgToShow.classList.remove('hidden');

    // set all anchors to not current:
    query = '#dialogue-content > div > div > ul > li > a';
    let paginationLinks = document.querySelectorAll(query);
    for(let a=0;a<paginationLinks.length;a++){
        paginationLinks[a].classList.remove('current');
    }

    // highlight the current anchor:
    this.classList.add('current');

    // and stop the default anchor click behaviour:
    evt.preventDefault();
}

/** handler function to return specified graphic type for specified category. data is obtained from attributes built into the link tag 
 * `data-key` - UUID of entry
 * `data-type` - string interpic or titlepic
 * 
*/
function viewGraphicsHandler(){
    let key = this.getAttribute('data-key');
    let dir = key.substring(0,2)
    let path = key.substring(2,key.length);
    let data = wads[key]
    let type = this.getAttribute('data-type');
    let img = null;
    // now I want the graphics node, and the entry where type is this.data-type:
    for(let c=0;c<data.graphics.length;c++){
        if(data.graphics[c].name.includes(type) || data.graphics[c].name === type){   // because .pk3s have a path
            img = data.graphics[c].image;
        }
    }
    let imgUrl = getRemoteURL(dir,path,'GRAPHICS',img,false)
    let imgElem = document.createElement('img');
    imgElem.setAttribute('src',imgUrl);

    // now construct the overlay:
    showDialogue(getOverlayFrame(type.toUpperCase() + ' for ' +this.getAttribute('data-wadname'),imgElem))
}

function viewScreenshotsHandler(){
    let key = this.getAttribute('data-key');
    let dir = key.substring(0,2)
    let path = key.substring(2,key.length);
    let imgArray = [];
    let preload = [];
    let a = 0;  // counter
    
    /** get screenshots for supplied UUID: */
    console.log(additional[this.getAttribute('data-key')]);
    for(let item in additional[this.getAttribute('data-key')]['screenshots']){
        // console.log(additional[this.getAttribute('data-key')]['screenshots'][item]);
        let img = additional[this.getAttribute('data-key')]['screenshots'][item];

        // image URL:
        let imageUrl = getRemoteURL(dir, path, 'SCREENSHOTS', img, false);
        imgArray.push(imageUrl);
        
        // TODO:
        // preload[a] = await preloadImage(imageUrl);
        preload[a] = new Image();
        if(a>0){
            preload[a].classList.add('hidden');
        }

        preload[a].setAttribute('data-imagenum',(a+1).toString());
        preload[a].src = imageUrl;
        console.log(imageUrl);
        a++;
    }
  
    // we need to call the getRemoteURL method to create the urls to the images found in the json data.
    // need to iterate over the data for key and filter for relevant links - see notes on called method.
    let wadname = this.getAttribute('data-wadname');
    if(additional[this.getAttribute('data-key')]['name']){
        wadname = additional[this.getAttribute('data-key')]['name'];
    }
    
    let imgListContainer = document.createElement('div')

    /** if greater than one image, make a paginator: */
    if(imgArray.length > 1){
        let paginatorContainer = document.createElement('div');
        paginatorContainer.setAttribute('class','paginator');
        let paginatorUL = document.createElement('ul');
        for(let x=0;x<imgArray.length;x++){
            let paginatorLI = document.createElement('li');
            let paginatorA = document.createElement('a');
            if(x===0){
                paginatorA.classList.add('current');
            }
            paginatorA.appendChild( document.createTextNode(' '+(x+1).toString() + ' ' )  ); // <-- NEEDED whitespace, other wise it doesn't wrap AT ALL!
            paginatorA.setAttribute('href','#');
            paginatorA.setAttribute('data-imagenum',(x+1).toString());
            paginatorA.addEventListener('click',paginate);
            paginatorLI.appendChild(paginatorA);
            paginatorUL.appendChild(paginatorLI);
        }
        paginatorContainer.appendChild(paginatorUL);
        
        // and append click handlers:
        imgListContainer.appendChild(paginatorContainer)
    }

    // append images to dialogue, but set to hidden with CSS; then default to showing the first:
    for(let x=0;x<imgArray.length;x++){
        imgListContainer.appendChild(preload[x]);
    }
    showDialogue(getOverlayFrame(wadname, imgListContainer));
};

/**
 * updete the DOM with some info about the pics for the given entry
 * Because this is on enter, it will populate as soon as the mouse goes
 * over the entry. This persists until the page is reloaded.
 * 
 * The data is then used by the click hander to get the relevant pics. 
 * It simply means that the click handler then only needs to call one function
 * rather than two.
 */
function mouseenterScreenshotsHandler(){
    if(!this.hasAttribute('data-hovered')){
        // console.log('applying screenshot count.');
        let imageCount = Object.keys(additional[this.getAttribute('data-key')]['screenshots']).length;
        this.setAttribute('data-hovered',true);
        // see https://www.geeksforgeeks.org/find-the-length-of-a-javascript-object/
        this.setAttribute( 'data-imagecount',imageCount );
        // https://javascript.info/arrow-functions-basics
        let check = a => a > 1 ? 's':'';
        // let s = check(imageCount)
        this.setAttribute('title','Found '+imageCount+' screenshot' + check(imageCount) + ' for ' + this.getAttribute('data-wadname'));
    }
    else{
        console.log('already applied.');
    }
}

let iwad_name_mapper = {
    'DOOM':'doom.png',
    'TNT':'doom2.png',
    'PLUTONIA':'doom2.png',
    'DOOM2':'doom2.png',
    'HEXEN':'hexen.png',
    'HERETIC':'heretic.png',
    'STRIFE':'strife.png'
}

/** 
 * return a link DOM object for supplied UUID
 * or an empty element if none found.
 */
function getReadmeForEntry(entry,directory,m){
    let readme_icon = document.createElement('img');
    readme_icon.setAttribute('class','readme');
    let readme_link = document.createElement('a');   //readme link
    if(entry ){
        try{
            /** here, we render a link/icon for the readme: */
            readme_icon.setAttribute('src','/images/text.png');
            readme_link.setAttribute('data-key',directory + m['_id'].substring(2,m['_id'].length));
            readme_link.setAttribute('data-wadname',m['filenames'][0]);
            readme_link.setAttribute('title','ID Games Readme file for '+ m['filenames'][0]);
            readme_link.classList.add('link');
            readme_link.classList.add('active_link');
            /* and append the click handler to open the : */
            readme_link.addEventListener('click',viewReadmeHandler);
        }
        catch(ex){
            console.log('error in getReadmeForEntry: ', ex);
        }
    }
    readme_link.appendChild(readme_icon);
    return(readme_link);
}

function getIWADForEntry(additional){
    let iwad = document.createElement('img');
    iwad.setAttribute('src','/images/trans.gif');
    iwad.setAttribute('class','iwad_logo_missing');
    try{
        if(additional['iwad']&& additional['iwad'].length){
            // console.log('building IWAD logo');
            iwad.setAttribute('src','/images/iwads/' + iwad_name_mapper[additional['iwad']]);
            iwad.setAttribute('class','iwad_logo');
        }
    }
    catch(ex){
        console.log(ex);
    }
    return(iwad);
}

function getScreenshotsForEntry(additional,dir,match){
    let screenshots = document.createElement('img');
    screenshots.setAttribute('src','/images/trans.gif');
    screenshots.setAttribute('class','screenshots_missing');
    let screenshots_link = document.createElement('a');
    screenshots_link.appendChild(screenshots);
    try{
        if(!isEmpty(additional['screenshots'])){
            screenshots.setAttribute('src','/images/screenshot_icon.png');
            screenshots.classList.remove('screenshots_missing');
            screenshots.classList.add('screenshots');
            screenshots_link.setAttribute('data-key',dir + match._id.substring(2,match._id.length));
            screenshots_link.setAttribute('data-wadname',match.filenames[0]);
            screenshots_link.setAttribute('data-type','screenshots');
            screenshots_link.classList.add('active_link');
            screenshots_link.addEventListener('click',viewScreenshotsHandler);
            screenshots_link.addEventListener('mouseenter',mouseenterScreenshotsHandler); //to make tooltip
        }
    }
    catch(ex){
        console.log(ex)
    }

    return(screenshots_link)
}

function getDownloadLink(link,match){
    /** build the download DOM element: */
    let dl_link = document.createElement('a');   //download link
    dl_link.setAttribute('href',link);
    dl_link.classList.add('active_link');
    dl_link.setAttribute('title','Download ' + match.filenames[0]);
    let _img = document.createElement('img');
    _img.setAttribute('src',"/images/dl-anim.gif");
    _img.setAttribute('class',"dlicon");
    dl_link.appendChild(_img);
    return(dl_link);
}

/**
 */
function getFilenameDisplay(match){
    // TODO: Pull nicename from ... where?
    let filename_display = document.createElement('span');   //summary link
    filename_display.appendChild(document.createTextNode(match.filenames[0]));
    return(filename_display);
}

function getFileType(match){
    let filetype = '.wad.gz';
    let check = new RegExp('pk3');
    if(match.filenames[0].search(check) !== -1){
        filetype = '.pk3.gz'
    }
    return(filetype);
}

/**
 * 
 * @param {UUID of entry} wad 
 * @param {string (ENDOOM, INTERPIC)} type 
 * @returns DOM element
 */
function getInterpic(dir,match,path, category,wad,type){
    /** stuff from WADS - ENDOOM, INTERPIC etc.
     * this needs to be applied ONLY if there is a match betwen the record and the supplied type!!
     * wad[type] === type!!
     */
    let pic = document.createElement('img');
    pic.setAttribute('src','/images/trans.gif');
    pic.setAttribute('class','screenshots_missing');
    let pic_link = document.createElement('a');

    // https://archive.org/download/wadarchive/DATA/10.zip/10%2F07026651ba594696b875567b6bb6e87301f7af%2FGRAPHICS%2FINTERPIC.PNG
    // the wad[graphics] array may be a PK3 list, or may be a single entry for a WAD type. We need to check that the passed TYPE matches
    // the type found in the graphics list(interpic/titlepic)
    let typeMatches = false;
    if(wad && wad['graphics'] && wad['graphics'].length > 0){
        // console.log('ug');
    
        for(let x=0; x < wad['graphics'].length; x++){
            if(wad['graphics'][x].name.toUpperCase().includes(type.toUpperCase())){
                typeMatches = true;
            }
        }
    }
    if(typeMatches && wad && wad['graphics'] && wad['graphics'].length){
        // function getRemoteURL(directory,path,category,image,filetype){
        // console.log(getRemoteURL(dir,path,category,wad['graphics'][0].image,type));
        // console.log(wad);
        // console.log(wad['graphics']);
        pic.setAttribute('src','/images/picture-64x64.png');
        //pic.setAttribute('src','/images/screenshot_icon.png');
        pic.classList.remove('screenshots_missing');
        pic.classList.add('screenshots');
        pic_link.setAttribute('data-key',dir + match._id.substring(2,match._id.length));
        pic_link.setAttribute('data-wadname',match.filenames[0]);
        pic_link.setAttribute('data-type',type.toUpperCase());
        pic_link.setAttribute('title',type.toUpperCase() + ' for ' + match.filenames[0]);
        pic_link.classList.add('active_link');
        pic_link.addEventListener('click',viewGraphicsHandler);
    }
    pic_link.appendChild(pic);
    return(pic_link)
}

/** 
GRAPHICS TO GET:
TITLEPIC/INTERPIC - from /modules/trimmed/graphics.js
 */
function doSearch(term){
    const link_prefix = 'https://archive.org/download/wadarchive/DATA/';
	if(term){
        //console.log(typeof(term));
        //console.log(term);
        term = term.toLowerCase();
        /** and rewrite the URL to use this value (see 
         * https://stackoverflow.com/questions/24281937/update-parameters-in-url-with-history-pushstate)
         * https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
         */
        history.replaceState({},'',location.href.split(/\?/)[0] + '?term=' + term);
	    let matches = find(term)
	    let out = document.createElement('ul');
        if(matches.length){

           /** https://archive.org/download/wadarchive/DATA/98.zip/98%2F5be27cb4c21e6cfba8acbdfbe823831710886f%2F985be27cb4c21e6cfba8acbdfbe823831710886f.wad.gz */
            for(let a=0;a<matches.length;a++){
                let _li = document.createElement('li');
                
                /** prepare download href: */
                let filetype = getFileType(matches[a])

                /** Construct the paths for the current entry - this is a remote URL*/
                let _dir = matches[a]._id.substring(0,2)
                /** TEST THE URL BUILDING: Note: this is used for images and downloads - potentially TO TEST */
                let _link = getRemoteURL(_dir,matches[a]._id.substring(2,matches[a]._id.length),null,null,filetype);

                /** this is an OBJECT KEY, so I don't need to iterate over a big ass array: */
                let key = _dir + matches[a]._id.substring(2,matches[a]._id.length);
                
                /** get download link: */
                let dl_link = getDownloadLink(_link, matches[a])

                /** process readme links, if found. note, matches[a] may be undefined */
                let readme_link = getReadmeForEntry(readmes[key],_dir,matches[a]);

                /** process engine type  */
                let iwad = getIWADForEntry(additional[key]);

                /** get screenshots */
                let screenshots_link = getScreenshotsForEntry(additional[key],_dir,matches[a])

                /** get displayed filename: */
                let filename_display = getFilenameDisplay(matches[a])

                /** get Interpic if present */
                // function getInterpic(dir,path, category,wad,type){
                // this needs to ONLY be called if the current entry inclused interpic:
                // console.log(wads[key])
                let interpic = getInterpic(_dir,matches[a],key,'graphics',wads[key],'interpic');
                // console.log(interpic)
                // https://archive.org/download/wadarchive/DATA/10.zip/10%2F07026651ba594696b875567b6bb6e87301f7af%2FGRAPHICS%2FINTERPIC.PNG
                // /** stuff from WADS - ENDOOM, INTERPIC etc. */
                // if(wads[key] && wads[key]['graphics']){
                //     console.log(wads[key]['graphics']);
                // }

                let titlepic = getInterpic(_dir,matches[a],key,'graphics',wads[key],'titlepic');

                // each abstracted function needs to test for additional[key], so this if() block is part of function, not the loop...
                if(additional[key]){

                    /** maps - text of map names */
                    if(!isEmpty(additional[key]['maps'])){
                        console.log(additional[key])
                        console.log('maps:',additional[key]['maps'])
                    }

                    /** graphics */
                    if(!isEmpty(additional[key]['graphics'])){
                        console.log('graphics',additional[key]['graphics'])
                    }
                }
                /** do the same for the images/maps/titlepics... */

                /** assemble list item DOM snippet: */
                _li.appendChild(dl_link);
                _li.appendChild(readme_link);
                _li.appendChild(screenshots_link);   // this will open an overlay that will page through the screenshots, if present

                _li.appendChild(interpic);  //test
                _li.appendChild(titlepic);  //test
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


function getSummaryLink(link){
    //todo
}

function setKeypressHandlers(){
    // its all changed!!: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    document.getElementById('term').addEventListener('keyup',function(evt){
        // console.log(evt.code);
        if (evt.code === 'Enter'){    //enter
            document.getElementById('search_btn').click();
        }
    });
    document.querySelector('body').addEventListener('keyup',function(evt){
        if(evt.code === 'Escape'){
            /** because it might not actually be open */
            try{ 
                document.getElementById('dialogue_close').click();
            }
            catch(ex){
                console.log("nothing to close");
            }
        }
    });
}

function isEmpty(obj){
    // see https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    for(const prop in obj){
        if(Object.hasOwn(obj,prop)){
            return false;
        }
    }
    return true;
}
let term;
if(getQueryString('term')){
    // console.log('querystring start')
    term = getQueryString('term').toLowerCase();
    // console.log('from querystring',term)
    document.getElementById('term').value = term;
    // console.log('querystring end')
}
//set the click handler for the text field so the button is clicked on [enter]
setKeypressHandlers();



/**
 * triggered on page load, traditional querystring. Ensure the searchterm is used to populate 
 * the query textbox.
 */
// console.log('just becore doSearch(): ',term)
doSearch(term);
