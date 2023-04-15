// Get UI elements
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultText = document.querySelector('#result-text');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const drawScore = document.querySelector('#draw-score');
const finalResult = document.querySelector('#final-result');
const restartBtn = document.createElement('button');

let roundsToPlay;
let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

// checks if the input value is number or not
function isNumberKey(evt) {
  let charCode = evt.key;
  if (isNaN(charCode)) {
    return false;
  }
  return true;
}

function startGame() {
  // Get the number of rounds to play
  const formValue = document.getElementById("numberInput").value;
  roundsToPlay = formValue;

  // Disable the number input and start button
  document.getElementById("numberInput").disabled = true;
  document.querySelector(".gameTime button").disabled = true;
}

// Generate a random choice for the computer
function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function playRound(userChoice) {
  // Check if player has reached the desired number of rounds
  if (roundsPlayed < roundsToPlay) {
    // Play a round of the game
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
      draws++;
      drawScore.textContent = draws;
      resultText.textContent = 'Draw!';
    } else if ((userChoice === "rock") && (compChoice === "paper")) {
      computerWins++;
      computerScore.textContent = computerWins;
      resultText.textContent = "Computer Wins! Paper wraps around Rock to immobilize it.";
    } else if ((userChoice === "rock") && (compChoice === "scissors")) {
      playerWins++
      playerScore.textContent = playerWins;
      resultText.textContent = "You Win! Rock smashes Scissors.";
    } else if ((userChoice === "paper") && (compChoice === "rock")) {
      playerWins++
      playerScore.textContent = playerWins;
      resultText.textContent = "You Win! Paper wraps around Rock to immobilize it.";
    } else if ((userChoice === "paper") && (compChoice === "scissors")) {
      computerWins++;
      computerScore.textContent = computerWins;
      resultText.textContent = "Computer Wins! Scissors cuts Paper.";
    } else if ((userChoice === "scissors") && (compChoice === "rock")) {
      computerWins++;
      computerScore.textContent = computerWins;
      resultText.textContent = "Computer Wins! Rock smashes Scissors.";
    } else if ((userChoice === "scissors") && (compChoice === "paper")) {
      playerWins++
      playerScore.textContent = playerWins;
      resultText.textContent = "You Win! Scissors cuts paper.";
    }

    // Increment the number of rounds played
    roundsPlayed++;
  }
  // Check if the game is over
  if (roundsPlayed >= roundsToPlay) {
    // Display the final score and reset the game
    if (playerWins > computerWins) {
      finalResult.textContent = "Game Over! You Win!";
    } else if (computerWins > playerWins) {
      finalResult.textContent = "Game Over! Computer Wins!";
    } else {
      finalResult.textContent = "Game Over! It's a Draw!";
    }
    // Add a class to show the border and animation
    finalResult.classList.add('final-result-border');

    restartBtn.textContent = "Start new game";
    document.querySelector(".end-game").appendChild(restartBtn); // Add restart button
    restartBtn.addEventListener("click", resetGame);
  }
}

function resetGame() {
  // Reset all variables
  roundsToPlay = null;
  roundsPlayed = 0;
  playerWins = 0;
  computerWins = 0;
  draws = 0;
  document.getElementById("numberInput").value = "";

  // Reset all score displays
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  drawScore.textContent = 0;
  resultText.textContent = '';

  // Remove final result message and restart button
  finalResult.textContent = '';
  restartBtn.remove();
  finalResult.classList.remove('final-result-border');

  // Enable the number input and start button
  document.getElementById("numberInput").disabled = false;
  document.querySelector(".gameTime button").disabled = false;
}


// Event listeners for game buttons
rockBtn.addEventListener('click', () => playRound("rock"));
paperBtn.addEventListener('click', () => playRound("paper"));
scissorsBtn.addEventListener('click', () => playRound("scissors"));

// Event listener for start button
document.querySelector(".gameTime button").addEventListener("click", startGame);

function mobile() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}