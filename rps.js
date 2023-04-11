function userPrompt(){
    // prompt user to select rock, paper or scissors
    userInput=prompt("What do you choose? Rock, Paper or Scissors?").toLowerCase();
    // create logic if value != to rock/paper/scissor then execute prompt
    while (userInput != "rock" && userInput !="paper" && userInput !="scissors"){
    // convert the prompt value to lower case by .toLowerCase()
    userInput=prompt("Invalid Value! Rock, Paper or Scissors?").toLowerCase();;
    }

    return userInput;
}

// make computer pick any 3 values too in a new function called getComputerChoice
function getComputerChoice(){
    // make array comp_val=["rock","paper","scissors"]
    let comp_val=["rock","paper","scissors"];
    // randomize value from 1-3 name that value to x  -> Math.floor(Math.random() * 3);
    x=Math.floor(Math.random() * 3);
    // select any data from 'comp_val' using comp_val[x] into new variable called 'computerSelection'
    computerSelection=comp_val[x];
    return computerSelection;
}


// send the user & comp value to a new function called playRound
function playRound(user,comp){
    // make a variable win_det=0
    let win_det=0;
    let draw_det=0;
    // create logic to determine winner
        // if st. to determine who won if won then win_det+=1
        // display win/lose and respective message of why defeated
        if ((user === "rock") && (comp === "paper")) {
            alert("Computer Wins! Paper wraps around Rock to immobilize it.");
            win_det = -1;
          } else if ((user === "rock") && (comp === "scissors")) {
            alert("You Win! Rock smashes Scissors.");
            win_det = 1;
          } else if ((user === "paper") && (comp === "rock")) {
            alert("You Win! Paper wraps around Rock to immobilize it.");
            win_det = 1;
          } else if ((user === "paper") && (comp === "scissors")) {
            alert("Computer Wins! Scissors cuts Paper.");
            win_det = -1;
          } else if ((user === "scissors") && (comp === "rock")) {
            alert("Computer Wins! Rock smashes Scissors.");
            win_det = -1;
          } else if ((user === "scissors") && (comp === "paper")) {
            alert("You Win! Scissors cuts paper.");
            win_det = 1;
          } else {
            alert("Draw");
            draw_det = 1;
          }
          
          return [win_det, draw_det];
        }



// create new function called game and call 'playRound' 5 times
function game() {
    // create a score track system with initial value being 0 -> score_player=0, score_comp=0 & score_draw=0
    let score_player = 0;
    let score_comp = 0;
    let score_draw = 0;
    let gameTime=parseInt(prompt("How many times would you like to play?"))
    for (let i = 0; i < gameTime; i++) {
      let userChoice = userPrompt();
      let compChoice = getComputerChoice();
      let [win_det, draw_det] = playRound(userChoice, compChoice);
  
        // if the value 'win_det' is 1 then score_player +=1 else score_comp +=1
      if (win_det === 1) {
        score_player++;
      } else if (win_det === -1) {
        score_comp++;
      } else {
        score_draw++;
      }
    }
    
    console.log(`Player score: ${score_player}`);
    console.log(`Computer score: ${score_comp}`);
    console.log(`Draws: ${score_draw}`);
  }
  
  game();