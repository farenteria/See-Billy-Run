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

	function backgroundLoaded(){
		scroller = new Scroller(container);
		requestAnimationFrame(update);
	}

	function setupEvents(){
		$('body').on('keydown', function(event){
			//this is for user pressing up key
			if(event.which == 38){
				moveCharacterUp();
			}else if(event.which == 40){
				console.log("down");	
			}
		});
	}

	function moveCharacterUp(){
		//jumping animation
		$('#stick-figure').animate({
			top: '-=40'
		}, 300).animate({
			top: '+=40'
		}, 300);

		$('#arm-1').addClass('arm-1-jump');
		$('#arm-2').addClass('arm-2-jump');
		$('#leg-1').addClass('leg-1-jump');
		$('#leg-2').addClass('leg-2-jump');

		//landing animation
		setTimeout(function(){
			$('#arm-1').removeClass('arm-1-jump');
			$('#arm-2').removeClass('arm-2-jump');
			$('#leg-1').removeClass('leg-1-jump');
			$('#leg-2').removeClass('leg-2-jump');			

			$('#arm-1').animate({
				transition: '.3s'
			});
			$('#arm-2').animate({
				transition: '.3s'
			});
			$('#leg-1').animate({
				transition: '.3s'
			});
			$('#leg-2').animate({
				transition: '.3s'
			});				
		}, 300);
	}

	init();
})();