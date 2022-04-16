function computerInput(){
    option = ["ROCK", "PAPER", "SCISSORS"]
    selection = option[Math.floor(Math.random() *  option.length)];
    return selection;
}

//function playGame(playerSelect, compSelect) {
    playerScore = 0;
    compScore = 0;
    do {
        compSelect = computerInput();
        playerInput = window.prompt("Select Rock, Paper, or Scissors?");
        playerSelect = playerInput.toUpperCase();

        console.log(playerSelect); 
        console.log(compSelect); 

        if (playerSelect == compSelect) {
            alert("Tie!");
        }
        else if (
            (playerSelect == "ROCK" && compSelect == "PAPER") ||
            (playerSelect == "PAPER" && compSelect == "SCISSORS") ||
            (playerSelect == "SCISSORS" && compSelect == "ROCK")
        ) alert("You Lose! The score is now " + playerScore + "-" + ++compScore); 
        else if (
            (playerSelect == "ROCK" && compSelect == "SCISSORS") ||
            (playerSelect == "PAPER" && compSelect == "ROCK") ||
            (playerSelect == "SCISSORS" && compSelect == "PAPER")
        ) alert('You Win! The score is now ' + ++playerScore + '-' + compScore);
        else alert("Please enter a valid choice!");
    } while (playerScore < 5 && compScore < 5);
        if (playerScore == 5)
            return alert("YOU WON!");
        else
            return alert("YOU LOST");
    
}

playerInput = "";
playerSelect = playerInput;
compSelect = computerInput();
console.log(playGame(playerSelect, compSelect));