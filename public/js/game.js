"use strict";

(function(){
	var container;
	var renderer;
	var backSprite;

	function init(){
		var backTexture;

		container = new PIXI.Container(); //our stage
		//will either use canvas or webgl, depending on browser
		renderer = PIXI.autoDetectRenderer(512, 384, {
			view:document.getElementById("game-canvas")
		});

		backTexture = PIXI.Texture.fromImage("img/bg-far.png");
		backSprite = new PIXI.extras.TilingSprite(backTexture, 512, 384);
		backSprite.position.x = 0;
		backSprite.position.y = 0;
		backSprite.tilePosition.x = 0;
		backSprite.tilePosition.y = 0;
		container.addChild(backSprite); //adds background to container

		//initial update
		requestAnimationFrame(update);
	}

	//moves background to the left a bit, and renders every frame
	function update(){
		backSprite.tilePosition.x -= 0.5;

		renderer.render(container); //renders container
		requestAnimationFrame(update); //updates every frame
	}

	init();
})();