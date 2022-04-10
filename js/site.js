let engine = {
    navdata : [
        {'linktext':'Home','url':'/', 'parenturl':null, 'pagekey':'0', 'childs':[
           {'linktext':'My WADs','url':'/maps/', 'parenturl':'/', 'pagekey':'0.0', 'childs':[
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
                {'linktext':'1 way glass',"repopath":"1wayglass",	"img":"6",		'url':'/snippets/1wayglass.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.0', 'childs':[],visible:true,"summary":"A method to create one way translucent glass using line portals VERY close together, line mirror and line translucency."},
                {'linktext':'3D floor',"repopath":"3d_floor",	"img":"1",			'url':'/snippets/3dfloor.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.2', 'childs':[],visible:true,"summary":"An early test of buildng a 3D floor"},
                {'linktext':'ACS tests',"repopath":"ACS_TESTS",			'url':'/snippets/acs_tests.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.3', 'childs':[],visible:true,"summary":"An early ACS test that triggers sequential platform lowering."},
                {'linktext':'Bridge',"repopath":"Bridge",		"img":"1",		'url':'/snippets/bridge.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.4', 'childs':[],visible:true,"summary":"A better 3D floor test of a simple bridge"},
                {'linktext':'Custom sound',"repopath":"custom_sound_test",			'url':'/snippets/custom_sound_test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.5', 'childs':[],visible:true,"summary":"First test of SNDINFO and adding a custom sound. "},
                {'linktext':'Custom sprite',"repopath":"custom_sprite",	"img":"2",		'url':'/snippets/custom_sprite.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.6', 'childs':[],visible:true,"summary":"A custom sprite test."},
                {'linktext':'Flamer Baron',	"repopath":"flamerbaron",	"img":"3",		'url':'/snippets/flamerbaron.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.7', 'childs':[],visible:true,"summary":"My first attempt of creating a new DECORATE monster."},
                {'linktext':'Footsteps',"repopath":"footsteps",			'url':'/snippets/footsteps.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.8', 'childs':[],visible:true,"summary":"Tryng to simulate footsteps on different surfaces."},
                {'linktext':'Increment test',"repopath":"increment-test",		'url':'/snippets/increment-test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.9', 'childs':[],visible:true,"summary":"More ACS tests, adding a count logic."},
                {'linktext':'Laddertest',"repopath":"laddertest",	"img":"1",			'url':'/snippets/laddertest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.26', 'childs':[],visible:true,"summary":"One solution to a veretical ladder"},
                {'linktext':'Nail test 1',"repopath":"nails1",	"img":"1",			'url':'/snippets/nailtest1.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.10', 'childs':[],visible:true,"summary":"ACS test of triggering a huge nail into flesh floor"},
                {'linktext':'Nail test 2',"repopath":"nails2",	"img":"1",			'url':'/snippets/nailtest2.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.11', 'childs':[],visible:true,"summary":"A better ACS test of triggering a huge nail into flesh floor"},
                {'linktext':'PK3 test',	"repopath":"pk3test",			'url':'/snippets/pk3test.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.12', 'childs':[],visible:false,"summary":"My first attempt at using PK3 namespacing rather than a flat .WWAD."},
                {'linktext':'Portal horizon issue',"repopath":"portal%20horizon%20bug",	'url':'/snippets/portalhorizonbug.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.13', 'childs':[],visible:false,"summary":"Testing weird clippig bug with portals.	"},
                {'linktext':'Portal tests',	"repopath":"portaltests",	"img":"1",		'url':'/snippets/portaltest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.14', 'childs':[],visible:true,"summary":"Example map using line and sector portals. "},
                {'linktext':'Random bits',	"repopath":"random",		'url':'/snippets/random.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.15', 'childs':[],visible:false,"summary":"Various map bits."},
                {'linktext':'Randomized teleport', "repopath":"randomised_teleport","img":"1",	 'url':'/snippets/rndtele.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.18', 'childs':[],visible:true,"summary":"ACS-scripted random teleport destinations"},
                {'linktext':'Remote kill',  "repopath":"remote_kill_test",        'url':'/snippets/rekill.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.16', 'childs':[],visible:true,"summary":"An experiment with killing monsters on another map. Uses some ACS logic and global variables."},
                {'linktext':'RFB!',    "repopath":"RFB",   "img":"1",          'url':'/snippets/rfb.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.17', 'childs':[],visible:true,"summary":"A very silly map that will trap you and kill you. Doesn't really do anythng, just kept it in because its silly."},
                {'linktext':'Script test',	"repopath":"script_test",		'url':'/snippets/scripttest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.19', 'childs':[],visible:false,"summary":""},
                {'linktext':'Sky hack',		"repopath":"skyhack",		'url':'/snippets/skyhack.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.20', 'childs':[],visible:false,"summary":""},
                {'linktext':'Spawn test',	"repopath":"spawntests",		'url':'/snippets/spawntest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.21', 'childs':[],visible:false,"summary":""},
                {'linktext':'Stacked tests',"repopath":"stacked",	"img":"1",		'url':'/snippets/stacktests.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.22', 'childs':[],visible:false,"summary":""},
                {'linktext':'Switch test',	"repopath":"switch",		'url':'/snippets/switchtest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.23', 'childs':[],visible:false,"summary":""},
                {'linktext':'Teleportal',	"repopath":"teleportal",		'url':'/snippets/teleportal.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.24', 'childs':[],visible:false,"summary":""},
                {'linktext':'Turret test',	"repopath":"turrettest",		'url':'/snippets/turrettest.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.25', 'childs':[],visible:false,"summary":""},
                {'linktext':'Teleport test',	"repopath":"teletest",		'url':'/snippets/xx.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.26', 'childs':[],visible:false,"summary":""},
                {'linktext':'Turret test',	"repopath":"turrettest",		'url':'/snippets/yy.htm', 'parenturl':'/snippets/', 'pagekey':'0.1.27', 'childs':[],visible:false,"summary":""}
            ]},
            {'linktext':'Howtos','url':'/howtos/', 'parenturl':'/', 'pagekey':'0.5', 'childs':[
            	{'linktext':'Eureka: custom things',	"img":"1",		'url':'/howtos/eureka.htm', 'parenturl':'/howtos/', 'pagekey':'0.5.0', 'childs':[],visible:true,"summary":"How to set up Eureka editor to use custom things and display them correctly in the editor environment."}
            ]},
            {'linktext':'R667 mirror','url':'/links/repository.htm', 'parenturl':'/links/', 'pagekey':'0.2.0', 'childs':[]},
            {'linktext':'IDGames','url':'/dwbrowser/', 'parenturl':'/dwbrowser/', 'pagekey':'0.4', 'childs':[]},  
            {'linktext':'Links','url':'/links/', 'parenturl':'/', 'pagekey':'0.2', 'childs':[
                {'linktext':'Old cover CD WADs','url':'/links/old-coverdisk-cds/', 'parenturl':'/links/', 'pagekey':'0.2.3', 'childs':[], visible:true},
                {'linktext':'R667 mirror','url':'/links/repository.htm', 'parenturl':'/links/', 'pagekey':'0.2.0', 'childs':[],visible:true},
                {'linktext':"Haruko Haruhara's Doom stuff",'url':'/links/harukoharuhara.htm', 'parenturl':'/links/', 'pagekey':'0.2.1', 'childs':[],visible:true},
                {'linktext':"Doom fonts",'url':'/links/doomfonts.htm', 'parenturl':'/links/', 'pagekey':'0.2.2', 'childs':[],visible:true}
            ]}
        ]},
    ],
    
    topnavWrapper : null,
    
    copyright : 2021,
    imagebase : 'https://raw.githubusercontent.com/smeghammer/',
    repobase : 'https://github.com/smeghammer/',
    thisrepo : null,
    imagesuffix : '?raw=true',
    repolist : [
        {'download':'https://github.com/smeghammer/hellbreach/blob/master/hellbrch.wad?raw=true',   'repo' : 'hellbreach',         'nicename':'Hellbreach',        'branch':'master','imagecount':12,'pagekey':'0.0.6',"summary":"Three maps (currently) and one secret map. My first crack at map building over lockdown...  Starts with a sort of techbase thing, followed by a large rocky outdoor type thing, and finally a big canyon featuring my first attempt at a 3D structure. The secret is a marble/lava/hell thing..." },
        {'download':'https://github.com/smeghammer/fuescher/blob/master/fuescher.wad?raw=true',   'repo' : 'fuescher',           'nicename':'Fuck You, Escher!', 'branch':'master','imagecount':30,'pagekey':'0.0.5',"summary":"A twisty, irrational mindfuck that could be a challenge as thngs may not lead to other things... A single map only."},
        {'download':'https://github.com/smeghammer/crushdepth/blob/master/crushdepth.wad?raw=true',   'repo' : 'crushdepth',         'nicename':'Crushdepth',        'branch':'master','imagecount':20,'pagekey':'0.0.10',"summary":"A big experiment with moving 3D floors and liquid. Quite a bit of experimentation here with various GZDoom features and ACS scripting"},
        {'download':'https://github.com/smeghammer/belials_ruin/blob/master/belials_ruin.wad?raw=true',  'repo' : 'belials_ruin',       'nicename':'Belial\'s Ruin',    'branch':'master','imagecount':4,'pagekey':'0.0.1',"summary":"One map. May, or may not, be inspired by Stonehenge... I tried to do a traditional arena type hing, with waves of monsters. A little bit of 3d floor stuff, and my first use of a Mechadon custom sky!"},
        {'download':'https://github.com/smeghammer/islandfortress/blob/master/ifortress.wad?raw=true',   'repo' : 'islandfortress',     'nicename':'Island Fortress',   'branch':'master','imagecount':29,'pagekey':'0.0.7',"summary":"One map. Infiltrate a big, heavily defended rocky island. Possibly inspired by that action film \"The Rock\". My first attempt a \"realistic\" map. Lots of hitscanners..."},
        {'download':'https://github.com/smeghammer/rectilinia/blob/main/rectilinia.wad?raw=true',   'repo' : 'rectilinia',         'nicename':'Rectilinia',        'branch':'master','imagecount':38,'pagekey':'0.0.8',"summary":"A little bit inspired by Minecraft - my kids just started playing and were obsessed with it... A four map miniwad ranging from cubical hills to chaingunner infested cityscapes."},
        {'download':'https://github.com/smeghammer/tubeworm/blob/master/tubeworm.wad?raw=true',   'repo' : 'tubeworm',           'nicename':'Tubeworm',          'branch':'master','imagecount':19,'pagekey':'0.0.9',"summary":"FIREBLU! Lots of it! A surreal journey through energy tubes of pure FIREBLU..." },
        {'download':'https://github.com/smeghammer/departure/blob/master/compiled/departure.pk3?raw=true',   'repo' : 'departure',          'nicename':'Departure',         'branch':'master','imagecount':59,'pagekey':'0.0.4',"summary":"Three Doom 1 maps, and a secret map. I used a PUSH action in this - it's so unusual I don't think anyone found it."},
        {'download':'https://github.com/smeghammer/CardinalSin/blob/master/compiled/cardinalsin.pk3?raw=true',  'repo' : 'CardinalSin',        'nicename':'Cardinal Sin',      'branch':'master','imagecount':27,'pagekey':'0.0.2',"summary":"A Heretic map! Fairly traditional build with a bit of 3D floor work and an experiment with breakable walls"},
        {'download':'https://github.com/smeghammer/anitsotw/blob/master/compiled/anitsotw.pk3?raw=true',  'repo' : 'anitsotw',           'nicename':'A Nail in the Skin of the World',  'branch':'master','imagecount':22,'pagekey':'0.0.0',"summary":"Pure Hellscape single map... Based around a concept of gigantic nails hammering into bloody flesh"},
        {'download':'https://github.com/smeghammer/corporate-nightmare/blob/master/compiled/corp-nm.pk3?raw=true',   'repo' : 'corporate-nightmare','nicename':'Corporate Nightmare',  'branch':'master','imagecount':23,'pagekey':'0.0.3',"summary":"A UAC corporate building in the middle of the desert. Lots of 3D fun, and one-way translucent glass that is mirrored on the other side." }
    ],
    
    /* R667 metadata wrapper */
    R667Categories : {},
    toplevelcount : 0,
    /** start stuff */
    init : function(){
        let pagetype = $('body').attr('data-page');
        let pagekey = $('body').attr('data-pagekey');
        let ytvid = $('body').attr('data-ytvid');
        
        this.thisrepo = this.repobase + 'smeghammer.github.io/raw/master';
        
        if(ytvid){
            this.resizeVid();
            //need size change callback:
            window.onresize = function(){
                engine.resizeVid();
            };
        }
        
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
            	$('#mapsummaries').empty().append(this.buildMapSummaries());
            break;
            case "r667":
                this.buildR667Browser();
            break;
            
            case "maplists":
            	this.buildMapsBrowser();
            break;
            
            case "map":
                let imageContainer = $('div.contents > div:nth-of-type(2)');
                imageContainer.empty();
                //render title, notes and images for specified map:
                for (let a=0;a<this.repolist.length;a++){
                    if(this.repolist[a]['pagekey'] === pagekey){
                        /* build download link */
                        console.log(this.repolist[a]);
                        let _dlh2 = document.createElement('h2');
                        _dlh2.appendChild(document.createTextNode("Maps & Wads - " + this.repolist[a].nicename));
                        let _dlh3 = document.createElement('h3');
                        let _txt = document.createElement('p');
                        _txt.appendChild(document.createTextNode(this.repolist[a].summary));
                        let _dl = document.createElement('a');
                        _dl.setAttribute('href',this.repolist[a].download);
                        _dl.setAttribute('title',this.repolist[a].nicename);
                        _dl.appendChild(document.createTextNode('Download'));
                        _dlh3.appendChild(_dl);
                        imageContainer.append(_dlh2);
                        imageContainer.append(_dlh3);
                        imageContainer.append(_txt);
                        /* render images: */
                        for(let b=0;b<this.repolist[a].imagecount;b++){
                            imageContainer.append(this.getImageDOM(this.buildImageUrl(this.repolist[a].repo,this.repolist[a].branch,b+1),this.repolist[a]));
                        }
                        break;
                    }
                }
            break;
            
            case "snippets":
            	$('#snippetsummaries').empty().append(this.buildSnippetSummaries());
            	break;
            
            case "snippet":
            	
            	break;
            	
            case "howtos":
            	$('#howtosummaries').empty().append(this.buildHowtoSummaries());
            	break;
        }
        /* build navigation */
        $('#menubar').empty().append(this.buildNav(true));
        $('#subnav').empty().append(this.buildNav(false));
        
        /* and load footer */
        $('#footer').empty().append(this.buildFooter());
    },
    
    resizeVid : function(){
        //first, work out the ratio:
        let _iframe = $('div.contents > div:nth-of-type(2) iframe');
        let _initW = _iframe.attr('width');
        let _initH = _iframe.attr('height');
        let _ratio = _initH / _initW;
        
        let iframe_width = $('div.contents > div:nth-of-type(2)').width();
        let iframe_height = iframe_width * _ratio;
        
        _iframe.removeAttr('width');
        _iframe.removeAttr('height');
        _iframe.attr({'width':iframe_width,'height':iframe_height});
    },
    
    getSnippetDataByKey : function(){
    	return(null);
    },
    
    getPageKey : function(){
    	return($('body').attr('data-pagekey'));
    },
    
    buildHowtoSummaries : function(){
    	let _wrapper = document.createElement('div');
    	_wrapper.setAttribute('class','pure-g');
    	let defaultImage = "default.png";
    	let section = this.getNavSectionByPagekey(this.getPageKey());
    	
    	for(let x=0;x<section.childs.length;x++){
    		if(section.childs[x].visible){
    			let _path = this.repobase + "snippets/tree/master/" + section.childs[x].repopath;
	    		let _summary = document.createElement('div');
	    		let _summarytext = document.createElement('p');
	    		let _title = document.createElement('h3');
	    		let _link = document.createElement('a');
	    		let _link2 = document.createElement('a');
	    		
	    		_summary.setAttribute('class','pure-u-1  pure-u-md-2-3');
				/* get repoindex: */
	    		let _key = this.getRepoIndexByPagekey(section.childs[x].pagekey);
	    		_link.setAttribute('title',section.childs[x]['summary']);
	    		_link.setAttribute('href',section.childs[x].url);
	    		
	    		_link2.setAttribute('title',section.childs[x]['summary']);
	    		_link2.setAttribute('href',section.childs[x].url);
	    		_link2.appendChild(document.createTextNode(section.childs[x].linktext));
	    		_summarytext.appendChild(document.createTextNode(section.childs[x].summary));
	    		_title.appendChild(_link2);
	    		_summary.appendChild(_title);
	    		_summary.appendChild(_summarytext);
	    		_wrapper.appendChild(_summary);
    		}
    	}
    	return(_wrapper);
    },
    
    /** render thumbs and summaries for maps */
    buildSnippetSummaries : function(){
    	let _wrapper = document.createElement('div');
    	_wrapper.setAttribute('class','pure-g');
    	let defaultImage = "default.png";
    	/* get the correct sub-section: */
    	let _currpagekey = this.getPageKey();
    	let section = this.getNavSectionByPagekey(_currpagekey);
    	
    	for(let x=0;x<section.childs.length;x++){
    		if(section.childs[x].visible){
    			let _path = this.repobase + "snippets/tree/master/" + section.childs[x].repopath;
	    		let _summary = document.createElement('div');
	    		let _summarytext = document.createElement('p');
	    		let _summaryimg = document.createElement('div');
	    		let _title = document.createElement('h3');
	    		let _thb =  document.createElement('img');
	    		let _link = document.createElement('a');
	    		let _link2 = document.createElement('a');
	    		
	    		_summary.setAttribute('class','pure-u-1  pure-u-md-2-3');
	    		_summaryimg.setAttribute('class','pure-u-1  pure-u-md-1-3');
	    		
	    		let _key = this.getRepoIndexByPagekey(section.childs[x].pagekey);
	    		let _img = null;
	    		if(section.childs[x].img)
	    			_img = this.imagebase + "snippets/master/" + section.childs[x].repopath + "/screenshots/"+ section.childs[x].img+".png";
			
	    		_link.setAttribute('title',section.childs[x]['summary']);
	    		_link.setAttribute('href',section.childs[x].url);
	    		
	    		if(_img){
		    		_thb.setAttribute('src',_img);
		    		_thb.setAttribute('class','thumbnail');
		    		_link.appendChild(_thb);
	    		}
	    		_link2.setAttribute('title',section.childs[x]['summary']);
	    		_link2.setAttribute('href',section.childs[x].url);
	    		_link2.appendChild(document.createTextNode(section.childs[x].linktext));
	    		_summarytext.appendChild(document.createTextNode(section.childs[x].summary));
	    		_summaryimg.appendChild(_link);
	    		_title.appendChild(_link2);
	    		_summary.appendChild(_title);
	    		_summary.appendChild(_summarytext);
	    		_wrapper.appendChild(_summary);
	    		_wrapper.appendChild(_summaryimg);
    		}
    	}
    	return(_wrapper);
    },
    
    /* 
     * render thumbs and summaries for maps 
     * */
    buildMapSummaries : function(){
    	let _wrapper = document.createElement('div');
    	_wrapper.setAttribute('class','pure-g');
    	this.getPageKey()
    	let section = this.getNavSectionByPagekey(this.getPageKey());
  	
    	for(let x=0;x<section.childs.length;x++){
    		let _summary = document.createElement('div');
    		let _summarytext = document.createElement('p');
    		let _summaryimg = document.createElement('div');
    		let _title = document.createElement('h3');
    		let _thb =  document.createElement('img');
    		let _link = document.createElement('a');
    		let _link2 = document.createElement('a');
    		
    		_summary.setAttribute('class','pure-u-1  pure-u-md-2-3');
    		_summaryimg.setAttribute('class','pure-u-1  pure-u-md-1-3');
    		
    		//get repoindex:
    		let _key = this.getRepoIndexByPagekey(section.childs[x].pagekey);
    		
    		_thb.setAttribute('src',this.buildImageUrl(this.repolist[_key].repo,this.repolist[_key].branch,2));
    		_thb.setAttribute('class','thumbnail');
    		
    		_link.setAttribute('title',this.repolist[_key]['summary']);
    		_link.setAttribute('href',section.childs[x].url);
    		_link.appendChild(_thb);
    		
    		_link2.setAttribute('title',this.repolist[_key]['summary']);
    		_link2.setAttribute('href',section.childs[x].url);
    		_link2.appendChild(document.createTextNode(this.repolist[_key]['nicename']));
    		
    		_summarytext.appendChild(document.createTextNode(this.repolist[_key]['summary']));
    		_summaryimg.appendChild(_link);
    		_title.appendChild(_link2);
    		
    		_summary.appendChild(_title);
    		_summary.appendChild(_summarytext);
    		
    		_wrapper.appendChild(_summary);
    		_wrapper.appendChild(_summaryimg);
    	}
    	return(_wrapper);
    },

    getRepoIndexByPagekey : function(pagekey){
    	let repoIndex = -1;
    	for (let a=0;a<this.repolist.length;a++){
    		if(this.repolist[a].pagekey === pagekey){
    			return(a);
    		}
    	}
    	return(repoIndex);
    },
    
    buildMapsBrowser : function(){
		$.getJSON('/data/cd_data.json',function(data){
            engine.buildCDMapsTopNav(data);	/* render magazines as top level tabs */
            engine.buildCDMapsListBrowser(data); /* render contents of sub-folders */
        });
	},
    
    /**
     * construct a DOM entry representing the top level (category)
     * */
    buildCDMapsTopNav : function(data){
		console.log(data);
		let _navrow = document.createElement('div');
        _navrow.setAttribute('class','pure-g toplevelitems');
        /** set nav tab elements */
        for(let item in data){  
			console.log(item); 
            //this.toplevelcount++;
            let _tab = document.createElement('div');
            _tab.setAttribute('data-topic',item.replace(/ /g,'').replace(/\//g,'').replace(/#/g,'').replace(/\&/g,''))
            let _p = document.createElement('p');
            _tab.setAttribute('class','pure-u-1 pure-u-md-1-4 pure-u-xl-3-24');   /* there are 8... */
            _p.appendChild(document.createTextNode(item));
            _tab.appendChild(_p);
            _navrow.appendChild(_tab);
        }
        
        /* now, _items can be used to generate DOM output: */
        $('#sausage').empty().append(_navrow);
        
        /* append click handlers */
        let _counter = 0;
        $('#sausage > div.toplevelitems > div').each(function(){
            if(_counter === 0) $(this).addClass('current');
            _counter++;
            $(this).click(function(){
				console.log('clikkin on ',$(this).attr('data-topic'));
                /* on click, hide ALL, and set visible the selected */
                $('#sausage > div.toplevelitems > div').removeClass('current');
                $(this).addClass('current');
                $('#sausage > div.topic').addClass('hidden');
                $('#'+$(this).attr('data-topic')).removeClass('hidden');
            });
        });
        
	},
	
	/**
	A CD data set is defined like so:
	{
		'cd name':[
			{
				"path":"/wads/complete_gamer_9/maps/",
				"datafile":"files.dat",
				"game":"Half Life",
				"alphabetic_subdirectories":{
					"used":false,
					"pattern":null
				},
				"file_data":{
					"map_format":"bsp",
					"text_files":true
				}
		}
			},
			{},
			...
		]
		
	}
	
	It defines the filesystem path in which the files are stored, and some metadata about how to display.
	It assumes there is a text file of the directory listing, as a data source, from which the download links 
	will be made
	*/
	buildCDMapsListBrowser : function(data){
		let _counter = 0;
		let _target = document.getElementById('sausage');
        for(let item in data){ 
			//console.log(item);
			let _topicWrapper = document.createElement('div');
            _topicWrapper.setAttribute('id',item.replace(/ /g,'').replace(/\//g,'||').replace(/#/g,'').replace(/\&/g,''));
            _topicWrapper.setAttribute('class','hidden topic');
			/* default to showing first topic */
            if(_counter === 0) $(_topicWrapper).removeClass('hidden');
            _counter++;
            let _l2navwrapper = document.createElement('ul');
            _l2navwrapper.setAttribute('class','l2nav');
            let _counter2 = 0;
            
            /** loop over each item in the array. These are the equivalent of styles for R667  */
			for(let a=0;a<data[item].length;a++){
				let _cssId = data[item][a].path.replace(/ /g,'').replace(/\//g,'||').replace(/\&/g,'') + a;
		//		console.log(data[item][a]);
				/* build l2 nav: */
                let _l2naventry = document.createElement('li');
                _l2naventry.setAttribute('data-itemcategory',_cssId);
                _l2naventry.setAttribute('data-datafile',data[item][a].datafile);
                _l2naventry.setAttribute('data-path',data[item][a].path);
                _l2naventry.setAttribute('data-alphabetic-subdirectories',JSON.stringify(data[item][a]['alphabetic_subdirectories']));
                _l2naventry.setAttribute('data-file_data',JSON.stringify(data[item][a].file_data));
        //        console.log(JSON.stringify(data[item][a]['alphabetic_subdirectories']));
                _l2naventry.appendChild(document.createTextNode(data[item][a]['game']));
                /** here, we can start pulling out data to populate the panel. We need to clear it first... */
                console.log($('#generated_content_wrapper'));
                $('#generated_content_wrapper').find('h2').empty().append(data[item][a]['game']);
                if(_counter2 === 0) _l2naventry.setAttribute('class','reset current');
        //        console.log(_l2navwrapper);
                _l2navwrapper.appendChild(_l2naventry);
                _counter2++;
			}
			/** end */
        //    console.log(_topicWrapper);
            _topicWrapper.appendChild(_l2navwrapper);
            _target.appendChild(_topicWrapper);

            /** and append click handlers */
            console.log('#'+item.replace(/ /g,'').replace(/\//g,'||').replace(/#/g,'').replace(/\&/g,''));
            $('#'+item.replace(/ /g,'').replace(/\//g,'||').replace(/#/g,'').replace(/\&/g,'')).find('ul > li').each(function(){
				/**
				Click handlers for second level map lists.
				This needs to call AJAX routine to load data file
				scraped from output of >ls > listing.dat 
				 */
				$(this).off('click').on('click',function(){
					console.log('clikkin2');
					$(this).parent().find('li').each(function(){
						/** remove highlight class from all... */
						$(this).removeClass('current');
					});
					/** and hightlight self */
					$(this).addClass('current');
					
					/** The click handler here also needs to load and display the links to the WADs related to the current
					CD dump: */
					/** get the data: */
					let _data = $(this).attr('data-itemcategory');
					//console.log(_data);
					let _path = $(this).attr('data-path');
					let _datafile = $(this).attr('data-datafile');
					//console.log(_path,_datafile);
					
					let _dataMapper = {
						'subdirectories':JSON.parse($(this).attr('data-alphabetic-subdirectories')),
						'file_data':JSON.parse($(this).attr('data-file_data')),
						'path':$(this).attr('data-path')
						};
					console.log( _path+_datafile);
					$.ajax({
						dataType:"text",
						url: _path+_datafile,
						success : function(data){
							let linksWrapper = document.createElement('ul');
							let linkData = [];
							/** 
							this comes from outer block and is the format we are expecting 
							(.zips, .wad + .txt, and whether there are A-Z subfolders 
							[format TBD].)
							*/
							console.log(_dataMapper);
							/** de-serialise the data: */
							let workingData = data.split(/\n/);
							let activeRowCounter = -1;
							/** A file listing may have > 1 entry for each filename (e.g. map plus text file). Use this mapper to 
							capture these: */
							let duplicateMapper = {};
							for(let a=0;a<workingData.length;a++){
								
								/** detect the start of the files output */
								if(workingData[a].charAt(0,1)==='-'){
									
									if(activeRowCounter>=0){
										/** lines are a constant length, so trim off trailing whitespace: */
										let trimmedDataRow = workingData[a].replace(/\s+$/,'');
										trimmedDataRow = trimmedDataRow.substr(trimmedDataRow.lastIndexOf(' ')+1,trimmedDataRow.length);
										
										/** key will be filename without extension 
										I want to make something like:
										{'filename_key',_dataMapper } */
										let fName = trimmedDataRow.substr(0,trimmedDataRow.lastIndexOf('.'));
										if(duplicateMapper[fName]){
											duplicateMapper[fName]++;
										}
										else{
											duplicateMapper[fName] = 1;
										}

										//linkData[trimmedDataRow.substr(0,trimmedDataRow.lastIndexOf('.'))] = _dataMapper;
//										linksWrapper.appendChild(engine.buildListElement(engine.buildDownloadLink(_dataMapper.path + fName + '.' + _dataMapper.file_data.map_format,fName)));
									}
									activeRowCounter++;
								}
							}
							/** one we have the mapper (assuming one id a .txt file - TODO: Sanitise data!) generate the download 
							and, optionally, the textfile link/popup (TBD). */
							for(thing in duplicateMapper){
								console.log(thing)
								if(duplicateMapper[thing] === 1){
									/** build download link only */
									linksWrapper.appendChild(engine.buildListElement(engine.buildDownloadLink(_dataMapper.path + thing + '.' + _dataMapper.file_data.map_format,thing)));

								}
								if(duplicateMapper[thing] === 2){
									/** build download link and text file link/display */
								}
							}
							console.log(duplicateMapper);
							console.log(linkData);
							/** I now need to parse out the relevant data from the CLI dump. This
							will be different depending on the details: */
							$('#generated_content_wrapper > div').empty().append(linksWrapper);
							//$('#generated_content_wrapper > div').empty().append("<pre>"+data+"</pre>")
						}
					});
				});
			});
			console.log('end')
		}
		console.log('rendering wrapper for selected content');
		/** we also want a DIV panel for the selected content: */
        let contentWrapper = document.createElement('div');
        let contentTitle = document.createElement('h2');
        let contentBodyWrapper = document.createElement('div');
        contentWrapper.setAttribute('id','generated_content_wrapper');
        contentWrapper.appendChild(contentTitle);
        contentWrapper.appendChild(contentBodyWrapper);
        _target.appendChild(contentWrapper);
	},
	
	/** build a download link DOM element */
	buildDownloadLink : function(url, linktext){
		let _a = document.createElement('a');
		console.log(url);
		if(url.indexOf(this.thisrepo) === -1){
			console.log('prepending URL...',this.thisrepo);
			url = this.thisrepo + url;
		}
		_a.setAttribute('href',url);
		_a.appendChild(document.createTextNode(linktext));
		return(_a);
	},
	
	/** build a list item, with optional DOM content */
	buildListElement : function(DOMContents){
		let _li = document.createElement('li');
		if(DOMContents){
			_li.appendChild(DOMContents);
		}
		return(_li);
	},
    
    buildR667Browser : function(){
        $.getJSON('/data/r667output.json',function(data){
            engine.buildR667Data(data);
            engine.buildR667TopNav();
            engine.buildR667ThingBrowser();
        });
    },
    
    /**
     * construct a hierarchical data object from the flat structure as obtained form R667 site:
     * */
    buildR667Data : function(data){
        /* data is FLAT! */
        /*first pass: make empty root level topic object stubs:*/
        for(let item in data){
            /* build a top-level list for tabs */
            if(!this.R667Categories[data[item]['topic']]){
                this.R667Categories[data[item]['topic']] = {};
            }
        }

        //second pass: for each top level object entry, make second level section object stubs:
        for(topic in this.R667Categories){
            for(let item in data){
                if(topic === data[item]['topic'] &&! this.R667Categories[topic][data[item]['section']]){
                    this.R667Categories[topic][data[item]['section']] = {};
                }
            }
        }
        //third pass: append data to correct key:
        for(let item in data){
            this.R667Categories[ data[item]['topic'] ][data[item]['section']][item] = data[item];
            /* also, explicitly as name as a property: */
            this.R667Categories[ data[item]['topic'] ][data[item]['section']][item].name = item;
        }
    },
    
    /**
     * construct a DOM entry representing the top level (category)
     * */
    buildR667TopNav : function(){
        /* build a responsive set of DIVs to act as top nav of repo items: */
        let _navrow = document.createElement('div');
        _navrow.setAttribute('class','pure-g toplevelitems');
        /* make nav data */
        for(let item in engine.R667Categories){   
            this.toplevelcount++;
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
        
        /* append click handlers */
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
    },
    
    /**
     * build the R667 browser nav level 2. There's a bit of buggering about due to the 
     * way I built it originally so probably not the most efficient...
     * */
    buildR667ThingBrowser : function(){
        _counter = 0;
        for(let topic in engine.R667Categories){
            let _topicWrapper = document.createElement('div');
            _topicWrapper.setAttribute('id',topic.replace(/ /g,'').replace(/\//g,'').replace(/\&/g,''));
            _topicWrapper.setAttribute('class','hidden topic');

            /* default to showing first topic */
            if(_counter === 0) $(_topicWrapper).removeClass('hidden');
            _counter++;
            let _l2navwrapper = document.createElement('ul');
            _l2navwrapper.setAttribute('class','l2nav');
            let _counter2 = 0;
            for(let section in engine.R667Categories[topic]){

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
                    /* click hander logic to show/hide as clicking through. Clicked items will remain in each category until page is reloaded */
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
                
                /* build the panel to contain the heading and the item list for selected category.
                 * (this could be a function call here?) */
                let _sectionwrapper = document.createElement('div');
                _sectionwrapper.setAttribute('id',_cssId);
                /* hide each item section list (main panel) */
                if(_counter2){
                    _sectionwrapper.setAttribute('class','hidden');
                }
                $(_sectionwrapper).append('<h3>'+section+'</h3>');
                $(_sectionwrapper).append('<ul>');

                let _block = document.createElement('div');
                _block.setAttribute('class','pure-q');
                let _itemcol = document.createElement('div');
                _itemcol.setAttribute('div','pure-u-1-3');
                let _ul = document.createElement('ul');
                _itemcol.appendChild(_ul);
                let _infocol = document.createElement('div');
                _infocol.setAttribute('div','pure-u-2-3');
                _block.appendChild(_itemcol);
                _block.appendChild(_infocol);
                _sectionwrapper.appendChild(_block)

                $(_topicWrapper).append(_sectionwrapper);

                let itemsWrapperDiv = document.createElement('div');
                itemsWrapperDiv.setAttribute('class','pure-g');
                let _left = document.createElement('div');
                _left.setAttribute('class','pure-u-1 pure-u-')
                $('#sausage').append(_topicWrapper);
                for(let thing in engine.R667Categories[topic][section]){
                    /* work out path */
                    let _path = thing.substr(0,1).toLowerCase();
                    if(parseInt(_path)){
                        _path = '_num'
                    }
                    /* build download entries */
                    let _li = document.createElement('li');
                    let _crds = "";
                    if(engine.R667Categories[topic][section][thing]['credits']['entries']){
                        /* https://www.geeksforgeeks.org/how-to-get-the-first-key-name-of-a-javascript-object/ - ugh!!! */
                        /* root credit. Occasionally the scrape fails to pick up details (M16)... */
                        for(let _count = 0;_count < engine.R667Categories[topic][section][thing]['credits']['entries'].length; _count++){
                            for(let thing2 in engine.R667Categories[topic][section][thing]['credits']['entries'][_count]){
                                if(thing2.toLowerCase().includes(('Submitted').toLowerCase())){    /* ES6 - tidy up entries - colon is sometimes not there... */
                                    _crds = thing2 + " " + engine.R667Categories[topic][section][thing]['credits']['entries'][_count][thing2];
                                }
                            }
                        }
                    }
                    let _credit= document.createElement('span');
                    _credit.setAttribute('class','inline_credit');
                    _credit.appendChild(document.createTextNode(_crds));
                    let _downloadicon = document.createElement('img');
                    _downloadicon.setAttribute('src','/images/dl-anim.gif');
                    _downloadicon.setAttribute('class','dlicon');
                    let _a = document.createElement('a');
                    _a.setAttribute('href', 'https://github.com/smeghammer/r667_mirror/raw/master/' + _path + '/' + engine.R667Categories[topic][section][thing].filename);
                    _a.setAttribute('title','download item "'+ thing +"'")
                    _a.appendChild(_downloadicon);
                    let _a2 = document.createElement('a');
                    _a2.setAttribute('href','#');
                    _a2.setAttribute('class','infolink');
                    _a2.setAttribute('title','Show info about "' + thing + '"');
                    _a2.setAttribute('data-thingname',thing);
                    _a2.appendChild(document.createTextNode(thing));
                    
                    $(_a2).off('click').click(function(){
                        /* * https://stackoverflow.com/questions/3423842/jquery-dialog-with-dynamic-content * */
                        let currentThing = engine.R667Categories[topic][section][$(this).attr('data-thingname')];
                        let _path = currentThing['filename'].substr(0,1).toLowerCase();
                        if(parseInt(_path)){
                            _path = '_num'
                        }

                        let imgUrl = 'https://raw.githubusercontent.com/smeghammer/smeghammer.github.io/master/images/items/' + _path +'/'+ currentThing['filename'].split(/\./)[0]+".png";
                        /* if it is a sound-effect, there is no associated graphic - therefore use  
                         * 'https://raw.githubusercontent.com/smeghammer/smeghammer.github.io/master/images/items/sound-effect.jpg
                         * */
                        if(currentThing['topic'].toUpperCase() ===  'SOUND FACTORY'){
                            imgUrl = 'https://raw.githubusercontent.com/smeghammer/smeghammer.github.io/master/images/items/sound-wave-icon.png';
                        }
                        
                        let _imgelem = document.createElement('img');
                        _imgelem.setAttribute('src',imgUrl);
                        if(currentThing['topic'].toUpperCase() ===  'SOUND FACTORY'){
                            _imgelem.setAttribute('class','soundwave_padding');
                        }
                        let newDiv = $(document.createElement('div')); 
                        newDiv.attr({'title':currentThing.name});
                        newDiv.append(_imgelem);
                        /* build info */
                        let _h3info = document.createElement('h3');
                        _h3info.appendChild(document.createTextNode('Info'));
                        newDiv.append(_h3info);
                        
                        for(let a=0;a<currentThing.info.entries.length;a++){
                            for(let entry in currentThing.info.entries[a]){
                                if(entry && currentThing.info.entries[a][entry]){   /* sometimes empty due to scrape error */
                                    let _infoitem=document.createElement('div');
                                    let _infotitle=document.createElement('span');
                                    _infotitle.setAttribute('class','hilite');
                                    let _infoval=document.createTextNode(entry);
                                    _infotitle.appendChild(_infoval)
                                    _infoitem.appendChild(_infotitle);
                                    _infoitem.appendChild(document.createTextNode(currentThing.info.entries[a][entry]));
                                    newDiv.append(_infoitem);
                                }
                            }
                        }
                        
                        let _h3credits = document.createElement('h3');
                        _h3credits.appendChild(document.createTextNode('Credits'));
                        newDiv.append(_h3credits);
                        
                        for(let a=0;a<currentThing.credits.entries.length;a++){
                            for(let entry in currentThing.credits.entries[a]){
                                if(entry && currentThing.credits.entries[a][entry]){   /* sometimes empty due to scrape error */
                                    let _credititem=document.createElement('div');
                                    let _credittitle=document.createElement('span');
                                    _credittitle.setAttribute('class','hilite');
                                    let _creditval=document.createTextNode(entry);
                                    _credittitle.appendChild(_creditval)
                                    _credititem.appendChild(_credittitle);
                                    _credititem.appendChild(document.createTextNode(currentThing.credits.entries[a][entry]));
                                    newDiv.append(_credititem);
                                }
                            }
                        }
                        
                        /* build credits */
                        newDiv.dialog({
                            modal: true,
                            closeText: ''
                        });
                        
                        return(false);
                    });
                    _li.appendChild(_a);
                    _li.appendChild(_a2);
                    _li.appendChild(_credit);
                    $('#sausage > div > div#'+_cssId+' > ul').append(_li);
                }
                _counter2++;
            }
            /* https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-the-first-child */
            _topicWrapper.insertBefore(_l2navwrapper,_topicWrapper.firstChild);
        }
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
     * need to build: 
     * https://raw.githubusercontent.com/smeghammer/CardinalSin/master/screenshots/10.png
     *
     * 'https://raw.githubusercontent.com/smeghammer' + reponame + '/' + branchname + '/screenshots/' + imagenum + '.png'
    * */
    buildImageUrl : function(reponame,branch,imagenum){
        return(this.imagebase + reponame + '/' + branch + '/screenshots/' + imagenum + '.png');
    },
    
    buildRepoUrl : function(reponame){
        return(this.repobase + reponame + '/');
    },
    
    /**
     * build top horizontal menu from l0 (index) and l1. Ensure that l1 is highlighted if in a child of that entry.
     * set data-page to key to object (self/parent IDs?)
     * */
    buildNav : function(main){
        let navWrapper = document.createElement('ul');
        navWrapper.setAttribute('class','pure-menu-list'); 
        let _currpagekey = this.getPageKey();
        
        /* primary navigation */
        if(main){
            /* pull out correct data from page index data attribute */
            let _home = this.buildLink(this.navdata[0])
            navWrapper.appendChild(_home);
            
            /* self is a span, not a link ancestor is link and bold. work out based on data-pagekey. This is a stringified array map */
            for(let a=0;a<this.navdata[0].childs.length;a++){
                navWrapper.appendChild(this.buildLink(this.navdata[0].childs[a],main));
            }
        }
        /* second level navigation */
        else{
            /* where are we? */
        	let _navKey = _currpagekey;
            if(_currpagekey.split('.').length > 1){
            	let level = 2;
            	if(_currpagekey.split('.').length > 2){
            		level = 3;
            		_navKey = _currpagekey.split('.')[0]+"."+_currpagekey.split('.')[1];
            	}
            	
            	/* now get the childs */
            	let section = this.getNavSectionByPagekey(_navKey);
                
                for(let a=0;a<section.childs.length;a++){
                    if(section.childs[a].visible){
                         navWrapper.appendChild(this.buildLink(section.childs[a],false));
                    }
                }
            }
        }
        return(navWrapper);
    },
    
    /** get current nav subsection */
    getNavSectionByPagekey : function(pagekey){
    	for(let a=0;a<this.navdata[0].childs.length;a++){
    		if(this.navdata[0].childs[a].pagekey === pagekey){
    			return(this.navdata[0].childs[a]);
    		}
    	}
    	return(false);
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
                	let _h2 = this.navdata[0].childs[a].linktext;
                    if(_path.length>2){
                    	_h2 += " - " +  pagedata.linktext
                    }
                    $('h2').empty().append(_h2);
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
        _img.setAttribute('src','/images/smeghammer.png');
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















