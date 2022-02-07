

function computerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"]
    choiceMade = choice[Math.floor(Math.random() *  choice.length)];
    return choiceMade;
}



function playRound(playerSelect, computerSelect) { //Does not seem to reroll computerChoice so it can be run again.
    playerSelect = playerSelect.toUpperCase(); //Dev Console will not run the program if you do not define playerSelect rerun. Seems like normal behavior
    computerSelect = computerSelect.toUpperCase();
    if (playerSelect == computerSelect) {
        return("Tie!");
    }
    else if (
        (playerSelect == "ROCK" && computerSelect == "PAPER") ||
        (playerSelect == "PAPER" && computerSelect == "SCISSORS") ||
        (playerSelect == "SCISSORS" && computerSelect == "ROCK")
    ) return("You Lose! The score is now " + playerScore + "-" + ++computerScore); 
    else if (
        (playerSelect == "ROCK" && computerSelect == "SCISSORS") ||
        (playerSelect == "PAPER" && computerSelect == "ROCK") ||
        (playerSelect == "SCISSORS" && computerSelect == "PAPER")
    ) return('You Win! The score is now ' + ++playerScore + '-' + computerScore);
    else return("Please enter a valid choice!");
}

let playerScore = 0;
let computerScore = 0;

function scoreCount() { //issue that needs to be fixed, doesn't seem to notice the pre-increment so it cannot be used as the primary score method yet
    if (playerScore >= 5)
        return("You Won the Game!")
    else if (computerScore >= 5)
        return("You lost the Game!")
    else
        return("The score is now " + playerScore + "-" + computerScore);
}

let playerInput = window.prompt("Select Rock, Paper, or Scissors?")

console.log(scoreCount())

let playerSelect = playerInput;
const computerSelect = computerChoice();
console.log(computerSelect);
console.log(playRound(playerSelect, computerSelect));