"use strict";

// will be used to add clouds to our background
function Cluster(id, highOrLow){
	var width;
	var height;
	var y;
	var newCloud;
	var newCluster;
	var numClouds = 3;
	var lowerLimit = 100;

	this.getNewAttributes = function(){
		y = Math.floor(Math.random() * (500) + lowerLimit);
		y = y.toString() + 'px';
		
		newCluster = '<div id="' + id + '" class="cluster ' + highOrLow + '">';
		for(var i = 0; i < numClouds; i++){
			newCluster += ('<div class="cloud cloud-' + i + '"></div>');
		}

		newCluster += '</div>';
	}

	this.addNewCloud = function(){
		this.getNewAttributes();

		$('#game-board').append(newCluster);
	}

	this.removeCloud = function(){
		$('#' + id).remove();
	}
}