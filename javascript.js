

function computerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"] //array the three choices
    choiceMade = choice[Math.floor(Math.random() *  choice.length)]; //generate a random number from 0-2 to select an option
    return choiceMade;
}


function playRound(playerSelect, computerSelect) { //Does not seem to reroll computerChoice so it can be run again.
    playerSelect = playerSelect.toUpperCase(); //Dev Console will not run the program if you do not define playerSelect rerun. Seems like normal behavior
    do {
        computerSelect = computerChoice();
        playerInput = window.prompt("Select Rock, Paper, or Scissors?");
        console.log(scoreCount());
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
    } while (playerScore < 5 && computerScore < 5);
}

let playerScore = 0;
let computerScore = 0;
let sCount = scoreCount();

function scoreCount() { //issue that needs to be fixed, doesn't seem to notice the pre-increment so it cannot be used as the primary score method yet
    if (playerScore >= 5)
        return("You Won the Game!")
    else if (computerScore >= 5)
        return("You Lost the Game!")
    else
        return("The score is now " + playerScore + "-" + computerScore);
}

let playerInput = window.prompt("Select Rock, Paper, or Scissors?") //playerInput here



let playerSelect = playerInput; //convert to playerSelect for playRound function
let computerSelect = computerChoice(); //convert to computerSelect for computerChoice function
console.log(computerSelect);
console.log(playRound(playerSelect, computerSelect));