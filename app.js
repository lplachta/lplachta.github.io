$(function (){
	console.log("Page load");
	let choices = ["rock", "paper", "scissors"];

	$("#rock").click(function(){
		play(choices[0]); 
	});
	$("#paper").click(function(){
		play(choices[1]);
	});
	$("#scissors").click(function(){
		play(choices[2]);
	});

	function play(playerChoice) {
		let computerResult = getComputerResult();
		//console.log(choices[computerResult]);
		whoWon(playerChoice, choices[computerResult]);

	}

	function getComputerResult() {
		return Math.floor(Math.random()*3);
	}

	function whoWon(playerChoice, computerChoice) {
		console.log(playerChoice, computerChoice);
		if(playerChoice === "rock" && computerChoice === "scissors"){
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "paper" && computerChoice === "rock"){
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "scissors" && computerChoice === "paper"){
			console.log("Player wins");
			printResult(true, false, false);
		} else if (playerChoice === "rock" && computerChoice === "paper"){
			console.log("Computer wins");
			printResult(false, true, false);
		} else if (playerChoice === "paper" && computerChoice === "scissors"){
			console.log("Computer wins");
			printResult(false, true, false);
		} else if (playerChoice === "scissors" && computerChoice === "rock"){
			console.log("Computer wins");
			printResult(false, true, false);
		}  else {
			console.log("Its a draw, please play again");
			printResult(false, false, true);
		}

	}

	function printResult(playerWins, computerWins, draw){
			let playerScore = parseInt ($("#playerScore").html());
			let computerScore = parseInt ($("#computerScore").html());
			if (playerWins) {
				playerScore++;
			 $("#playerScore").html(playerScore);
			 $("#winner").html("Player wins");
			} else if (computerWins) {
				computerScore++;
			 $("#computerScore").html(computerScore);
			 $("#winner").html("Computer wins");
			} else {
				$("#winner").html("Its a draw");
			}
	}
});
