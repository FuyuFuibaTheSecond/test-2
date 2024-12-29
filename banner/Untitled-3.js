(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Untitled_3_atlas_1", frames: [[0,1082,1032,97],[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.testmall1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.0058,0.0107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.testmall1, new cjs.Rectangle(0,0,11.2,11.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,516,48.5), null);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(994.1,44.25,1,1,0,0,0,258,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:24.2,x:983.95,y:44.1},0).wait(1).to({x:973.85,y:44.15},0).wait(1).to({x:963.75,y:44.2},0).wait(1).to({x:953.6,y:44.25},0).wait(1).to({x:943.5,y:44.3},0).wait(1).to({x:933.4,y:44.35},0).wait(1).to({x:923.25,y:44.4},0).wait(1).to({x:913.15,y:44.45},0).wait(1).to({x:903.05,y:44.5},0).wait(1).to({x:892.9,y:44.55},0).wait(1).to({x:882.8,y:44.6},0).wait(1).to({x:872.7,y:44.65},0).wait(1).to({x:862.55,y:44.7},0).wait(1).to({x:852.45,y:44.75},0).wait(1).to({x:842.35,y:44.85},0).wait(1).to({x:832.25,y:44.9},0).wait(1).to({x:822.1,y:44.95},0).wait(1).to({x:812,y:45},0).wait(1).to({x:801.9,y:45.05},0).wait(1).to({x:791.75,y:45.1},0).wait(1).to({x:781.65,y:45.15},0).wait(1).to({x:771.55,y:45.2},0).wait(1).to({x:761.4,y:45.25},0).wait(1).to({x:751.3,y:45.3},0).wait(1).to({x:741.2,y:45.35},0).wait(1).to({x:731.05,y:45.4},0).wait(1).to({x:720.95,y:45.45},0).wait(1).to({x:710.85,y:45.5},0).wait(1).to({x:700.75,y:45.6},0).wait(1).to({x:690.6,y:45.65},0).wait(1).to({x:680.5,y:45.7},0).wait(1).to({x:670.4,y:45.75},0).wait(1).to({x:660.25,y:45.8},0).wait(1).to({x:650.15,y:45.85},0).wait(1).to({x:640.05,y:45.9},0).wait(1).to({x:629.9,y:45.95},0).wait(1).to({x:619.8,y:46},0).wait(1).to({x:609.7,y:46.05},0).wait(1).to({x:599.55,y:46.1},0).wait(1).to({x:589.45,y:46.15},0).wait(1).to({x:579.35,y:46.2},0).wait(1).to({x:569.2,y:46.25},0).wait(1).to({x:559.1,y:46.3},0).wait(1).to({x:549,y:46.4},0).wait(1).to({x:538.9,y:46.45},0).wait(1).to({x:528.75,y:46.5},0).wait(1).to({x:518.65,y:46.55},0).wait(1).to({x:508.55,y:46.6},0).wait(1).to({x:498.4,y:46.65},0).wait(1).to({x:488.3,y:46.7},0).wait(1).to({x:478.2,y:46.75},0).wait(1).to({x:468.05,y:46.8},0).wait(1).to({x:457.95,y:46.85},0).wait(1).to({x:447.85,y:46.9},0).wait(1).to({x:437.7,y:46.95},0).wait(1).to({x:427.6,y:47},0).wait(1).to({x:417.5,y:47.05},0).wait(1).to({x:407.4,y:47.15},0).wait(92));

	// Layer_1
	this.instance_1 = new lib.testmall1();
	this.instance_1.setTransform(363.5,154.8,1,1,0,0,0,5.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:5.6,scaleX:2.1122,scaleY:0.8186,rotation:3.1034,x:363.65,y:152.95},0).wait(1).to({scaleX:3.2243,scaleY:0.6372,rotation:6.2069,x:363.7,y:151.05},0).wait(1).to({scaleX:4.3365,scaleY:0.4558,rotation:9.3103,y:149.25},0).wait(1).to({scaleX:5.4486,scaleY:0.2744,rotation:12.4138,x:363.8,y:147.4},0).wait(1).to({scaleX:6.5608,scaleY:0.093,rotation:15.5172,x:363.85,y:145.6},0).wait(1).to({scaleX:7.673,scaleY:0.0884,rotation:0,skewX:-161.3793,skewY:18.6207,y:143.75},0).wait(1).to({scaleX:8.7851,scaleY:0.2698,skewX:-158.2759,skewY:21.7241,x:363.95,y:141.95},0).wait(1).to({scaleX:9.8973,scaleY:0.4512,skewX:-155.1724,skewY:24.8276,y:140.15},0).wait(1).to({scaleX:11.0092,scaleY:0.6325,skewX:-152.069,skewY:27.931,y:138.35},0).wait(1).to({scaleX:12.1216,scaleY:0.814,skewX:-148.9655,skewY:31.0345,x:364.05,y:136.55},0).wait(1).to({scaleX:13.2337,scaleY:0.9953,skewX:-145.8621,skewY:34.1379,x:364.1,y:134.75},0).wait(1).to({scaleX:14.3458,scaleY:1.1767,skewX:-142.7586,skewY:37.2414,y:132.9},0).wait(1).to({scaleX:15.4579,scaleY:1.3581,skewX:-139.6552,skewY:40.3448,x:364.15,y:131.2},0).wait(1).to({scaleX:16.57,scaleY:1.5395,skewX:-136.5517,skewY:43.4483,x:364.1,y:129.35},0).wait(1).to({scaleX:17.6821,scaleY:1.7209,skewX:-133.4483,skewY:46.5517,x:364.15,y:127.65},0).wait(1).to({scaleX:18.7944,scaleY:1.9023,skewX:-130.3448,skewY:49.6552,y:125.8},0).wait(1).to({scaleX:19.9065,scaleY:2.0837,skewX:-127.2414,skewY:52.7586,x:364.1,y:124.05},0).wait(1).to({scaleX:21.0188,scaleY:2.2651,skewX:-124.1379,skewY:55.8621,y:122.25},0).wait(1).to({scaleX:22.131,scaleY:2.4465,skewX:-121.0345,skewY:58.9655,y:120.5},0).wait(1).to({scaleX:23.2427,scaleY:2.6279,skewX:-117.931,skewY:62.069,x:364.05,y:118.7},0).wait(1).to({scaleX:24.3554,scaleY:2.8093,skewX:-114.8276,skewY:65.1724,y:116.95},0).wait(1).to({scaleX:25.4674,scaleY:2.9907,skewX:-111.7241,skewY:68.2759,x:364,y:115.25},0).wait(1).to({scaleX:26.5797,scaleY:3.1721,skewX:-108.6207,skewY:71.3793,y:113.45},0).wait(1).to({scaleX:27.6919,scaleY:3.3535,skewX:-105.5172,skewY:74.4828,x:363.9,y:111.65},0).wait(1).to({scaleX:28.8037,scaleY:3.5349,skewX:-102.4138,skewY:77.5862,x:363.8,y:109.9},0).wait(1).to({scaleX:29.9163,scaleY:3.7163,skewX:-99.3103,skewY:80.6897,x:363.75,y:108.05},0).wait(1).to({scaleX:31.0277,scaleY:3.8976,skewX:-96.2069,skewY:83.7931,x:363.7,y:106.3},0).wait(1).to({scaleX:32.141,scaleY:4.0791,skewX:-93.1034,skewY:86.8966,x:363.6,y:104.45},0).wait(1).to({scaleX:33.2522,scaleY:4.2604,skewX:-90,skewY:90,x:363.5,y:102.7},0).wait(1).to({scaleX:34.3653,scaleY:4.4419,skewX:-86.8966,skewY:93.1034,x:363.45,y:100.9},0).wait(1).to({scaleX:35.4763,scaleY:4.6232,skewX:-83.7931,skewY:96.2069,x:363.3,y:99.1},0).wait(1).to({scaleX:36.5893,scaleY:4.8047,skewX:-80.6897,skewY:99.3103,x:363.25,y:97.3},0).wait(1).to({scaleX:37.7009,scaleY:4.986,skewX:-77.5862,skewY:102.4138,x:363.1,y:95.45},0).wait(1).to({scaleX:38.8135,scaleY:5.1675,skewX:-74.4828,skewY:105.5172,x:363.05,y:93.65},0).wait(1).to({scaleX:39.9256,scaleY:5.3489,skewX:-71.3793,skewY:108.6207,x:362.9,y:91.85},0).wait(1).to({scaleX:41.0376,scaleY:5.5302,skewX:-68.2759,skewY:111.7241,x:362.8,y:89.95},0).wait(1).to({scaleX:42.15,scaleY:5.7117,skewX:-65.1724,skewY:114.8276,x:362.65,y:88.1},0).wait(1).to({scaleX:43.2612,scaleY:5.8929,skewX:-62.069,skewY:117.931,x:362.5,y:86.25},0).wait(1).to({scaleX:44.3742,scaleY:6.0744,skewX:-58.9655,skewY:121.0345,x:362.4,y:84.35},0).wait(1).to({scaleX:45.4862,scaleY:6.2558,skewX:-55.8621,skewY:124.1379,x:362.25,y:82.55},0).wait(1).to({scaleX:46.598,scaleY:6.4372,skewX:-52.7586,skewY:127.2414,x:362.1,y:80.65},0).wait(1).to({scaleX:47.7102,scaleY:6.6186,skewX:-49.6552,skewY:130.3448,x:362,y:78.8},0).wait(1).to({scaleX:48.822,scaleY:6.7999,skewX:-46.5517,skewY:133.4483,x:361.9,y:76.85},0).wait(1).to({scaleX:49.9342,scaleY:6.9813,skewX:-43.4483,skewY:136.5517,x:361.75,y:74.95},0).wait(1).to({scaleX:51.0466,scaleY:7.1627,skewX:-40.3448,skewY:139.6552,x:361.6,y:73},0).wait(1).to({scaleX:52.1587,scaleY:7.3441,skewX:-37.2414,skewY:142.7586,x:361.45,y:71.1},0).wait(1).to({scaleX:53.2712,scaleY:7.5256,skewX:-34.1379,skewY:145.8621,x:361.35,y:69.2},0).wait(1).to({scaleX:54.3836,scaleY:7.707,skewX:-31.0345,skewY:148.9655,x:361.2,y:67.2},0).wait(1).to({scaleX:55.4947,scaleY:7.8882,skewX:-27.931,skewY:152.069,x:361.1,y:65.2},0).wait(1).to({scaleX:56.6081,scaleY:8.0698,skewX:-24.8276,skewY:155.1724,x:360.95,y:63.3},0).wait(1).to({scaleX:57.7199,scaleY:8.2512,skewX:-21.7241,skewY:158.2759,x:360.85,y:61.35},0).wait(1).to({scaleX:58.8324,scaleY:8.4326,skewX:-18.6207,skewY:161.3793,x:360.75,y:59.35},0).wait(1).to({scaleX:59.9445,scaleY:8.614,skewX:-15.5172,skewY:164.4828,x:360.6,y:57.35},0).wait(1).to({scaleX:61.056,scaleY:8.7953,skewX:-12.4138,skewY:167.5862,x:360.55,y:55.35},0).wait(1).to({scaleX:62.1691,scaleY:8.9768,skewX:-9.3103,skewY:170.6897,x:360.45,y:53.35},0).wait(1).to({scaleX:63.2798,scaleY:9.158,skewX:-6.2069,skewY:173.7931,x:360.4,y:51.3},0).wait(1).to({scaleX:64.3941,scaleY:9.3397,skewX:-3.1034,skewY:176.8966,x:360.35,y:49.3},0).wait(1).to({scaleX:65.5045,scaleY:9.5209,skewX:0,skewY:180,x:360.2,y:47.25},0).wait(92));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(359.9,-104.6,892.1999999999999,419.5);
// library properties:
lib.properties = {
	id: 'AE4B3E2FCF429C4B8FEA8AC0D7E6BFBC',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Untitled_3_atlas_1.png", id:"Untitled_3_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AE4B3E2FCF429C4B8FEA8AC0D7E6BFBC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;