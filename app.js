let computer = 0;
let player = 0;

const rockChoice = document.getElementById("rockBtn");
const paperChoice = document.getElementById("paperBtn");
const scissorsChoice = document.getElementById("scissorsBtn");
const scoreboard = document.querySelector('.scoreboard');
const div = document.createElement('div');
const score = document.createElement('div');

score.classList.add('score');
score.textContent = "Player: " + player + " Computer: " + computer;
scoreboard.appendChild(score);

rockChoice.addEventListener('click', () => handleClick('ROCK'));
paperChoice.addEventListener('click', () => handleClick('PAPER'));
scissorsChoice.addEventListener('click', () => handleClick('SCISSORS'));

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
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    div.classList.add('result');
    div.textContent = "PLAYER SELECTS: " + playerSelection + " COMPUTER SELECTS: " + computerSelection + " = " + result;
    scoreboard.appendChild(div);
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
        result = 'PLAYER WINS!';
    }
    if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
        computer++;
        result = 'COMPUTER WINS!';
    }
    return result;
}
