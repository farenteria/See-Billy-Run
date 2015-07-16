"use strict";

(function(){
	var container;
	var renderer;
	var backSprite;

	function init(){
		container = new PIXI.Container(); //our stage
		//will either use canvas or webgl, depending on browser
		renderer = PIXI.autoDetectRenderer(512, 384, {
			view:document.getElementById("game-canvas")
		});

		backSprite = new Background();
		container.addChild(backSprite); //adds background to container

		//initial update
		requestAnimationFrame(update);
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		backSprite.update();

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	init();
})();