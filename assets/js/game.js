$(document).ready(function () {
	// Global Variables
	var crystalVal1, crystalVal2, crystalVal3, crystalVal4;
	var wins = 0;
	var losses = 0;
	var randComputer;
	// counts user score
	var usrScore;

	//Functions
	startGame();
	function startGame() {
		// random number between 25 & 80

		randComputer = 19 + Math.floor(Math.random() * 101);
		crystalVal1 = 1 + Math.floor(Math.random() * 12);
		crystalVal2 = 1 + Math.floor(Math.random() * 12);;
		crystalVal3 = 1 + Math.floor(Math.random() * 12);
		crystalVal4 = 1 + Math.floor(Math.random() * 12);
		usrScore = 0;
		$('#winsCounter').html("Wins: " + wins);
		$('#lossesCounter').html("Losses: " + losses);
		$('#randomNumber').html(randComputer);
		$('#userScore').html(usrScore);
		console.log("computer value " + randComputer);
		console.log("crystal1 val " + crystalVal1);
		console.log("crystal2 val " + crystalVal2);
		console.log("crystal3 val " + crystalVal3);
		console.log("crystal4 val " + crystalVal4);
		console.log("user score " + usrScore);
	}
	//end startGame

	function winOrLose() {
		// check if user has lost
		if (usrScore > randComputer) {
			losses++;
			console.log("User Lost");
			startGame();
		}

		// check if user has won
		if (usrScore == randComputer) {
			wins++;

			console.log("User Won");
			startGame();
		}
	}
	//end winOrLose

	//Main Game
	$(".crystal").on("click", function () {
		var clicked = $(this).attr("value");
		// console.log(clicked)
		if (clicked == "crystal1") {
			usrScore += crystalVal1;
		} else if (clicked == "crystal2") {
			usrScore += crystalVal2;
		} else if (clicked == "crystal3") {
			usrScore += crystalVal3;
		} else if (clicked == "crystal4") {
			usrScore += crystalVal4;
		}

		$("#userScore").html(usrScore);

		winOrLose();
	});
	//End Main Game

});