"use strict";

// strictly used to insert and remove new block objects
function Block(type){
	var BLOCK_ID = 'block';
	var blockType = type;
	var newBlock = '<div id="' + BLOCK_ID + '" class="block ' + blockType + '-block"></div>';

	// adds new block div into dom
	this.insertBlock = function(){
		$('#game-board').append(newBlock);
		console.log(blockType);
	}

	// removes block div from dom
	this.removeBlock = function(){
		$('#' + BLOCK_ID).remove();
	}
}