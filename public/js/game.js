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
	var gameSpeed;
	var interval;

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

		gameSpeed = 1000;
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
		$('#run').on('click', makeCharacterRun);

		$('#stop').on('click', function(){
			animateWithClass('remove', 'run');
		});

		$('#jump').on('click', makeCharacterJump);

		$('#slide').on('click', makeCharacterSlide);

		$('#block-button').on('click', getNextBlock);

		$('#start-button').on('click', startGame);

		$('#stop-game-button').on('click', endGame);
	}

	// places a new block into our game area, and removes it after leaving game area
	function getNextBlock(){
		var newBlock;
		var type;

		//we'll only have 2 blocks to dodge
		var rand = Math.floor(Math.random() * 2);

		if(rand == 0){
			type = 'slide';
		}else{
			type = 'jump';
		}

		newBlock = new Block(type);
		newBlock.insertBlock();

		//remove the block once it's off-screen because it's useless now
		setTimeout(function(){
			newBlock.removeBlock();
		}, 2000);
	}

	//starts our interval to repeat the game TODO: end the game when collision occurs
	function startGame(){
		console.log("game start");

		interval = setInterval(function(){
			getNextBlock();
		}, gameSpeed);

	}

	//clears the interval to end the game
	function endGame(){
		clearInterval(interval);
		console.log("Game over");
	}

	init();
})();