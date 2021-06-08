let engine = {
    navdata : [
        {'linktext':'Home','url':'/', 'parenturl':null, 'pagekey':'0', 'childs':[
            {'linktext':'Maps & WADs','url':'/maps/', 'parenturl':'/', 'pagekey':'0.0', 'childs':[
                {'linktext':'A Nail in the Skin of the World','url':'/maps/anitsotw.htm', 'parenturl':'/maps/', 'pagekey':'0.0.0', 'childs':[]},
                {'linktext':'Belial\'s Ruin','url':'/maps/belials-ruin.htm', 'parenturl':'/maps/', 'pagekey':'0.0.1', 'childs':[]},
                {'linktext':'Cardinal Sin','url':'/maps/cardinal-sin.htm', 'parenturl':'/maps/', 'pagekey':'0.0.2', 'childs':[]},
                {'linktext':'Corporate Nightmare','url':'/maps/corporate-nightmare.htm', 'parenturl':'/maps/', 'pagekey':'0.0.3', 'childs':[]},
                {'linktext':'Crushdepth','url':'/maps/crushdepth.htm', 'parenturl':'/maps/', 'pagekey':'0.0.10', 'childs':[]},
                {'linktext':'Departure','url':'/maps/departure.htm', 'parenturl':'/maps/', 'pagekey':'0.0.4', 'childs':[]},
                {'linktext':'Fuck You, Escher!','url':'/maps/fuescher.htm', 'parenturl':'/maps/', 'pagekey':'0.0.5', 'childs':[]},
                {'linktext':'Hellbreach','url':'/maps/hellbreach.htm', 'parenturl':'/maps/', 'pagekey':'0.0.6', 'childs':[]},
                {'linktext':'Island Fortress','url':'/maps/islandfortress.htm', 'parenturl':'/maps/', 'pagekey':'0.0.7', 'childs':[]},
                {'linktext':'Rectilinia','url':'/maps/rectilinia.htm', 'parenturl':'/maps/', 'pagekey':'0.0.8', 'childs':[]},
                {'linktext':'Tubeworm','url':'/maps/tubeworm.htm', 'parenturl':'/maps/', 'pagekey':'0.0.9', 'childs':[]}
            ]},
            {'linktext':'Snippets','url':'/snippets/', 'parenturl':'/', 'pagekey':'0.1', 'childs':[
                    
            ]},  
            {'linktext':'Useful Links','url':'/links/', 'parenturl':'/', 'pagekey':'0.2', 'childs':[
                    
            ]},
        ]},
    ],   //TODO
    
    topnavWrapper : null,
    
    copyright : 2021,
    imagebase : 'https://raw.githubusercontent.com/smeghammer/',
    repobase : 'https://github.com/smeghammer/',
    imagesuffix : '?raw=true',
    repolist : [
        {'repo' : 'hellbreach',         'nicename':'Hellbreach',        'branch':'master','imagecount':12,'pagekey':'0.0.6'},
        {'repo' : 'fuescher',           'nicename':'Fuck You, Escher!', 'branch':'master','imagecount':30,'pagekey':'0.0.5'},
        {'repo' : 'crushdepth',         'nicename':'Crushdepth',        'branch':'master','imagecount':21,'pagekey':'0.0.10'},
        {'repo' : 'belials_ruin',       'nicename':'Belial\'s Ruin',    'branch':'master','imagecount':4,'pagekey':'0.0.1'},
        {'repo' : 'islandfortress',     'nicename':'Island Fortress',   'branch':'master','imagecount':29,'pagekey':'0.0.7'},
        {'repo' : 'rectilinia',         'nicename':'Rectilinia',        'branch':'master','imagecount':38,'pagekey':'0.0.8'},
        {'repo' : 'tubeworm',           'nicename':'Tubeworm',          'branch':'master','imagecount':19,'pagekey':'0.0.9'},
        {'repo' : 'departure',          'nicename':'Departure',         'branch':'master','imagecount':59,'pagekey':'0.0.4'},
        {'repo' : 'CardinalSin',        'nicename':'Cardinal Sin',      'branch':'master','imagecount':27,'pagekey':'0.0.2'},
        {'repo' : 'anitsotw',           'nicename':'A Nail in the Skin of the World',  'branch':'master','imagecount':22,'pagekey':'0.0.0'},
        {'repo' : 'corporate-nightmare','nicename':'Corporate Nightmare',  'branch':'master','imagecount':23,'pagekey':'0.0.3'}
    ],
    /** start stuff */
    init : function(){
        let pagetype = $('body').attr('data-page');
        let pagekey = $('body').attr('data-pagekey');
        switch(pagetype){
            /* do page-specific stuff: */
            case "home":
                /* https://stackoverflow.com/questions/3646036/preloading-images-with-javascript **/
                let currRepoIndex = engine.getRandomRepoIndex();
                let currRepo = engine.repolist[currRepoIndex];
                let currImageIndex = engine.getRandomImageIndex(currRepoIndex);
                $('#splash').empty().append(engine.getImageDOM(engine.buildImageUrl(currRepo.repo, currRepo.branch,currImageIndex+1),currRepo));
                    
                setInterval(function(){
                    currRepoIndex = engine.getRandomRepoIndex();
                    currRepo = engine.repolist[currRepoIndex];
                    currImageIndex = engine.getRandomImageIndex(currRepoIndex);
                    $('#splash').empty().append(engine.getImageDOM(engine.buildImageUrl(currRepo.repo, currRepo.branch,currImageIndex+1),currRepo));
                },15000);
            break;
            case "maps":
//                this.appendMapScreenshotHandlers();
//                this.buildScreenshotImages();
            break;
            case "map":
                let imageContainer = $('div.contents > div:nth-of-type(2)');
                imageContainer.empty();
                //render images for specified map:
                for (let a=0;a<this.repolist.length;a++){
                    console.log(pagekey,this.repolist[a]['pagekey']);
//                    console.log(this.repolist[a]['pagekey']);
                    if(this.repolist[a]['pagekey'] === pagekey){
                        //use this image list:
                        console.log(this.repolist[a]);
                        //first empty container
                        
                        
                        for(let b=0;b<this.repolist[a].imagecount;b++){
                            console.log(this.buildImageUrl(this.repolist[a].repo,this.repolist[a].branch,b+1));
                            $(imageContainer).append(this.getImageDOM(this.buildImageUrl(this.repolist[a].repo,this.repolist[a].branch,b+1),this.repolist[a]));
                            //$('#splash').empty().append(engine.getImageDOM(engine.buildImageUrl(currRepo.repo, currRepo.branch,currImageIndex+1),currRepo));
                            //then append:
                        }
                        break;
                    }
                }
            break;
        }
        /* build navigation */
        $('#menubar').empty().append(this.buildNav(true));
        
        $('#subnav').empty().append(this.buildNav(false));
        
        /* and load footer */
        $('#footer').empty().append(this.buildFooter());
    },

    
    
    
    /**
    See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    splashImageIndex : function(){
        return Math.floor(Math.random() * Math.floor(this.splashscreen.length))+1;
    },
    
    /* get random index of core repolist entry */
    getRandomRepoIndex : function(){
        return Math.floor(Math.random() * this.repolist.length)
    },
    
    getRandomImageIndex : function(repoindex){
        return Math.floor(Math.random() * this.repolist[repoindex].imagecount);
    },
    
    
    /*
    *need to build: 
    *https://raw.githubusercontent.com/smeghammer/CardinalSin/master/screenshots/10.png
    *
    *'https://raw.githubusercontent.com/smeghammer' + reponame + '/' + branchname + '/screenshots/' + imagenum + '.png'
    *
     */
    buildImageUrl : function(reponame,branch,imagenum){
        return(this.imagebase + reponame + '/' + branch + '/screenshots/' + imagenum + '.png');
    },
    
    buildRepoUrl : function(reponame){
        return(this.repobase + reponame + '/');
    },
    
    /**
     * build top horizontal menu from l0 (index) and l1. Ensure that l1 is highlighted if in a child of that entry.
     * set data-page to key to object (self/parent IDs?)
     * 
<ul class="pure-menu-list">
    <li class="pure-menu-item hilight">
        <span>Home</span>
    </li>
    <li class="pure-menu-item">
        <a href="maps.htm" title="Maps">Maps &amp; WADs</a>
    </li>
    <li class="pure-menu-item">
        <a href="test-maps.htm" title="Snippets">Snippets</a>
    </li>
</ul>
     * 
     * */
    buildNav : function(main){
        
        let navWrapper = document.createElement('ul');
        navWrapper.setAttribute('class','pure-menu-list'); 
        let _currpagekey = $('body').attr('data-pagekey');
        
        if(main){
            /* pull out correct data from page index data attribute */
            let _home = this.buildLink(this.navdata[0])
            navWrapper.appendChild(_home);
            
            /* self is a span, not a link ancestor is link and bold. work out based on data-pagekey. This is a stringified array map */
            for(let a=0;a<this.navdata[0].childs.length;a++){
                navWrapper.appendChild(this.buildLink(this.navdata[0].childs[a],main));
            }
        }
        else{
            /* where are we? */
            if(_currpagekey.split('.').length > 1){
                let l2Index = parseInt(_currpagekey.split('.')[1]);
                for(let a=0;a<this.navdata[0].childs[l2Index].childs.length;a++){
                    navWrapper.appendChild(this.buildLink(this.navdata[0].childs[l2Index].childs[a],false));
                }
            }
        }
        return(navWrapper);
    },
    
    /* Build a link inside a list item tag: */
    buildLink : function(pagedata,l3page){
        
        /* append root nav */
        let _li = document.createElement('li');
        let _a = null;
        let _text = document.createTextNode(pagedata.linktext);
        let pagekey = $('body').attr('data-pagekey');
        let boldLink = false;
        /* does topnav (l2) map to first two parts of current l3 page? */
        if(l3page){
            let _path = pagekey.split(/\./g);
            if(l3page && _path.length === 3){
                _path.pop();    //remove last element
                if(_path.join('.') === pagedata.pagekey){
                    boldLink = true;
                }
            }
        }
        
        /* are we on self: */
        if(pagedata.pagekey === pagekey){
            _li.setAttribute('class','pure-menu-item hilight');
            _a = document.createElement('span');
            this.populatePageData(pagedata);
        }
        else{
            //detect parent and bold if true
            _a = document.createElement('a');
            _a.setAttribute('href',pagedata.url);
            _a.setAttribute('title',pagedata.linktext);
            
            /* also, check for PARENT */
            if(boldLink){
                _li.setAttribute('class','pure-menu-item hilight');
            }
            else{
                _li.setAttribute('class','pure-menu-item');
            }
        }
        _a.appendChild(_text);
        _li.appendChild(_a);
        return(_li);
    },
    
    populatePageData : function(pagedata){
        console.log(pagedata);
        path = null;
        let _path = pagedata.pagekey.split(/\./g);
        path = _path;
        if(_path.length === 3){
            /* Deep copy: https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a */
            let __path = Array.from(_path);
            __path.pop();
            console.log(__path);
            console.log(_path);
            
            path = __path;
            
        }
        /* get l2 page */
        for(let a=0;a<this.navdata[0].childs.length;a++){
            //console.log(this.navdata[0].childs[a]);
            if(path.join('.') === this.navdata[0].childs[a].pagekey){
                console.log(this.navdata[0].childs[a].linktext);
                $('h2').empty().append(this.navdata[0].childs[a].linktext);
            }
        }
//        console.log(_path);
         $('title').empty().append(pagedata.linktext);
         $('h1').empty().append(pagedata.linktext);
//         console.log(pagedata);
    },
    
    /**
    append click handlers to all screenshot togglers:
     */
    appendMapScreenshotHandlers : function(){
        $("h4.screenshots").each(function(){
            $(this).off('click').click(function(){
                if($(this).next().css('display') === 'none'){
                    $(this).next().css({'display':'block'});
                }
                else{
                    $(this).next().css({'display':'none'});
                }
            });
        });
    },

//    buildScreenshotImages : function(){
//        for( prop in this.mapScreenshots){
//            console.log(prop);
//            console.log(this.mapScreenshots[prop]);
//            /* 
//            iterate over each sub-array, and append each to the corresponding DOM ID element, Remove first... 
//            The data structure top level properties are the map name, and map to the path of the graphics for 
//            specified map. 
//            */
//            $('#'+prop).empty();
//            for(let a=0;a<this.mapScreenshots[prop].length;a++){
//                /* Now pass each image to the builder method: */
//                //console.log(this.mapScreenshots[prop][a],prop);
//                $('#'+prop).append(this.getImageDOM(this.mapScreenshots[prop][a],prop));
//            }
//        }
//    },

    /**
    Build simple DOM for image.
    The link is built to the respective github repo
     */
    getImageDOM : function(_url,repo){
        let _img = document.createElement("img");
        _img.setAttribute('src',_url);
        _img.setAttribute('alt','Random Doom map image');
        let _a = document.createElement("a");
        _a.setAttribute('href',this.buildRepoUrl(repo.repo));
        _a.setAttribute('title','Click to open repo ' + '\''+repo.nicename+'\'');
        _a.setAttribute('target','_blank');
        _a.appendChild(_img);
        return(_a);
    },

    getImageDOM_old : function(imgName, pathSuffix){
        console.log('getting image ' + imgName, pathSuffix);
        /** build the full URL - start with the defined base path */
        let _url = this.imagebase;
        console.log('base URL: ' + _url);
        if(pathSuffix){
                /** if we are passing a path part, add it on: */
                //_url = _url + pathSuffix + "/";

                _url = _url +this.imagesortedprefix  + pathSuffix+ "/" + imgName + this.imagesuffix;
                console.log('pathed URL: ' + _url);
        }
        else{
                _url = _url + imgName + this.imagesuffix;
        }


        console.log('full URL: ' + _url);
        let _img = document.createElement("img");
        _img.setAttribute('src',_url);
        _img.setAttribute('alt','Random Doom map image');
        let _a = document.createElement("a");
        _a.setAttribute('href',_url);
        _a.setAttribute('title','Click to view fullsize image');
        _a.setAttribute('target','_blank');
        _a.appendChild(_img);
        return(_a);
    },
    
    /**
     * Construct a common footer:
     * */
    buildFooter : function(){
        let _outer = document.createElement('div');
        _outer.setAttribute('class','pure-g footer');
        let _left = document.createElement('div');
        _left.setAttribute('class','pure-u-1-3');
        let _ul = document.createElement('ul');
        let _li1 = document.createElement('li');
        /* https://www.rapidtables.com/code/text/ascii/ascii-copyright.html */
        let _copy = document.createTextNode('\xA9 '+this.copyright+' smeghammer');
        let _li2 = document.createElement('li');
        let _a2 = document.createElement('a');
        _a2.setAttribute('target','_blank');
        _a2.setAttribute('href','https://www.github.com/smeghammer/');
        _a2.setAttribute('title','Smeghammer at Github');
        let _txt2 = document.createTextNode('Github');
        let _li3 = document.createElement('li');
        let _a3 = document.createElement('a');
        _a3.setAttribute('target','_blank');
        _a3.setAttribute('href','https://imotorhead.com');
        _a3.setAttribute('title','They played rock and roll');
        /* https://gist.github.com/phortx/4059848 */
        let _txt3 = document.createTextNode('Mot\u00f6rhead');
        let _right = document.createElement('div');
        _right.setAttribute('class','pure-u-1-3');
        let _img = document.createElement('img');
        _img.setAttribute('src','/images/smeghammer.gif');
        
        let _centre = document.createElement('div');
        _centre.setAttribute('class','pure-u-1-3 imgcentre');
        let _logo = document.createElement('img');
        _logo.setAttribute('src','/images/doomlogo.png');
        _logo.setAttribute('class','centre');
        _centre.appendChild(_logo);
        
        /* assemble DOM: */
        _li1.appendChild(_copy);
        _a2.appendChild(_txt2);
        _li2.appendChild(_a2);
        _a3.appendChild(_txt3);
        _li3.appendChild(_a3);
        _ul.appendChild(_li1);
        _ul.appendChild(_li2);
        _ul.appendChild(_li3);
        _left.appendChild(_ul);
        _right.appendChild(_img);
        _outer.appendChild(_left);
        _outer.appendChild(_centre);
        _outer.appendChild(_right);
        return(_outer);
    }
};

/**
load pages
 */
$(function(){
	engine.init();
});
















