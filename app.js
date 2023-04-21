const rockChoice = document.getElementById("rockBtn");
const paperChoice = document.getElementById("paperBtn");
const scissorsChoice = document.getElementById("scissorsBtn");
const scoreboard = document.querySelector('.scoreboard');
const div = document.createElement('div');
const score = document.createElement('div');

rockChoice.addEventListener('click', () => handleClick("rock"));
paperChoice.addEventListener('click', () => handleClick("paper"));
scissorsChoice.addEventListener('click', () => handleClick("scissors"));

function getComputerChoice() {
    const myArray = ["Rock", "Paper", "Scissors"];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    div.classList.add('result');
    div.textContent = result;
    scoreboard.appendChild(div);
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        result = "draw";
    }
    else {
        if (computerSelection == "paper") {
            if (playerSelection == "rock") {
                result = "computer";
            }
            else {
                result = "player";
            }
        }
        else if (computerSelection == "rock") {
            if (playerSelection == "paper") {
                result = "player";
            }
            else {
                result = "computer";
            }
        }
        else {
            if (playerSelection == "rock") {
                result = "player";
            }
            else {
                result = "computer"
            }
        }
    }
    return result;
}

function game() {
    let computer = 0;
    let player = 0;
    score.classList.add('score');
    score.textContent = player + " " + computer;
    scoreboard.appendChild(score);
}

game();