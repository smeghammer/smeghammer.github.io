let engine = {
	
	/**
	Array of homepage image sources:
	 */
	
	splashscreen : [
		"Screenshot_Doom_20200523_223655.png",
		"Screenshot%20from%202020-07-25%2008-25-00.png",
		"Screenshot%20from%202020-07-24%2020-41-02.png",
		"slope.png",
		"Screenshot%20from%202020-07-24%2020-38-07.png",
		"Screenshot%20from%202020-07-12%2011-26-40.png",
		"Screenshot%20from%202020-07-05%2010-07-28.png",
		"Screenshot%20from%202020-06-14%2017-01-05.png"
	],
	
	imagebase : 'https://github.com/sjewitt/doom_snippets/blob/master/screenshots/',	//the unsorted path
	imagesortedprefix : 'sorted/',	//prefix to sorted paths
	imagesuffix : '?raw=true',
	mapScreenshots : {
		breach_containment : [
			//'breachcontainment2020-04-14 17-11-30.png',
			//'breachcontainment2020-04-15 09-35-25.png',
			//'breachcontainment2020-04-15 09-36-13.png',
			'breach_containment_2020-05-11 10-57-06.png',
			'breach_containment_2020-05-11 10-57-15.png',
			//'breach_containment_2020-05-19 09-59-32.png',
			//'breach_containment_2020-05-19 10-00-54.png',
			//'breach_containment_2020-05-19 10-01-27.png',
			//'breachcontainment2020-06-13 13-04-01.png',
			//'breachcontainment2020-06-13 13-04-16.png',
			//'breachcontainment2020-06-13 13-04-33.png',
			//'breachcontainment2020-06-13 13-04-54.png',
			//'breachcontainment2020-06-13 13-09-17.png',
			'breachcontainment_21.png',
			'breach_containment3.png',
			'breach_containment4.png',
			'breach_containmentbreach_containment.png'
		],
		breach_scars :[
			//'breach_scars_2020-04-29 10-08-53.png',
			//'breach_scars_2020-04-29 10-08-59.png',
			//'breach_scars_2020-05-11 10-59-14.png',
			//'breach_scars_2020-05-11 11-00-17.png',
			'breach_scars_20200523_223655.png',
			'brchscrs20200806_115054.png',
			'brchscrs20200806_115132.png',
			'brchscrs20200806_115207.png',
			'brchscrs20200806_115228.png',
			'brchscrs20200806_115342.png',
			'brchscrs20200806_115352.png',
			'brchscrs20200806_115407.png'
		],
		
		the_gate : [
			//'thegate2020-05-11 17-05-57.png',
			'thegate2020-06-01 10-56-54.png',
			'thegate2020-05-20 17-32-06.png',
			//'thegate2020-06-01 11-55-51.png',
			'thegate2020-05-23 12-55-24.png',
			//'thegate2020-06-01 12-11-23.png',
			'thegate2020-05-23 12-59-44.png',
			//'thegate2020-06-01 12-11-43.png',
			'thegate_20200523_225015 (1).png',
			//'thegate2020-06-01 17-34-32.png',
			 'thegate20200523_225107.png',
			//'thegate2020-06-01 17-36-27.png',
			 'thegate_20200523_225210.png',
			//'thegate2020-06-01 17-38-53.png',
			 'thegate_20200523_225249.png',
			//'thegate2020-06-03 15-11-55.png',
			'thegate20200523_225307.png',
			//'thegate2020-06-03 15-16-16.png',
			//'thegate2020-05-25 09-55-35.png',
			'thegate2020-06-13 13-50-28.png',
			'thegate2020-05-25 10-17-14.png',
			'thegate2020-06-13 13-52-56.png',
			//'thegate2020-05-31 09-05-02.png',
			'thegate2020-06-13 13-53-11.png',
			//'thegate2020-05-31 09-07-00.png',
			'thegate2020-06-13 13-53-27.png',
			'thegate2020-06-01 10-56-44.png',
			'thegate2020-06-13 13-53-59.png'
		],
		
		'belials_ruin':[
			'Screenshot_Doom_20200806_172609.png',
			'Screenshot_Doom_20200806_172625.png',
			'Screenshot_Doom_20200806_172729.png',
			'Screenshot_Doom_20200806_172845.png',
			'Screenshot_Doom_20200806_172945.png'
		]
	},
	
	/**
	start stuff
	*/
	init : function(){
		let page = $('body').attr('data-page');
		switch(page){
			case "home":
				$('#splash').empty().append(this.getImageDOM(this.splashscreen[this.splashImageIndex()]));
			
			break;
			case "maps":
				this.appendMapScreenshotHandlers();
				
				this.buildScreenshotImages();
			break;
		}
	},
	/**
	See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	 */
	splashImageIndex : function(){
		return Math.floor(Math.random() * Math.floor(this.splashscreen.length));
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
	getImageDOM : function(imgName, pathSuffix){
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
	
}

/**
load pages
 */
$(function(){
	engine.init();
});
















