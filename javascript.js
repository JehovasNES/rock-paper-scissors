function computerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"] //array the three choices
    choiceMade = choice[Math.floor(Math.random() *  choice.length)]; //generate a random number from 0-2 to select an option
    return choiceMade;
}

function playRound(playerSelect, computerSelect) {
    playerSelect = playerSelect.toUpperCase();
    do {
        computerSelect = computerChoice(); //assigns a new choice
        playerInput = window.prompt("Select Rock, Paper, or Scissors?"); //prompts for input
        playerSelect = playerInput.toUpperCase();
        
        console.log(playerSelect); //test for playerSelect
        console.log(computerSelect); //computerSelect
        if (playerSelect == computerSelect) {
            alert("Tie!");
        }
        else if (
            (playerSelect == "ROCK" && computerSelect == "PAPER") ||
            (playerSelect == "PAPER" && computerSelect == "SCISSORS") ||
            (playerSelect == "SCISSORS" && computerSelect == "ROCK")
        ) alert("You Lose! The score is now " + playerScore + "-" + ++computerScore); 
        else if (
            (playerSelect == "ROCK" && computerSelect == "SCISSORS") ||
            (playerSelect == "PAPER" && computerSelect == "ROCK") ||
            (playerSelect == "SCISSORS" && computerSelect == "PAPER")
        ) alert('You Win! The score is now ' + ++playerScore + '-' + computerScore);
        else alert("Please enter a valid choice!");
    } while (playerScore < 5 && computerScore < 5);
        if (playerScore == 5)
            return alert("YOU WON!");
        else
            return alert("YOU LOST");
    
}

/*
function gamewin() {
    if (playerScore = 5)
        alert("YOU WIN!")
    else(computerScore = 5)
        alert("YOU LOSE");
}
*/

let playerScore = 0;
let computerScore = 0;
let playerInput = "";

let playerSelect = playerInput; //convert to playerSelect for playRound function
let computerSelect = computerChoice(); //convert to computerSelect for computerChoice function
console.log(playRound(playerSelect, computerSelect));