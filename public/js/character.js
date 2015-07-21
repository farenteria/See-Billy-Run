/*
	Handles all character logic and animation
*/
"use strict";

var animationTime = 300;
var bodyParts = ['arm', 'leg', 'head', 'torso'];

// sets default running animation
function makeCharacterRun(){
	animateWithClass('add', 'run');
}

//jumping animation for character
function makeCharacterJump(){
	animateWithClass('remove', 'run');

	$('#stick-figure').animate({
		top: '-=40'
	}, animationTime).animate({
		top: '+=40'
	}, animationTime);

	// add jump class
	animateWithClass('add', 'jump');

	//remove jump class for landing, and go back to running
	backToDefaultAnim('jump');
}

// sliding animation
function makeCharacterSlide(){
	animateWithClass('add', 'slide');
	backToDefaultAnim('slide');
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
			if(action == 'slide'){
				addRemoveActionClass(bodyParts[i], action, addOrRemove);
				addTransition(bodyParts[i]);
			}
		}
	}
}

// will add or remove appropriate class to appropriate body part for animation
function addRemoveActionClass(bodyPart, action, addOrRemove){
	if(addOrRemove == 'add'){
		$('#' + bodyPart).addClass(bodyPart + '-' + action);
	} else if(addOrRemove == 'remove'){
		$('#' + bodyPart).removeClass(bodyPart + '-' + action);	
	}
}

// allows the animation for set time as stated in .transition-time in style.css
function addTransition(bodyPart){
	$('#' + bodyPart).addClass('transition-time');	
}

// Will go back to default animation after a set period of time
function backToDefaultAnim(action){
	setTimeout(function(){
		animateWithClass('remove', action);
		makeCharacterRun();
	}, animationTime);	
}