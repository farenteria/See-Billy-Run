"use strict";

// will be used to add clouds to our background
function Cluster(id, highOrLow){
	var width;
	var height;
	var newCloud;
	var newCluster;
	var numClouds;

	this.getNewAttributes = function(){
		numClouds = 3;
		
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