function computerPlay() {
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let result = -1;
    
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection == "SCISSORS") {
                result = 1;
            } else if (computerSelection == "PAPER") {
                result = 0;
            }
            break;

        case "PAPER":
            if (computerSelection == "SCISSORS") {
                result = 0;
            } else if (computerSelection == "ROCK") {
                result = 1;
            }
            
            break;

        case "SCISSORS":
            if (computerSelection == "ROCK") {
                result = 0;
            } else if (computerSelection == "PAPER") {
                result = 1;
            }
            break;
    
        default:
            break;
    }
    if (result == 1) {
        console.log("You win!");
    }else if (result == 0) {
        console.log("You lost!");
    }else {
        console.log("It's a tie...");
    }

    return result;
}

function game() {

    let score = 0;
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Please give your choice: ");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            score++;
        }
    }
    console.log("Score: ");
    console.log(score);
    
}