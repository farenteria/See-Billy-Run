"use strict";

//Background 
function Background(){
	/*
		The texture should already be loaded thanks to our loadSpriteSheets() in game.js
		This statement looks in our cache for that pre-load before loading it directly
		from our res folder
	*/
	var backTexture = PIXI.Texture.fromImage("res/cloud-background.png");

	//will make our background loop without showing a break
	PIXI.extras.TilingSprite.call(this, backTexture, 512, 256);

	//our background will be placed at the top left
	this.position.x = 0;
	this.position.y = 0;

	//when background image loads, start at initial position before scrolling
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	this.viewportX = 0;

	//our change in tile position
	this.DELTA_X = 0.5;

	//This will move the background horizontally
	this.setViewportX = function(newViewportX){
		var distanceTravelled = newViewportX - this.viewportX;
		this.viewportX = newViewportX;
		this.tilePosition.x -= (distanceTravelled * this.DELTA_X);		
	}
}

Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);