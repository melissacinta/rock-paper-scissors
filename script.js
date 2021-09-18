let submitBtn = document.querySelector(".form-group");
let playground = document.getElementById("playground");
let rounds = document.getElementById("rounds");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;
let scorePlayer = document.getElementById("playerScore");
let scoreComputer = document.getElementById("computerScore");
// let info = document.getElementById("info");
// submitBtn.onclick = (e) => {
//     playground.style.display = "block";
// }

// function game() {
//     let round = 4;

//     for (var i = 1; i <= round; i++) {

//         (function (index) {
//             console.log(index)
            
//         })(i)

//     }

//     if (playerScore == 3 || computerScore  == 3) {
//         info.textContent = "this game has been won";
//         console.log("this game has been won ")
//     }
//     // else if (playerScore > computerScore) {
//     //     info.textContent = "player wins with " + playerScore + " points";
//     //     console.log("player wins with " + playerScore + " points")
//     // } 
//     else {
//         info.textContent = "computer wins with " + computerScore + " points";
//         console.log("computer wins with " + computerScore + " points")
//     }
    
// }

// game();

function computerPlay() {
    let randomGuess = Math.floor(Math.random() * 1000) + 1;
    if (randomGuess % 3 === 0) {
        // console.log("rock");
        return "rock";
    } else if (randomGuess % 3 === 1) {
        // console.log("paper");
        return "paper";
    } else {
        // console.log("scissors");
        return "scissors"
    }
}
rockBtn.addEventListener('click', rockPaperScissors);

            paperBtn.addEventListener('click', rockPaperScissors);

            scissorsBtn.addEventListener('click', rockPaperScissors);


function rockPaperScissors(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    console.log("computerSelection: " + computerSelection)
    let computerPlayed = document.querySelector("#computerPlayed");
    let playerPlayed = document.querySelector("#playerPlayed");
    playerSelection = this.dataset.button;
    console.log(playerSelection)

    if (computerSelection === playerSelection) {
        console.log("Draw! Please Play again!");
        computerPlayed.textContent = computerSelection;
        playerPlayed.textContent = playerSelection;
        return "Draw! Please Play again!";

    } else if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock") && (computerScore <= 5 || playerScore <= 5)) {
        scorePlayer.textContent = ++playerScore;
        computerPlayed.textContent = computerSelection;
        playerPlayed.textContent = playerSelection;
        if (playerScore>=5) {
            info.textContent = "player wins with " + playerScore + " points";
        }
        console.log("player wins")
        return playerScore;

    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper") && (computerScore <= 5 || playerScore <= 5)) {
        scoreComputer.textContent = ++computerScore;
        computerPlayed.textContent = computerSelection;
        playerPlayed.textContent = playerSelection;

        if (computerScore>=5) {
            info.textContent = "computer wins with " + computerScore + " points";
        }
        console.log("computer wins")
        return computerScore;

    } else {
        console.log("incorrect input please choose either Rock, Paper or Scissors");
        return "incorrect input please choose either Rock, Paper or Scissors";
    }
}