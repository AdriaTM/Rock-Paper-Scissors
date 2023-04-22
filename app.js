let computer = 0;
let player = 0;

const rockChoice = document.getElementById("rockBtn");
const paperChoice = document.getElementById("paperBtn");
const scissorsChoice = document.getElementById("scissorsBtn");
const restart = document.getElementById("restartBtn");
const scoreboard = document.querySelector('.scoreboard');
const win = document.querySelector('.winnerScreen');
const div = document.createElement('div');
const score = document.createElement('div');

div.classList.add('result');
div.textContent = "Let the battle begin!";
scoreboard.appendChild(div);

score.classList.add('score');
score.textContent = "Player: " + player + " Computer: " + computer;
scoreboard.appendChild(score);

rockChoice.addEventListener('click', () => handleClick('ROCK'));
paperChoice.addEventListener('click', () => handleClick('PAPER'));
scissorsChoice.addEventListener('click', () => handleClick('SCISSORS'));
restart.addEventListener('click', () => initial());


function initial() {
    computer = 0;
    player = 0;
    div.textContent = "Let the battle begin!";
    score.textContent = "Player: " + player + " Computer: " + computer;
    win.textContent = "WHO WILL WIN?";
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function handleClick(playerSelection) {
    if (checkFinished()) return true;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (checkFinished()) {
        update(result);
        return true;
    }
    else update(result);
}

function checkFinished() {
    if (computer === 5) {
        win.textContent = "COMPUTER WINS!!!";
        return true;
    }
    else if (player === 5) {
        win.textContent = "PLAYER WINS!!!";
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === computerSelection) {
        result = "IT'S A DRAW!";
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        player++;
        result = 'PLAYER WINS THIS ROUND!';
    }
    if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
        computer++;
        result = 'COMPUTER WINS THIS ROUND!';
    }
    return result;
}

function update(result) {
    score.textContent = "Player: " + player + " Computer: " + computer;
    div.textContent = result;
}
