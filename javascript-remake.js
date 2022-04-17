//computer selection - retained from previous code

function cInput(){
    option = ["ROCK", "PAPER", "SCISSORS"]
    cSelect = option[Math.floor(Math.random() * option.length)];
    return cSelect;
}

pInput = "";

const rock = document.querySelector('#rock');
rock.onclick = () => pInput = "ROCK", playRound();

const paper = document.querySelector('#paper');
paper.onclick = () => pInput = "PAPER", playRound();

const scissors = document.querySelector('#scissors');
scissors.onclick = () => pInput = "SCISSORS", playRound();