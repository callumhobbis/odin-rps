var CHOICES = ["Rock", "Paper", "Scissors"];
var WIN_SCORE = 5;

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
  const playerWins = ["PaperRock", "ScissorsPaper", "RockScissors"];
  const matchup = playerSelection + computerSelection;
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (playerWins.includes(matchup)) {
    return "win";
  } else {
    return "lose";
  }
}

function resultMessage(result, playerSelection, computerSelection) {
  if (result == "draw") {
    return `You drew! You both played ${playerSelection}.`;
  }
  if (result == "win") {
    return `You won! ${playerSelection} beats ${computerSelection}!`;
  }
  if (result == "lose") {
    return `You lost. ${computerSelection} beats ${playerSelection}...`;
  }
}

const buttons = document.querySelectorAll("button.choice");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const endDiv = document.getElementById("end-message");
let playerScore = 0;
let computerScore = 0;
let endMessage = "";

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result == "win") {
      playerScore++;
    } else if (result == "lose") {
      computerScore++;
    }

    if (playerScore >= WIN_SCORE && !endMessage) {
      endMessage = "You won the tournament!";
    } else if (computerScore >= WIN_SCORE && !endMessage) {
      endMessage = "You lost the tournament. Better luck next time!";
    }

    let output = resultMessage(result, playerSelection, computerSelection);
    resultDiv.textContent = output;
    scoreDiv.textContent = `YOU ${playerScore}-${computerScore} CPU`;
    endDiv.textContent = endMessage;
  });
}
