let engine = {
    navdata : [
        {'linktext':'Home','url':'/', 'parenturl':null, 'pagekey':'0', 'childs':[
            {'linktext':'Maps & WADs','url':'/maps/', 'parenturl':'/', 'pagekey':'0.0', 'childs':[
                {'linktext':'A Nail in the Skin of the World','url':'/maps/anitsotw.htm', 'parenturl':'/maps/', 'pagekey':'0.0.0', 'childs':[],visible:true},
                {'linktext':'Belial\'s Ruin','url':'/maps/belials-ruin.htm', 'parenturl':'/maps/', 'pagekey':'0.0.1', 'childs':[],visible:true},
                {'linktext':'Cardinal Sin','url':'/maps/cardinal-sin.htm', 'parenturl':'/maps/', 'pagekey':'0.0.2', 'childs':[],visible:true},
                {'linktext':'Corporate Nightmare','url':'/maps/corporate-nightmare.htm', 'parenturl':'/maps/', 'pagekey':'0.0.3', 'childs':[],visible:true},
                {'linktext':'Crushdepth','url':'/maps/crushdepth.htm', 'parenturl':'/maps/', 'pagekey':'0.0.10', 'childs':[],visible:true},
                {'linktext':'Departure','url':'/maps/departure.htm', 'parenturl':'/maps/', 'pagekey':'0.0.4', 'childs':[],visible:true},
                {'linktext':'Fuck You, Escher!','url':'/maps/fuescher.htm', 'parenturl':'/maps/', 'pagekey':'0.0.5', 'childs':[],visible:true},
                {'linktext':'Hellbreach','url':'/maps/hellbreach.htm', 'parenturl':'/maps/', 'pagekey':'0.0.6', 'childs':[],visible:true},
                {'linktext':'Island Fortress','url':'/maps/islandfortress.htm', 'parenturl':'/maps/', 'pagekey':'0.0.7', 'childs':[],visible:true},
                {'linktext':'Rectilinia','url':'/maps/rectilinia.htm', 'parenturl':'/maps/', 'pagekey':'0.0.8', 'childs':[],visible:true},
                {'linktext':'Tubeworm','url':'/maps/tubeworm.htm', 'parenturl':'/maps/', 'pagekey':'0.0.9', 'childs':[],visible:true}
            ]},
            {'linktext':'Snippets','url':'/snippets/', 'parenturl':'/', 'pagekey':'0.1', 'childs':[
                {'linktext':'1 way glass','url':'/snippets/1wayglass.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.0', 'childs':[],visible:true},
//                {'linktext':'1 way glass','url':'/snippets/3dfloor.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.1', 'childs':[],visible:true},
                {'linktext':'3D floor','url':'/snippets/3dfloor.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.2', 'childs':[],visible:true},
                {'linktext':'ACS tests','url':'/snippets/acs_tests.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.3', 'childs':[],visible:true},
                {'linktext':'Bridge','url':'/snippets/bridge.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.4', 'childs':[],visible:true},
                {'linktext':'Custom sound','url':'/snippets/custom_sound_test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.5', 'childs':[],visible:true},
                {'linktext':'Custom sprite','url':'/snippets/custom_sprite.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.6', 'childs':[],visible:true},
                {'linktext':'Flamer Baron','url':'/snippets/flamerbaron.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.7', 'childs':[],visible:true},
                {'linktext':'Footsteps','url':'/snippets/footsteps.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.8', 'childs':[],visible:true},
                {'linktext':'Increment test','url':'/snippets/increment-test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.9', 'childs':[],visible:true},
                {'linktext':'Laddertest','url':'/snippets/laddertest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.26', 'childs':[],visible:true},
                {'linktext':'Nail test 1','url':'/snippets/nailtest1.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.10', 'childs':[],visible:true},
                {'linktext':'Nail test 2','url':'/snippets/nailtest2.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.11', 'childs':[],visible:true},
                {'linktext':'PK3 test','url':'/snippets/pk3test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.12', 'childs':[],visible:false},
                {'linktext':'Portal horizon issue','url':'/snippets/portalhorizonbug.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.13', 'childs':[],visible:false},
                {'linktext':'Portal test','url':'/snippets/portaltest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.14', 'childs':[],visible:false},
                {'linktext':'Random bits','url':'/snippets/random.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.15', 'childs':[],visible:false},
                {'linktext':'Randomized teleport',  'url':'/snippets/rndtele.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.18', 'childs':[],visible:false},
                {'linktext':'Remote kill',          'url':'/snippets/rekill.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.16', 'childs':[],visible:false},
                {'linktext':'RFB!',                 'url':'/snippets/rfb.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.17', 'childs':[],visible:false},
                {'linktext':'Script test','url':'/snippets/scripttest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.19', 'childs':[],visible:false},
                {'linktext':'Sky hack','url':'/snippets/skyhack.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.20', 'childs':[],visible:false},
                {'linktext':'Spawn test','url':'/snippets/spawntest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.21', 'childs':[],visible:false},
                {'linktext':'Stacked tests','url':'/snippets/stacktests.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.22', 'childs':[],visible:false},
                {'linktext':'Switch test','url':'/snippets/switchtest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.23', 'childs':[],visible:false},
                {'linktext':'Telepotal','url':'/snippets/teleportal.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.24', 'childs':[],visible:false},
                {'linktext':'Turret test','url':'/snippets/turrettest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.25', 'childs':[],visible:false}
            ]},  
            {'linktext':'Useful Links','url':'/links/', 'parenturl':'/', 'pagekey':'0.2', 'childs':[
                {'linktext':'R667 Repository','url':'/links/repository.htm', 'parenturl':'/links/', 'pagekey':'0.2.0', 'childs':[],visible:true}
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

            break;
            case "r667":
                this.buildRepoList();
            break;
            case "map":
                let imageContainer = $('div.contents > div:nth-of-type(2)');
                imageContainer.empty();
                //render images for specified map:
                for (let a=0;a<this.repolist.length;a++){
                    if(this.repolist[a]['pagekey'] === pagekey){
                        for(let b=0;b<this.repolist[a].imagecount;b++){
                            $(imageContainer).append(this.getImageDOM(this.buildImageUrl(this.repolist[a].repo,this.repolist[a].branch,b+1),this.repolist[a]));
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

    buildRepoList : function(){
        let _categories = {};
        $.getJSON('/data/r667output.json',function(data){
            /* data is FLAT! */
            /*first pass: make empty root level topic object stubs:*/
            for(let item in data){
                /* build a top-level list for tabs */
                if(!_categories[data[item]['topic']]){
                    _categories[data[item]['topic']] = {};
                }
            }

            //second pass: for each top level object entry, make second level section object stubs:
            let _toplevelcount = 0;
            for(topic in _categories){
                for(let item in data){
                    if(topic === data[item]['topic'] &&! _categories[topic][data[item]['section']]){
                        _categories[topic][data[item]['section']] = {};
                    }
                }
            }
            //third pass: append data to correct key:
            for(let item in data){
                _categories[ data[item]['topic'] ][data[item]['section']][item] = data[item];
            }
            
            /* build a responsive set of DIVs to act as top nav of repo items: */
            let _navrow = document.createElement('div');
            _navrow.setAttribute('class','pure-g toplevelitems');
            /* make nav data */
            for(let item in _categories){   
                _toplevelcount++;
                let _tab = document.createElement('div');
                _tab.setAttribute('data-topic',item.replace(/ /g,'').replace(/\//g,'').replace(/\&/g,''))
                let _p = document.createElement('p');
                _tab.setAttribute('class','pure-u-1 pure-u-md-1-4 pure-u-xl-3-24');   /* there are 8... */
                _p.appendChild(document.createTextNode(item));
                _tab.appendChild(_p);
                _navrow.appendChild(_tab);
            }

            /* now, _items can be used to generate DOM output: */
            $('#sausage').empty().append(_navrow);
            /* append handlers */
            let _counter = 0;
            $('#sausage > div.toplevelitems > div').each(function(){
                if(_counter === 0) $(this).addClass('current');
                _counter++;
                $(this).click(function(){
                    /* on click, hide ALL, and set visible the selected */
                    $('#sausage > div.toplevelitems > div').removeClass('current');
                    $(this).addClass('current');
                    $('#sausage > div.topic').addClass('hidden');
                    $('#'+$(this).attr('data-topic')).removeClass('hidden');
                });
            });
            _counter = 0;
            for(let topic in _categories){
                let _topicWrapper = document.createElement('div');
                _topicWrapper.setAttribute('id',topic.replace(/ /g,'').replace(/\//g,'').replace(/\&/g,''));
                _topicWrapper.setAttribute('class','hidden topic');
                if(_counter === 0) $(_topicWrapper).removeClass('hidden');
                _counter++;
                let _l2navwrapper = document.createElement('ul');
                _l2navwrapper.setAttribute('class','l2nav');
                let _counter2 = 0;
                for(let section in _categories[topic]){
                    
                    /* I need a unique flag so I can append the correct items to the correct category/section: */
                    let _cssId = section.replace(/ /g,'').replace(/\//g,'').replace(/\&/g,'')+'_'+topic.replace(/ /g,'').replace(/\//g,'').replace(/\&/g,'');
                    /* here I want to put the headings next to each other and toggle the content as per the main topics:TODO */
                    
                    /* build l2 nav: */
                    let _l2naventry = document.createElement('li');
                    _l2naventry.setAttribute('data-itemcategory',_cssId);
                    _l2naventry.appendChild(document.createTextNode(section));
                    
                    /* 
                     * class 'reset' is do I can ensure that on click of any I can 
                     * reset the hidden FIRST items. This nees to include the panels!!  */
                    if(_counter2 === 0) _l2naventry.setAttribute('class','reset current');

                    _l2navwrapper.appendChild(_l2naventry);
                    
                    /* append click handlers to l2 nav: */
                    $(_l2navwrapper).find('li').each(function(){
                        $(this).off('click').click(function(_that){
                            $(this).parent().find('li').each(function(){
                                /* unhighlight sibs: */
                                $(this).removeClass('current');
                            });
                            /* and highlight item clicked on: */
                            $(this).addClass('current');
                            
                            /* now work out the panel item to display: */
                            $(this).parent().parent().find('div').addClass('hidden');
                            $('#'+$(this).attr('data-itemcategory')).removeClass('hidden');
                        })
                    });
                    
                    let _sectionwrapper = document.createElement('div');
                    _sectionwrapper.setAttribute('id',_cssId);
                    /* hide each item section list (main panel) */
                    if(_counter2){
                        _sectionwrapper.setAttribute('class','hidden');
                    }
                    $(_sectionwrapper).append('<h3>'+section+'</h3>');
                    $(_sectionwrapper).append('<ul>');
                    $(_topicWrapper).append(_sectionwrapper);
                    
                    
                    let itemsWrapperDiv = document.createElement('div');
                    itemsWrapperDiv.setAttribute('class','pure-g');
                    let _left = document.createElement('div');
                    _left.setAttribute('class','pure-u-1 pure-u-')
                    $('#sausage').append(_topicWrapper);
                    for(let thing in _categories[topic][section]){
                        /* work out path */
                        let _path = thing.substr(0,1).toLowerCase();
                        if(parseInt(_path)){
                            _path = '_num'
                        }
//                        $('#sausage > div > ul#'+_cssId).append('\t<li><a href="https://github.com/smeghammer/r667_mirror/raw/master/' + _path + '/' + _categories[topic][section][thing].filename+'"    >'+thing+'</a></li>\n');
                        $('#sausage > div > div#'+_cssId+' > ul').append('\t<li><a href="https://github.com/smeghammer/r667_mirror/raw/master/' + _path + '/' + _categories[topic][section][thing].filename+'"    >'+thing+'</a></li>\n');
                    }
                    _counter2++;
                }
                console.log(_l2navwrapper);
                //https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-the-first-child
                _topicWrapper.insertBefore(_l2navwrapper,_topicWrapper.firstChild);
            }
        });
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
                navWrapper.appendChild(document.createElement('h2')).appendChild(document.createTextNode('Subnav'));
                for(let a=0;a<this.navdata[0].childs[l2Index].childs.length;a++){
                    if(this.navdata[0].childs[l2Index].childs[a].visible){
                         navWrapper.appendChild(this.buildLink(this.navdata[0].childs[l2Index].childs[a],false));
                    }
                   
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
            path = __path;
        }
        /* get l2 page */
        for(let a=0;a<this.navdata[0].childs.length;a++){
            if(path.join('.') === this.navdata[0].childs[a].pagekey){
                if($('h2.static')[0]){
                    console.log('h2.static');
                }
                else{
                    console.log('h2');
                    $('h2').empty().append(this.navdata[0].childs[a].linktext);
                }
            }
        }
         $('title').empty().append(pagedata.linktext);
         $('h1').empty().append(pagedata.linktext);
    },

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
        _a2.setAttribute('href','https://github.com/smeghammer/');
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
        _img.setAttribute('alt','Snaggletooth');
        
        let _centre = document.createElement('div');
        _centre.setAttribute('class','pure-u-1-3 imgcentre');
        let _logo = document.createElement('img');
        _logo.setAttribute('src','/images/doomlogo.png');
        _logo.setAttribute('class','centre');
        _logo.setAttribute('alt','DooM logo');
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
/*
* https://stackoverflow.com/questions/5223/length-of-a-javascript-object
* Extend Object:
* */
Object.size = function(obj) {
    var size = 0,
    key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};















