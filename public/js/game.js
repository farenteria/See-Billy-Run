/*
	Handles what goes into our game screen, and how users interact with
	game
*/
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
		setupEvents();
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		scroller.moveViewportXBy(SCROLLING_SPEED);

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	//this will load in the background onto the canvas if it's in cache
	function loadBackground(){
		loader = new PIXI.loaders.Loader();
		loader.add('background', '/res/cloud-background.png');
		loader.once('complete', backgroundLoaded);
		loader.load();
	}

	//start scrolling when the background has been loaded
	function backgroundLoaded(){
		scroller = new Scroller(container);
		requestAnimationFrame(update);
	}

	//set up the event listeners for the page
	function setupEvents(){
		$('body').on('keydown', function(event){
			//this is for user pressing up key
			if(event.which == 38){
				makeCharacterJump();
			}else if(event.which == 40){
				makeCharacterSlide();
			}
		});

		//The following events will be used purely for testing
		$('#run').on('click', function(){
			makeCharacterRun();
		});

		$('#stop').on('click', function(){
			animateWithClass('remove', 'run');
		});

		$('#jump').on('click', function(){
			makeCharacterJump();
		});

		$('#slide').on('click', function(){
			makeCharacterSlide();
		});

		$('#block').on('click', function(){
			var newBlock = new Block('jump');
			newBlock.insertBlock();
		});
	}

	init();
})();