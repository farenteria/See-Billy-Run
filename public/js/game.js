"use strict";

(function(){
	var container;
	var renderer;
	var scroller;
	var loader;

	var SCROLLING_SPEED;

	function init(){
		//how many units should our background move horizontally?
		SCROLLING_SPEED = 2;

		//our stage
		container = new PIXI.Container();

		//will either use canvas or webgl, depending on browser
		renderer = PIXI.autoDetectRenderer(512, 384, {
			view:document.getElementById("game-canvas")
		});

		renderer.backgroundColor = 0x0099FF;

		loadBackground();
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		scroller.moveViewportXBy(SCROLLING_SPEED);

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	function loadBackground(){
		//TODO: move json and images to proper resource folder
		var assetsToLoad = ["res/cloud-background.png"];
		
		loader = new PIXI.loaders.Loader();
		loader.add('character', "res/character.json");
		loader.once('complete', backgroundLoaded);
		loader.load();
	}

	function backgroundLoaded(){
		scroller = new Scroller(container);
		requestAnimationFrame(update);
	}

	init();
})();