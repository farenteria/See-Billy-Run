"use strict";

(function(){
	var container;
	var renderer;
	var scroller;
	var unitsToMove;

	function init(){
		//how many units should our background move horizontally?
		unitsToMove = 2;

		//our stage
		container = new PIXI.Container();

		//will either use canvas or webgl, depending on browser
		renderer = PIXI.autoDetectRenderer(512, 384, {
			view:document.getElementById("game-canvas")
		});

		scroller = new Scroller(container);

		//initial update
		requestAnimationFrame(update);
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		scroller.moveViewportXBy(unitsToMove);

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	init();
})();