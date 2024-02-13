function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  const playerWins = ["PaperRock", "ScissorsPaper", "RockScissors"];
  const matchup = playerSelection + computerSelection;

  if (playerWins.includes(matchup)) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `You Draw! Both played ${playerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
