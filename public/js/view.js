"use strict";

// will be used to display/hide instructions
function setupInstructions(){
	var text = "Press up to jump, and down to slide!";
	$('.instructions').text(text);

	setTimeout(function(){
		$('.instructions').text('');
	}, 2000);
}

function changeScoreText(score){
	$('#score').text(score);		
}

function changeRoundText(round){
	$('#round').text(round);
	$('.round-container').addClass('new-round');

	setTimeout(function(){
		$('.round-container').removeClass('new-round');
	}, 2000);
}