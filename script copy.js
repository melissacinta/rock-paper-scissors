let playerScore = 0;
let computerScore = 0;
let scorePlayer= document.getElementById("playerScore");
let scoreComputer= document.getElementById("computerScore");
let info = document.getElementById("info");

function showClicked() {
    var buttons = document.getElementsByTagName("button");
    var buttonsCount = buttons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function (e) {
            alert(this.id);
            return this.id;
        };
    }
}

function computerPlay() {
    let randomGuess = Math.floor(Math.random() * 3) + 1;
    if (randomGuess === 1) {
        // console.log("rock");
        return "rock";
    } else if (randomGuess === 2) {
        // console.log("paper");
        return "paper";
    } else {
        // console.log("scissors");
        return "scissors"
    }
}

function rockPaperScissors(playerSelection) {
    computerSelection = computerPlay();
console.log(playerSelection)
//     playerSelection = showClicked();
// console.log(playerSelection);
    
    if (computerSelection === playerSelection) {
        console.log("Draw! Please Play again!");
        return "Draw! Please Play again!";
    } else if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")) {
        scorePlayer.textContent = playerScore++;
        console.log("player wins")
        return playerScore;
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        scoreComputer.textContent = computerScore++;

        console.log("computer wins")
        return computerScore;
    } else {
        console.log("incorrect input please choose either Rock, Paper or Scissors");
        return "incorrect input please choose either Rock, Paper or Scissors";
    }
}

function game(id) {
    // let round = parseInt(prompt("enter no of rounds to play"));
    let round = 3;
    
    for (let i = 1; i <= round; i++) {
        rockPaperScissors(id);
    }
    if (playerScore === computerScore) {
        info.textContent = "draw no body wins";
        console.log("draw no body wins ")
    }
    else if (playerScore > computerScore) {
        info.textContent = "player wins with " + playerScore + " points";
        console.log("player wins with " + playerScore + " points")
    } else {
        info.textContent = "computer wins with " + computerScore + " points";
        console.log("computer wins with " + computerScore + " points")
    }
}
// game();