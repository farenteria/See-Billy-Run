/*
	Handles all character logic and animation
*/
"use strict";

var backToDefaultTimer;
var animationTime = 300;
var bodyParts = ['arm', 'leg', 'head', 'torso'];

function animate(action){
	var delay = animationTime + 200;

	animateWithClass('remove', 'explode');
	animateWithClass('add', action);
	
	backToDefaultTimer = setTimeout(function(){
		animateWithClass('remove', action);
		makeCharacterRun();
	}, delay);
}

// sets default running animation
function makeCharacterRun(){
	animateWithClass('remove', 'explode');
	animateWithClass('add', 'run');
}

/*
	Will either add class (for action animation), or remove class
	(to return character back to default position).
	'addOrRemove' refers to whether we are adding a class or removing it.
	'action' refers to what the character will be doing so we can use 
	the appropriate ids and classes
*/
function animateWithClass(addOrRemove, action){
	for(var i = 0; i < bodyParts.length; i++){
		if (i < bodyParts.length / 2){
			for(var j = 0; j < bodyParts.length / 2; j++){
				addRemoveActionClass(bodyParts[i] + '-' + j, action, addOrRemove);
				addTransition(bodyParts[i] + '-' + j);
			}
		}else{
			addRemoveActionClass(bodyParts[i], action, addOrRemove);
			addTransition(bodyParts[i]);
		}
	}

	addRemoveActionClass('stick-figure', action, addOrRemove);
}

// will add or remove appropriate class to appropriate body part for animation
function addRemoveActionClass(bodyPart, action, addOrRemove){
	if(addOrRemove == 'add'){
		/* 
			removes run class at the same time that we're adding a class to save
			some time. This is benificial in most cases, with the exception of
			adding back the running animation
		*/
		$('#' + bodyPart).removeClass(bodyPart + '-' + 'run');	
		$('#' + bodyPart).addClass(bodyPart + '-' + action);
	} else if(addOrRemove == 'remove'){
		$('#' + bodyPart).removeClass(bodyPart + '-' + action);	
	}
}

// allows the animation for set time as stated in .transition-time in style.css
function addTransition(bodyPart){
	$('#' + bodyPart).addClass('transition-time');	
}

// makes character explode after game has ended
function explodeCharacter(){
	animateWithClass('remove', 'slide');
	animateWithClass('remove', 'jump');
	clearTimeout(backToDefaultTimer);
	animateWithClass('add', 'explode');
}