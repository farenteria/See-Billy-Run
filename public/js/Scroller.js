"use strict";

function Scroller(container){
	this.background = new Background();
	container.addChild(this.background);

	this.viewportX = 0;
}

//Will move everything in our viewport 
Scroller.prototype.setViewportX = function(viewportX){
	this.viewportX = viewportX;
	this.background.setViewportX(viewportX);
}

//gets the current position of viewport
Scroller.prototype.getViewportX = function(){
	return this.viewportX;
}

//move the viewport by a specific amount of units
Scroller.prototype.moveViewportXBy = function(units){
	var newViewportX = this.viewportX + units;
	this.setViewportX(newViewportX);
}