var CHOICES = ["Rock", "Paper", "Scissors"];

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
