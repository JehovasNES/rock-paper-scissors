//computer selection - retained from previous code

function cInput(){
    option = ["ROCK", "PAPER", "SCISSORS"]
    cSelect = option[Math.floor(Math.random() * option.length)];
    return cSelect;
}

pInput = "";
pScore = 0;
cScore = 0;

const rock = document.querySelector('#rock');
rock.onclick = () => {
    pInput = "ROCK";
    document.getElementById('pChoice').innerText = 'ROCK';
}
const paper = document.querySelector('#paper');
paper.onclick = () => {
    pInput = "PAPER";
    document.getElementById('pChoice').innerText = 'PAPER';
}
const scissors = document.querySelector('#scissors');
scissors.onclick = () => {
    pInput = "SCISSORS";
    document.getElementById('pChoice').innerText = 'SCISSORS';
}

//moving playRound() into a button press

const startButton = document.querySelector('#startBtn');
startButton.onclick = () => {
    //console.log(pInput);
    pSelect = pInput;
    cSelect = cInput();
    playRound();
    scoreKeep(pScore, cScore);
}

function playRound(pSelect, cSelect) {
    cSelect = cInput();
    pSelect = pInput;
   
    console.log(pSelect);
    console.log(cSelect);
    
    if (pSelect == cSelect) {
        return;
    }
    else if (
        (pSelect == "ROCK" && cSelect == "PAPER") ||
        (pSelect == "PAPER" && cSelect == "SCISSORS") ||
        (pSelect == "SCISSORS" && cSelect == "ROCK")
    ){
     ++cScore;
    const currentcScore = document.querySelector('#cScore').innerHTML = `${cScore}`;
    return
    }
    else (
        (pSelect == "ROCK" && cSelect == "SCISSORS") ||
        (pSelect == "PAPER" && cSelect == "ROCK") ||
        (pSelect == "SCISSORS" && cSelect == "PAPER")
    );  pScore++;
        const currentpScore = document.querySelector('#pScore').innerHTML = `${pScore}`;
    return;
} 

function scoreKeep(pScore, cScore) {
    if (pScore == 5)
        alert("YOU WON!");
    else if (cScore == 5)
        alert("YOU LOST");
    else return;
}