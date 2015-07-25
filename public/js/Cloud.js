"use strict";

// will be used to add clouds to our background
function Cloud(){
	var width;
	var height;
	var y;
	var newCloud;

	var widthLimit = 500;
	var heightLimit = 500;
	var lowerLimit = 100;

	this.getNewAttributes = function(){
		// width = Math.floor(Math.random() * (widthLimit - lowerLimit) + lowerLimit);
		// height = Math.floor(Math.random() * (heightLimit - lowerLimit) + lowerLimit);
		// var y = Math.floor(Math.random() * ());
		width = '300px';
		height = '300px';
		y = '100px';
		newCloud = '<div class="cloud"></div>';

		$('.cloud').css({
			"width": width,
			"height": height,
			"top": y
		});
	}

	this.addNewCloud = function(){
		this.getNewAttributes();
		$('#game-board').append(newCloud);
	}

	this.removeCloud = function(){
		('.cloud').remove();
	}
}