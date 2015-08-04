/*
	Handles what goes into our game screen, and how users interact with
	game
*/
"use strict";

var gameSpeed;
var newBlockInterval;
var collisionInterval;
var score;
var blockNum;
var round;
var numClouds;
var clouds;
var cloudsInterval;
var counter;
var removeTimer;

function init(){
	score = 0;
	round = 0;
	clouds = 4;
	blockNum = score; // Blocks and score will always be tied together (used for block id)
	gameSpeed = 2000;
	counter = 0;

	// setupEvents();
	// start and end the game at will
	$('#start-button').on('click', startGame);
	$('#stop-game-button').on('click', endGame);
	$('#instr-button').on('click', setupInstructions);
	setupBackground();
}

//set up the event listeners for the page
function setupEvents(){
	$('body').on('keydown', function(event){
		//these are for user pressing up or down key
		if(event.which == 38 || event.which == 87){
			animate('jump');
		}else if(event.which == 40 || event.which == 83){
			animate('slide');
		}
	});

	// for mobile devices
	$('body').on('swipeleft', function(){
		animate('jump');
	});
	$('body').on('swiperight', function(){
		animate('slide');
	});
}

// places a new block into our game area, and removes it after leaving game area
function getNextBlock(){
	var newBlock;
	var type;
	removeTimer = 1500;
		
	collisionInterval = setInterval(detectCollision, 50);

	//we'll only have 2 types of blocks to dodge
	var rand = Math.floor(Math.random() * 2);

	if(rand == 0){
		type = 'slide';
	}else{
		type = 'jump';
	}

	newBlock = new Block(type, blockNum);
	newBlock.insertBlock();

	// remove the block once it's off-screen because it's useless now
	setTimeout(function(){
		newBlock.removeBlock();
		clearInterval(collisionInterval);
	}, removeTimer);
}

// starts our interval to repeat the game
function startGame(){
	score = 0;
	round = 0;
	gameSpeed = 2000;

	changeScoreText(score);
	changeRoundText(round);

	addRound();
	setupInstructions();
	setupEvents();
	animate('run');
	removeStartButton();
}

// clears the interval to end the game
function endGame(){
	clearInterval(newBlockInterval);
	clearInterval(collisionInterval);

	explodeCharacter();

	showGameOver();
	changeStartText();

	$('body').off();
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
		// Gives a single point as long as block is still in range of stick-figure div
		}else if(!(characterXPos > blockXPos + blockWidth)){
			clearInterval(collisionInterval);
			score++;
			// in view.js
			changeScoreText(score);

			// Every 5 points, make a new round
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
	removeTimer -= 100;

	round++;

	clearInterval(newBlockInterval);
	newBlockInterval = setInterval(getNextBlock, gameSpeed);

	// in view.js
	changeRoundText(round);
}