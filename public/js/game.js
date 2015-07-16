"use strict";

(function(){
	var container;
	var renderer;
	var scroller;

	function init(){
		container = new PIXI.Container(); //our stage
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
		var newViewportX = scroller.getViewportX() + 2;
		scroller.setViewportX(newViewportX);

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	init();
})();