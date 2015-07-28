"use strict";

var isMobile = window.matchMedia("only screen and (max-width: 991px)");

// will be used to display/hide instructions
function setupInstructions(){
	checkIfMobile();

	$('.instructions').show();

	setTimeout(function(){
		$('.instructions').hide();
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
	$('#start-button').removeClass('first-start-button');
	$('#start-button').addClass('second-start-button');
	$('#start-button').toggle();
	checkIfMobile();
}

function changeStartText(){
	$('#start-button').text('Try Again?');
}

function removeStartButton(){
	$('#start-button').toggle();
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
		}, 20000);
	}, 2000);
}

function checkIfMobile(){
	if(isMobile.matches){
		$('.mobile-instr').toggle();
	}else{
		$('.computer-instr').toggle();
	}	
}