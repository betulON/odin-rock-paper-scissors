let score = 0;
let numOfPlays = 0;

function computerPlay() {
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    let imgClass = ".computers-move ." + choice.toLowerCase();
    let img = document.querySelector(imgClass);
    let imgs = document.querySelectorAll("img");
    imgs.forEach(element => {
        element.style.border = "solid black";
    });
    img.style.border = "solid red";
    return choice;
}

function playRound(playerSelection, computerSelection) {
    numOfPlays++;
    if (numOfPlays >= 5) { 
        numOfPlays = 0;
        const result = document.querySelector(".result");
        let scoreText;
        if (result.hasChildNodes()) {
            scoreText = result.firstChild;
        } else {
            scoreText = document.createElement("div");
            scoreText.classList.add("scoreText");
            result.appendChild(scoreText);
            scoreText.style.fontSize = "32px";
            scoreText.style.border = "solid magenta";
            scoreText.style.padding = "16px";
            scoreText.style.color = "white";
        }
        scoreText.textContent = "Score: " + score;
        score = 0;
        
    }
    let buttons = document.querySelectorAll("button");
    buttons.forEach(element => {
        element.style.border = "";
    });

    let pressedButton = document.querySelector("." + playerSelection.toLowerCase());
    pressedButton.style.border = "solid blue";
    
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
    if (result === 1) {
        score++;
    }
}
