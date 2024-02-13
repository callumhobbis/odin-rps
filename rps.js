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

function playGame(rounds = 5) {
  let score = 0;
  for (let i = 1; i <= rounds; i++) {
    let playerSelection;
    while (!CHOICES.includes(playerSelection)) {
      playerSelection = prompt("Enter move: ");
      playerSelection =
        playerSelection[0].toUpperCase() +
        playerSelection.substring(1).toLowerCase();
    }
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "win") {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      score += 1;
    } else if (result == "draw") {
      console.log(`You Draw! Both played ${playerSelection}`);
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      score -= 1;
    }
  }
  console.log("---- GAME OVER ----");
  if (score > 0) {
    console.log("You beat the computer!");
  } else if (score == 0) {
    console.log("You tied with the computer!");
  } else {
    console.log("You lost to the computer!");
  }
}
