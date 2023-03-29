function getComputerChoice() {
    const myArray = ["Rock", "Paper", "Scissors"];
    return myArray[Math.floor(Math.random() * myArray.length)];
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
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        let text = prompt("Select a choice(Rock, Paper, Scissors): ");
        let computerSelection = getComputerChoice();
        let result = playRound(text, computerSelection);
        console.log(result);
        if (result == "computer") computer++;
        else if (result == "player") player++;
        else {
            draw++;
        }
        console.log("Player points: " + player + ". Computer points: " + computer + ". Draw: " + draw + " times.")
    }
}

game();