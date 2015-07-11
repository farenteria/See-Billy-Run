"use strict";

function Background(){
	var backTexture = PIXI.Texture.fromImage("img/bg-far.png");
	PIXI.extras.TilingSprite.call(this, backTexture, 512, 256);

	this.position.x = 0;
	this.position.y = 0;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);