const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1 // or use possibleChoices.length

    if( randomNumber === 1) {
        computerChoice = 'rock';
    }
    else if(randomNumber === 2){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissor';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a draw !!!';
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win !!!';
    }
    else if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lose !!!';
    }
    else if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you win !!!';
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose !!!';
    }
    else if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you lose !!!';
    }
    else if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'you win !!!';
    }
    resultDisplay.innerHTML = result;
}