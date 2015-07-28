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

function showGameOver(){
	var text = "Game Over!";
	$('.game-over').text(text);
}

function removeGameOver(){
	$('.game-over').text('');
}

function changeStartText(){
	$('.start-text').text('Try Again?');
}

function removeStartButton(){
	$('#start-button').remove();
}

function setupBackground(){
	cloudsInterval = setInterval(function(){
		var highOrLow;

		if(counter % 2 == 0){
			highOrLow = 'high';
		}else{
			highOrLow = 'low';
		}

		var newCluster = new Cluster(counter, highOrLow);

		newCluster.addNewCloud();
		counter++;

		setTimeout(function(){
			newCluster.removeCloud();
		}, 5000);
	}, 2000);
}