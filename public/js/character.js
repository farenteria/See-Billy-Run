/*
	Handles all character logic and animation
*/
"use strict";

//jumping animation for character
function makeCharacterJump(){
	$('#stick-figure').animate({
		top: '-=40'
	}, 300).animate({
		top: '+=40'
	}, 300);

	// add jump class
	animateWithClass('add', 'jump');

	//remove jump class for landing
	setTimeout(function(){
		animateWithClass('remove', 'jump');
	}, 300);
}

/*
	Will either add class (for action animation), or remove class
	(to return character back to default position).
	'addOrRemove' refers to whether we are adding a class or removing it.
	'action' refers to what the character will be doing so we can use 
	the appropriate ids and classes
*/
function animateWithClass(addOrRemove, action){
	var limbs = ['arm', 'leg'];

	for(var i = 0; i < limbs.length; i++){
		for(var j = 0; j < limbs.length; j++){
			if(addOrRemove == 'add'){
				addLimbClass(limbs[i], action, j.toString());
			}else if(addOrRemove =='remove'){
				removeLimbClass(limbs[i], action, j.toString());
				$('#' + limbs[i] + '-' + j).animate({
					transition: '.3s'
				});
			}
		}
	}	
}

// will add appropriate class to appropriate limb for animation
function addLimbClass(limb, action, limbNum){
	$('#' + limb + '-' + limbNum).addClass(limb + '-' + limbNum + '-' + action);
}

// will remove class added with previous function, thus returning it to default animation state
function removeLimbClass(limb, action, limbNum){
	$('#' + limb + '-' + limbNum).removeClass(limb + '-' + limbNum + '-' + action);
}