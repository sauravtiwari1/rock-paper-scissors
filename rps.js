// Get UI elements
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultText = document.querySelector('#result-text');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const drawScore = document.querySelector('#draw-score');

// Add event listeners to buttons
rockBtn.addEventListener('click', function() {
  playRound('rock');
});

paperBtn.addEventListener('click', function() {
  playRound('paper');
});

scissorsBtn.addEventListener('click', function() {
  playRound('scissors');
});

// Create game variables
let playerWins = 0;
let computerWins = 0;
let draws = 0;

// Get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a round of the game
function playRound(userChoice) {
  // Get computer choice
  const compChoice = getComputerChoice();

  // Determine winner and update scores
  if (userChoice === compChoice) {
    draws++;
    drawScore.textContent = draws;
    resultText.textContent = 'Draw!';
  }else if ((userChoice === "rock") && (compChoice === "paper")) {
    computerWins++;
    computerScore.textContent=computerWins;
    resultText.textContent="Computer Wins! Paper wraps around Rock to immobilize it.";
  } else if ((userChoice === "rock") && (compChoice === "scissors")) {
    playerWins++
    playerScore.textContent=playerWins;
    resultText.textContent="You Win! Rock smashes Scissors.";
  } else if ((userChoice === "paper") && (compChoice === "rock")) {
    playerWins++
    playerScore.textContent=playerWins;
    resultText.textContent="You Win! Paper wraps around Rock to immobilize it.";
  } else if ((userChoice === "paper") && (compChoice === "scissors")) {
    computerWins++;
    computerScore.textContent=computerWins;
    resultText.textContent="Computer Wins! Scissors cuts Paper.";
  } else if ((userChoice === "scissors") && (compChoice === "rock")) {
    computerWins++;
    computerScore.textContent=computerWins;
    resultText.textContent="Computer Wins! Rock smashes Scissors.";
  } else if ((userChoice === "scissors") && (compChoice === "paper")) {
    playerWins++
    playerScore.textContent=playerWins;
    resultText.textContent="You Win! Scissors cuts paper.";
  }
  
}