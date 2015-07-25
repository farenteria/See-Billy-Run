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
	var interval2;
	var score;
	var blockNum;
	var round;

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

		score = 0;
		round = 0;
		blockNum = score; // Blocks and score will always be tied together (used for block id)
		gameSpeed = 2000;
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
		var collisionTimer = 1500;
		
		//we'll only have 2 types of blocks to dodge
		var rand = Math.floor(Math.random() * 2);
		interval2 = setInterval(detectCollision, 50);

		if(rand == 0){
			type = 'slide';
		}else{
			type = 'jump';
		}

		newBlock = new Block(type, blockNum);
		newBlock.insertBlock();

		//remove the block once it's off-screen because it's useless now
		setTimeout(function(){
			newBlock.removeBlock();
			clearInterval(interval2);
		}, collisionTimer);
	}

	//starts our interval to repeat the game
	function startGame(){
		console.log("game start");
		score = 0;
		changeScoreText();

		// interval = setInterval(getNextBlock, gameSpeed);
		addRound();
	}

	// clears the interval to end the game
	function endGame(){
		clearInterval(interval);
		clearInterval(interval2);
		console.log("Game over");
	}

	// will detect if div surrounding character collides with a block
	function detectCollision(){
		var characterXPos = $('#stick-figure').position().left;
		var characterYPos = $('#stick-figure').position().top;
		var characterHeight = $('#stick-figure').height();
		var characterWidth = $('#stick-figure').width();
		var blockXPos = $('.block').position().left;
		var blockYPos = $('.block').position().top;
		var blockHeight = $('.block').height();
		var blockWidth = $('.block').width();

		// only checks once block is in range of touching character div
		if(characterXPos + characterWidth >= blockXPos){
			/*
				This is what checks for the actual collisions.
			*/
			if(characterXPos < blockXPos + blockWidth &&
				characterXPos + characterWidth > blockXPos &&
				characterYPos < blockYPos + blockHeight &&
				characterHeight + characterYPos > blockYPos){

				//there has been a collision! Loser!
				endGame();
			}else if(!(characterXPos > blockXPos + blockWidth)){
				score++;
				changeScoreText();
				clearInterval(interval2);

				//Every 5 points, make a new round
				if(score % 5 == 0){
					addRound();
				}
			}
		}
	}

	/* 
		clear our interval, and decrease gameSpeed to increase difficulty,
		and increase fun! I'm sorry, I swear that I'm fun at parties...
	*/
	function addRound(){
		gameSpeed -= 100;
		round++;

		clearInterval(interval);
		interval = setInterval(getNextBlock, gameSpeed);
		console.log("new round at " + gameSpeed + " ms");
		changeRoundText();
	}

	function changeScoreText(){
		$('#score').text(score);		
	}

	function changeRoundText(){
		$('#round').text(round);
	}

	init();
})();