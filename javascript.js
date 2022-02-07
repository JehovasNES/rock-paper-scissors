function computerPlay(){
    let choice = ["rock", "paper", "scissors"]
    choiceMade = choice[Math.floor(Math.random() *  choice.length)];
    return choiceMade;
}

console.log(computerPlay());

const rock = "rock";
const paper = "paper";
const scissors = "scissors";