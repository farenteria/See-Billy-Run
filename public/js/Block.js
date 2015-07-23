"use strict";

function Block(type){
	var blockId = '#block';
	var blockType = type;
	var newBlock = '<div ' + blockId + ' class="block ' + blockType + '-block"></div>';

	this.insertBlock = function(){

		$('#game-board').append(newBlock);
		console.log(newBlock);
	}

	this.removeBlock = function(){
		$(blockId).remove();
	}
}