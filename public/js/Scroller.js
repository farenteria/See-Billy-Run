"use strict";

function Scroller(container){
	this.background = new Background();
	container.addChild(this.background);

	this.viewportX = 0;
}

Scroller.prototype.setViewportX = function(viewportX){
	this.viewportX = viewportX;
	this.background.setViewportX(viewportX);
}

Scroller.prototype.getViewportX = function(){
	return this.viewportX;
}