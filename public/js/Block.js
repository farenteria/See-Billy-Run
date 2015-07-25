"use strict";

// strictly used to insert and remove new block objects
function Block(type, id){
	// var BLOCK_ID = 'block-' + id;
	var blockType = type;
	var newBlock = '<div class="block ' + blockType + '-block"></div>';

	// adds new block div into dom
	this.insertBlock = function(){
		$('#game-board').append(newBlock);
	}

	// removes block div from dom
	this.removeBlock = function(){
		$('.' + BLOCK_ID).remove();
	}
}