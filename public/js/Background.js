"use strict";

function Background(){
	var backTexture = PIXI.Texture.fromImage("img/cloud-background.png");
	PIXI.extras.TilingSprite.call(this, backTexture, 512, 256);

	this.position.x = 0;
	this.position.y = 0;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	this.viewportX = 0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Background.DELTA_X = 0.5;

Background.prototype.setViewportX = function(newViewportX){
	var distanceTravelled = newViewportX - this.viewportX;
	this.viewportX = newViewportX;
	this.tilePosition.x -= (distanceTravelled * Background.DELTA_X);
}