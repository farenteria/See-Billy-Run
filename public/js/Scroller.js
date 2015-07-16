"use strict";

function Scroller(container){
	this.background = new Background();
	container.addChild(this.background);

	this.viewportX = 0;

	//Will move everything in our viewport 
	this.setViewportX = function(viewportX){
		this.viewportX = viewportX;
		this.background.setViewportX(viewportX);
	}

	//gets the current position of viewport
	this.getViewportX = function(){
		return this.viewportX;
	}

	//move the viewport by a specific amount of units
	this.moveViewportXBy = function(units){
		var newViewportX = this.viewportX + units;
		this.setViewportX(newViewportX);
	}
}