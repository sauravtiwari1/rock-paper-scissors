// prompt user to select rock, paper or scissors
    // convert the prompt value to lower case by .toLowerCase()
    // create logic if value != to rock/paper/scissor then execute prompt

// make computer pick any 3 values too in a new function called getComputerChoice
    // make array comp_val=["rock","paper","scissors"]
    // randomize value from 1-3 name that value to x  -> Math.floor(Math.random() * 3);
    // select any data from 'comp_val' using comp_val[x] into new variable called 'computerSelection'

// send the user & comp value to a new function called playRound
    // create logic to determine winner
        // make a variable win_det=0
        // if st. to determine who won if won then win_det+=1
        // display win/lose and respective message of why defeated

// create new function called game and call 'playRound' 5 times
    // create a score track system with initial value being 0 -> score_player=0 & score_comp=0
        // if the value 'win_det' is 1 then score_player +=1 else score_comp +=1 