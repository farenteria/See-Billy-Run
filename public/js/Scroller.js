"use strict";

function Scroller(stage){
	this.background = new Background();
	stage.addChild(this.background);
}

Scroller.prototype.update = function(){
	this.background.update();
}