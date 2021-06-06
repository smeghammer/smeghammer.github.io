let engine = {
    copyright : 2021,
    /**
    Array of homepage image sources:

    hellbreach:1-9

    assume screenshots are numbered, ignore others:

     */
    
   // imagebase_old : 'https://github.com/smeghammer/doom_snippets/blob/master/screenshots/',	//the unsorted path
    imagebase : 'https://raw.githubusercontent.com/smeghammer/',
    //imagesortedprefix : 'sorted/',	//prefix to sorted paths
    imagesuffix : '?raw=true',
    
    repolist : [
        {'repo' : 'hellbreach','branch':'master','imagecount':12},
        {'repo' : 'fuescher','branch':'master','imagecount':30},
        {'repo' : 'crushdepth','branch':'master','imagecount':21},
        {'repo' : 'belials_ruin','branch':'master','imagecount':4},
        {'repo' : 'islandfortress','branch':'master','imagecount':29},
        {'repo' : 'rectilinia','branch':'master','imagecount':38},
        {'repo' : 'tubeworm','branch':'master','imagecount':19},
        {'repo' : 'departure','branch':'master','imagecount':59},
        {'repo' : 'CardinalSin','branch':'master','imagecount':27},
        {'repo' : 'anitsotw','branch':'master','imagecount':27},
        {'repo' : 'corporate-nightmare','branch':'master','imagecount':23}
    ],
    /** start stuff */
    init : function(){
        let page = $('body').attr('data-page');
        switch(page){
            case "home":
                /* and set an interval script, 15 seconds: */
                /*
                 * DO THIS:
                 * https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
                 **/

                let currRepoIndex = engine.getRandomRepoIndex();
                let currRepo = engine.repolist[currRepoIndex];
                let currImageIndex = engine.getRandomImageIndex(currRepoIndex);
                /* add random image initially */
                $('#splash').empty().append(engine.getImageDOM(engine.buildImageUrl(currRepo.repo, currRepo.branch,currImageIndex+1)));
                    
                setInterval(function(){
                    currRepoIndex = engine.getRandomRepoIndex();
                    currRepo = engine.repolist[currRepoIndex];
                    currImageIndex = engine.getRandomImageIndex(currRepoIndex);
                    $('#splash').empty().append(engine.getImageDOM(engine.buildImageUrl(currRepo.repo, currRepo.branch,currImageIndex+1)));
                },15000);
            break;
            case "maps":
                this.appendMapScreenshotHandlers();
                this.buildScreenshotImages();
            break;
        }
        /* and load footer */
        $('#footer').empty().append(this.buildFooter());
    },

    buildFooter : function(){
        let _outer = document.createElement('div');
        _outer.setAttribute('class','pure-g footer');
        let _left = document.createElement('div');
        _left.setAttribute('class','pure-u-1-2');
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
        _right.setAttribute('class','pure-u-1-2');
        let _img = document.createElement('img');
        _img.setAttribute('src','/images/smeghammer.gif');
        
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
        _outer.appendChild(_right);
        return(_outer);
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

    buildScreenshotImages : function(){
        for( prop in this.mapScreenshots){
            console.log(prop);
            console.log(this.mapScreenshots[prop]);
            /* 
            iterate over each sub-array, and append each to the corresponding DOM ID element, Remove first... 
            The data structure top level properties are the map name, and map to the path of the graphics for 
            specified map. 
            */
            $('#'+prop).empty();
            for(let a=0;a<this.mapScreenshots[prop].length;a++){
                /* Now pass each image to the builder method: */
                //console.log(this.mapScreenshots[prop][a],prop);
                $('#'+prop).append(this.getImageDOM(this.mapScreenshots[prop][a],prop));
            }
        }
    },

    /**
    Build simple DOM for image
     */
    getImageDOM : function(_url){
//        console.log('getting image ' + imgpath);
//        /** build the full URL - start with the defined base path */
//        let _url = this.imagebase;
//        console.log('base URL: ' + _url);
//        if(pathSuffix){
//                /** if we are passing a path part, add it on: */
//                //_url = _url + pathSuffix + "/";
//
//                _url = _url +this.imagesortedprefix  + pathSuffix+ "/" + imgpath + this.imagesuffix;
//                console.log('pathed URL: ' + _url);
//        }
//        else{
//                _url = _url + imgpath + this.imagesuffix;
//        }


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
    Build simple DOM for image
     */
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
    
    navdata : []
    
}

/**
load pages
 */
$(function(){
	engine.init();
});
















