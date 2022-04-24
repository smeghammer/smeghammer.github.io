/** 
TODO:
Split (at least arrange) into:
 - entry points
 - primary page handlers
 - page pplication build functions
 - generic DOM creation methods
    - consolidate?
 - data as separate include? 
   
 */

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
    
    copyright : 2022,
    imagebase : 'https://raw.githubusercontent.com/smeghammer/',
    downloadbase : 'https://github.com/smeghammer/smeghammer.github.io/blob/master/',
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
    
    /** START CD BROWSER FUNCTIONS */
    buildMapsBrowser : function(){
		$.getJSON('/data/cd_data.json',function(data){
            engine.buildCDMapsTopNav(data);	/* render magazines as top level tabs */
            /** this needs to be moved to trigger on clicking a top level item: */
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
			//console.log(item); 
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
                /* on click, hide ALL, and set visible the selected */
                $('#sausage > div.toplevelitems > div').removeClass('current');
                $(this).addClass('current');
                $('#sausage > div.topic').addClass('hidden');
                $('#'+$(this).attr('data-topic')).removeClass('hidden');
                /** now autoclick on the first subnav item: */
                $('#'+$(this).attr('data-topic')).find('ul > li:first-of-type').click();
                //engine.buildCDMapsListBrowser(data); /* render contents of sub-folders */
            });
        });
	},
	
	buildCDMapsListBrowser : function(data){
		//console.log(data);
		let _counter = 0;
		let _target = document.getElementById('sausage');
		//_target.innerHTML = "";
        for(let item in data){ 
			console.log(data[item]);
			let _topicWrapper = document.createElement('div');
            _topicWrapper.setAttribute('id',item.replace(/ /g,'').replace(/\//g,'||').replace(/#/g,'').replace(/\&/g,''));
            _topicWrapper.setAttribute('class','hidden topic');
			/* default to showing first topic */
            if(_counter === 0) $(_topicWrapper).removeClass('hidden');
            _counter++;
            let _l2navwrapper = document.createElement('ul');
            _l2navwrapper.setAttribute('class','l2nav');
            let _counter2 = 0;
            
            if( data[item]['directories'][0]['alphabetic_subdirectories']['used']){
				console.log('built transiemt directory structure based on mask');
				console.log(data[item]['directories'][0]['alphabetic_subdirectories']['pattern'])
				let letters = null;
				if(data[item]['directories'][0]['alphabetic_subdirectories']['pattern'].indexOf("{{x}}") !== -1 ){	/** lower case */
					letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				}
				if(data[item]['directories'][0]['alphabetic_subdirectories']['pattern'].indexOf("{{X}}") !== -1 ){	/** upper case */
					letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				}
				
				console.log(letters);
				/** build fake directories in memory.
				Also, need to build attribute data like so:
				
				<li 
					data-sectiondata="{
						"path":"FINALSTS/",
						"game":"Doom",
						"alphabetic_subdirectories":{
							"used":false,
							"pattern":null},
						"file_data":{
							"map_format":["wad"]}
						}" 
					data-itemcategory="FINALSTS||1" 
					data-datafile="/wads/pc-zone-10-1994/filedata.json" 
					data-dataindex="1">FINALSTS</li>
				
				
				 */
				for(let q=0; q<letters.length; q++){
//					console.log(data[item]['directories'][0]['alphabetic_subdirectories']['pattern'].replace(/\{\{x\}\}/i,letters[q]));
//					console.log(data[item]['directories'][0]);
					let _cssId = data[item]['directories'][0]['alphabetic_subdirectories']['pattern'].replace(/\{\{x\}\}/i,letters[q]) + q;
//					console.log(_cssId);
					let _l2naventry = document.createElement('li');
					/** for the A-Z function, I need to dynamically build the JSON to insert, mainly to build the path */
					let _sectionDataDynamic = {"alphabetic_subdirectories":"", "path":letters[q]+"/","game":data[item]['directories'][0]["game"],"file_data":data[item]['directories'][0]["file_data"]}
					_l2naventry.setAttribute('data-sectiondata',JSON.stringify(_sectionDataDynamic));
	                _l2naventry.setAttribute('data-itemcategory',_cssId);
	                _l2naventry.setAttribute('data-datafile',data[item]['root']+data[item].datafile);
	                _l2naventry.setAttribute('data-dataindex',q);
					let l2heading = letters[q].toString().toUpperCase();
					_l2naventry.appendChild(document.createTextNode(l2heading));
					_l2navwrapper.appendChild(_l2naventry);
				}
			}
            else{
	            /** loop over each item in the array. These are the equivalent of styles for R667  */
				for(let a=0;a<data[item]['directories'].length;a++){
					let _cssId = data[item]['directories'][a].path.replace(/ /g,'').replace(/\//g,'||').replace(/\&/g,'') + a;
					/* build l2 nav: */
	                let _l2naventry = document.createElement('li');
	                _l2naventry.setAttribute('data-sectiondata',JSON.stringify(data[item]['directories'][a]));
	                _l2naventry.setAttribute('data-itemcategory',_cssId);
	                _l2naventry.setAttribute('data-datafile',data[item]['root']+data[item].datafile);
	                _l2naventry.setAttribute('data-dataindex',a);
	                let l2heading = data[item]['directories'][a]['path'].split('/')[data[item]['directories'][a]['path'].split('/').length-2];
	                _l2naventry.appendChild(document.createTextNode(l2heading));
	                
	                /** here, we can start pulling out data to populate the panel. We need to clear it first... */
	                $('#generated_content_wrapper').find('h2').empty().append(data[item]['directories'][a]['game']);
	                if(_counter2 === 0) _l2naventry.setAttribute('class','reset current');
	                _l2navwrapper.appendChild(_l2naventry);
	                _counter2++;
				}
			}
			/** end */
            _topicWrapper.appendChild(_l2navwrapper);
            _target.appendChild(_topicWrapper);
            
            //and autoclick first tab. Need to do it here as - er - ajax...' 
           	$('#sausage > div > div:first-of-type').click();

            /** and append click handlers */
            $('#'+item.replace(/ /g,'').replace(/\//g,'||').replace(/#/g,'').replace(/\&/g,'')).find('ul > li').each(function(){
				/** Click handlers for second level map lists. This needs to call AJAX routine to load data file scraped from output of >ls > listing.dat */
				$(this).off('click').on('click',function(){

					$(this).parent().find('li').each(function(){
						$(this).removeClass('current');
					});
					$(this).addClass('current');
					dataForTab = JSON.parse($(this).attr('data-sectiondata'));
					
					/** The click handler here also needs to load and display the links to the WADs related to the current CD dump: */
					/** get the data: */
					let cssMapperForTab = $(this).attr('data-itemcategory');
					//console.log(cssMapperForTab);
					//let _path = $(this).attr('data-path');
					let datafilePath = $(this).attr('data-datafile');
					//console.log(datafilePath);
					let dataIndex = $(this).attr('data-dataindex');
					let dataMapper = dataForTab;
					dataMapper['datafilePath'] = datafilePath;
					console.log('calling AJAX to get data for tab');
					$.ajax({
						dataType:"json",
						contentType : "application/json",
						url: datafilePath,
						success : function(data){
							console.log(data);
							/** get a list of unique filenames without extensions. This will be used to generate each download ROW.
							The data mapper will determine the links that are on each row (WAD, ZIP etc.). If a text file is also specified
							a third will be added to generate an info overlay as per R667 browser:
							*/
							let fileRootNames = {};
							for(let a=0;a<data[dataIndex].files.length;a++){
								//console.log(data[dataIndex].files[a]);
								if(! fileRootNames[ data[dataIndex].files[a].split(/\./)[0] ] ){
									fileRootNames[data[dataIndex].files[a].split(/\./)[0]] = true;
								}
							} 
							//console.log(fileRootNames);
							/** I now need to parse out the relevant data from the CLI dump. This will be different depending on the details: */
							$('#generated_content_wrapper > div').empty().append(engine.buildCDFileDisplay(data[dataIndex],dataMapper,fileRootNames));
						},
						error : function(data,a,b){
							console.log(data,a,b);
						}
					});
				});
			});
		}

		/** we also want a DIV panel for the selected content: */
        let contentWrapper = document.createElement('div');
        let contentTitle = document.createElement('h2');
        let contentBodyWrapper = document.createElement('div');
        contentWrapper.setAttribute('id','generated_content_wrapper');
        contentWrapper.appendChild(contentTitle);
        contentWrapper.appendChild(contentBodyWrapper);
        _target.appendChild(contentWrapper);
	},
	
	/* Build links:
	*/
	buildCDFileDisplay : function(data,dataMapper,fileRootNames){
//		console.log(dataMapper, data,fileRootNames);
//		console.log("Use subdirectories: ",dataMapper['alphabetic_subdirectories'].used);
//		console.log("Map format: ",dataMapper['file_data'].map_format);
		/** need to build a structure where I can look for text files, if specified. 
		This will be an object of filenames WITHOUT extensions (I think) and determine 
		for each whether a text file exists...  If alphabetic, make nested lists*/
		let fileExtensionMapper = {};
		for(let x=0;x<data.files.length;x++){
			/** append if file extension is included in array */
			for(let z=0;z<dataMapper['file_data'].map_format.length;z++){
				if(dataMapper['file_data'].map_format[z] === data.files[x].split(/\./g)[1]){
					fileExtensionMapper[data.files[x]] = true;
				}
			}
			/** Assume text files, and check for ones matching the root filename: */
			//console.log(data.files[x]);
			if(data.files[x].split(/\./g)[1] === "txt" || data.files[x].split(/\./g)[1] === "TXT"){
				console.log('found text file...');
				fileExtensionMapper[data.files[x]] = true;
			}
//			if(data.files[x].split(/\./g)[1] === "TXT"){
//				fileExtensionMapper[data.files[x]] = true;
//			}
		};
		console.log('FILE EXXTENSION MAPPER: ',fileExtensionMapper);
		
		let _wrapper = document.createElement('ul');
		console.log(dataMapper);
		if(dataMapper['alphabetic_subdirectories'].used){
			console.log("render based on a-z...");
			/** build alphabetic subdirs if needed */
		}
		else{
			for( fileRootName in fileRootNames){
				/** for each root filename, check that an entry exists in the filename mapper for the extensions declared in the 
				datamapper. If so, make links as part of the same row. If text file is declared, check for that in the mapper and
				render a popup link: */
				//console.log(fileRootName);
				
				/** now loop over declared extension(s) to render, and build links to these (but 
				not the root filename!!) */
				
				let _li = document.createElement('li');
				/** test for files in the mapper that match each extension, and if found, build a link */
				for(let x=0;x<dataMapper['file_data'].map_format.length;x++){
					//console.log(dataMapper['file_data'].map_format[x], fileExtensionMapper[fileRootName + "." +dataMapper['file_data'].map_format[x]]);
					if(fileExtensionMapper[fileRootName + "." +dataMapper['file_data'].map_format[x]]){
						//console.log('render extension link for ',dataMapper['file_data'].map_format[x]);
						let _a2 = this.buildDownloadLink(data.path 
								+ fileRootName 
								+ "." 
								+dataMapper['file_data'].map_format[x], 
								fileRootName 
								+ "." 
								+dataMapper['file_data'].map_format[x], false,true);
						_li.appendChild( _a2 );
					}
				}
				//let _a = this.buildDownloadLink(data.path + fileRootName, fileRootName, true);
				//let _dl_icon = this.buildDownloadIcon(data.path + fileRootName, "Download "+fileRootName);
				//_li.appendChild( _dl_icon );
				//_li.appendChild( _a );
				/** if we need to generate a link to a text file, check it exists and make a link if so: */
				/** do we have a text file in the mapper that matches a known filename 
				Here I need to NOT rendre the text file link as a sibling item, but JUST as a 'more info' lnk on the same line
				*/
				if(fileExtensionMapper[fileRootName+".txt"]){
					console.log('tex file map found')
					_li.appendChild(this.buildDownloadLink(data.path + fileRootName+".txt", "More info", false));
				}if(fileExtensionMapper[fileRootName+".TXT"]){
					console.log('tex file map found')
					_li.appendChild(this.buildDownloadLink(data.path + fileRootName+".TXT", "More info", false));
				}
				_wrapper.appendChild( _li );
			}
		}
		return(_wrapper);
	},
	
	/** build a download link DOM element ( this needs to exhibit the same behaviour as the below function: )
	TODO: need to use the mapper to test for text file? Make something like:
	
	FILENAME [zip WAD]  - test file (if present)
	*/
	buildDownloadIcon : function(url,title){
		let _a = document.createElement('a');
		_a.setAttribute('href',url);
		_img = document.createElement('img');
		_img.setAttribute('title',title);
		_img.setAttribute('src','/images/dl-anim.gif');
		_img.setAttribute('class','dlicon');
		_a.appendChild(_img);
		return(_a);
	},
	
	/** build a download link DOM element */
	buildDownloadLink : function(url, linktext, relative, includeIcon){
		let _a = document.createElement('a');
		let prependBaseUrl = true;
		/** don't 'prepend if base url is found (this is crude, so may need to change this logic) */
		if(url.indexOf(this.thisrepo) ==! -1){
			prependBaseUrl = false;
		}
		/** if explicit 'relative' flag passed, also don't prepend' */
		if(relative && relative === true){
			prependBaseUrl = false;
		}
		/** if so determined, prepend this github repo base URL (not the mapped domain) */
		if(prependBaseUrl){
			url = this.thisrepo + url;
		}
		_a.setAttribute('href',url);
		if(includeIcon && includeIcon === true){
			_img = document.createElement('img');
			_img.setAttribute('title',linktext);
			_img.setAttribute('src','/images/dl-anim.gif');
			_img.setAttribute('class','dlicon');
			_a.appendChild(_img);
		}
		
		_a.appendChild(document.createTextNode(linktext));
		
		if(linktext === "More info"){
			$(_a).off('click').click(function(){
			            let newDiv = $(document.createElement('div')); 

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
                    })
		}
		
		return(_a);
	},
	
	/** FINISHED  CD BROWSER FUNCTIONS */
	
	
	
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















