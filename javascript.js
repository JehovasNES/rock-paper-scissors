

function computerChoice(){
    let choice = ["rock", "paper", "scissors"]
    choiceMade = choice[Math.floor(Math.random() *  choice.length)];
    return choiceMade;
}



function playRound(playerSelect, computerSelect) {
    playerSelect = playerSelect.toUpperCase();
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

function score(playerScore, computerScore) {
    if (playerScore == 5)
        return("You Won the Game!")
    else (computerScore == 5)
        return("You lost the Game!");
}


const playerSelect = "Paper"
const computerSelect = computerChoice();
console.log(computerSelect);
console.log(playRound(playerSelect, computerSelect));