function getComputerChoice() {
  // Pick random number
  randomValue = Math.random();

  // Return a choice based in the random number
  if (randomValue < 0.33) {
    return "rock";
  } else if (randomValue < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(question = "rock, paper or scissors?") {
  return prompt(question);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    computerChoice =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice) {
      return `It's a draw! Both players chose ${humanChoice}`;
    } else {
      if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
      ) {
        humanScore = humanScore + 1;
        return `You win! ${humanChoice} beats ${computerChoice}`;
      } else {
        computerScore = computerScore + 1;
        return `You lose! ${humanChoice} loses to ${computerChoice}`;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    if (humanScore === 3 || computerScore === 3) {
      break;
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    return "You won the game!";
  } else {
    return "You lost the game!";
  }
}

console.log(playGame());
