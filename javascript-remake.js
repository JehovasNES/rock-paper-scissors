//computer selection - retained from previous code

function cInput(){
    option = ["ROCK", "PAPER", "SCISSORS"]
    cSelect = option[Math.floor(Math.random() * option.length)];
    return cSelect;
}

pInput = "";

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

