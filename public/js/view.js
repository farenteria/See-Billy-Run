"use strict";

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