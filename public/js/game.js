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
				console.log("down");	
			}
		});
	}

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

	function addLimbClass(limb, action, limbNum){
		$('#' + limb + '-' + limbNum).addClass(limb + '-' + limbNum + '-' + action);
	}

	function removeLimbClass(limb, action, limbNum){
		$('#' + limb + '-' + limbNum).removeClass(limb + '-' + limbNum + '-' + action);
	}

	init();
})();