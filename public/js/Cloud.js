"use strict";

// will be used to add clouds to our background
function Cloud(addThisClass){
	var width;
	var height;
	var y;
	var newCloud;

	var widthLimit = 500;
	var heightLimit = 500;
	var lowerLimit = 100;

	this.getNewAttributes = function(){
		width = Math.floor(Math.random() * (widthLimit - lowerLimit) + lowerLimit);
		width = width.toString() + 'px';
		height = Math.floor(Math.random() * (heightLimit - lowerLimit) + lowerLimit);
		height = height.toString() + 'px';
		y = Math.floor(Math.random() * (500) + lowerLimit);
		y = y.toString() + 'px';
		
		newCloud = '<div class="cloud cloud-' + addThisClass + '"></div>';
	}

	this.addNewCloud = function(){
		this.getNewAttributes();
		$('#game-board').append(newCloud);
	}

	this.removeCloud = function(){
		$('.cloud-' + addThisClass).remove();
	}
}