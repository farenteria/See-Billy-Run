"use strict";

function Background(){
	var backTexture = PIXI.Texture.fromImage("img/cloud-background.png");

	//will make our background loop without showing a break
	PIXI.extras.TilingSprite.call(this, backTexture, 512, 256);

	//our background will be placed at the top left
	this.position.x = 0;
	this.position.y = 0;

	//when background image loads, start at initial position before scrolling
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	this.viewportX = 0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

//our change in tile position
Background.DELTA_X = 0.5;

//This will move the background horizontally
Background.prototype.setViewportX = function(newViewportX){
	var distanceTravelled = newViewportX - this.viewportX;
	this.viewportX = newViewportX;
	this.tilePosition.x -= (distanceTravelled * Background.DELTA_X);
}