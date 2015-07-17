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

		loadSpriteSheet();
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		scroller.moveViewportXBy(SCROLLING_SPEED);

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	function loadSpriteSheet(){
		//TODO: move json and images to proper resource folder
		var assetsToLoad = ["res/character.json", "res/cloud-backgorund.png"];
		loader = new PIXI.loaders.Loader();
		loader.add('character', "res/character.json");
		loader.once('complete', spriteSheetLoaded);
		loader.load();
	}

	function spriteSheetLoaded(){
		scroller = new Scroller(container);
		requestAnimationFrame(update);

		//initial test to place a sprite image on screen
		var slice1 = PIXI.Sprite.fromFrame("walk_01");
 		slice1.position.x = 32;
		slice1.position.y = 64;
		container.addChild(slice1);
	}

	init();
})();