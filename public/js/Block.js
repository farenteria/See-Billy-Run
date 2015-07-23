"use strict";

function Block(type){
	var blockId = 'block';
	var blockType = type;
	var newBlock = '<div id="' + blockId + '" class="block ' + blockType + '-block"></div>';

	this.insertBlock = function(){

		$('#game-board').append(newBlock);
		console.log(blockType);
	}

	this.removeBlock = function(){
		$('#' + blockId).remove();
	}
}