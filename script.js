let submitBtn = document.querySelector("#numRounds");
let playground = document.getElementById("playground");
let rounds = document.getElementById("rounds");
let formGroup = document.querySelector(".form-group");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;
let scorePlayer = document.getElementById("playerScore");
let scoreComputer = document.getElementById("computerScore");
let info = document.getElementById("info");
let _prompt = document.getElementById("prompt");
let computerPlayed = document.querySelector("#computerPlayed");
let playerPlayed = document.querySelector("#playerPlayed");
let resetButton;

function getNumRounds() {

    submitBtn.addEventListener('click', function getRounds() {
        if(Number(rounds.value) > 0){
            playground.style.display = "block";
            formGroup.style.visibility = "hidden"
            console.log(rounds.value)
            return rounds.value;
        }else{
            _prompt.innerHTML = "<mark>please enter number of rounds to play</mark>"
            setTimeout(function(){ _prompt.innerHTML=" " }, 4000);
            console.log("please enter number of rounds to play");
        }
    });
    
}
getNumRounds();
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

let timesPlayed = 1;

function rockPaperScissors(computerSelection, playerSelection) {
    console.log(" round is "+ rounds.value);
    let numRound = rounds.value;
    computerSelection = computerPlay();
    console.log("computerSelection: " + computerSelection)
    playerSelection = this.dataset.button;
    console.log(playerSelection)
    if (timesPlayed === 1){
        computerPlayed.textContent = "Computer played: ";
        playerPlayed.textContent = "Player played: ";
    }

    if (computerSelection === playerSelection) {
        console.log("Draw! Please Play again!");
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";
        // return "Draw! Please Play again!";

    } else if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock") && 
        (computerScore <= numRound || playerScore <= numRound)) {
        scorePlayer.textContent = ++playerScore;
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";
        if (playerScore>=numRound) {
            info.textContent = "Player wins with " + (playerScore-computerScore) + " points";
            setGameOver();
            
        }
        console.log("player wins")
        // return playerScore;

    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper") &&
         (computerScore <= numRound || playerScore <= numRound)) {
        scoreComputer.textContent = ++computerScore;
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";

        if (computerScore>=numRound) {
            info.textContent = "Computer wins with " + (computerScore - playerScore) + " points";
            setGameOver();
        }
        console.log("computer wins")
        // return computerScore;

    } else {
        console.log("incorrect input please choose either Rock, Paper or Scissors");
    }

    timesPlayed ++
    // rounds.value = '';
    rounds.focus();
}

function setGameOver() {
    rockBtn.removeEventListener('click', rockPaperScissors);

    paperBtn.removeEventListener('click', rockPaperScissors);

    scissorsBtn.removeEventListener('click', rockPaperScissors);

    resetButton = document.createElement('button');
    resetButton.setAttribute('class', 'btn resetBtn');
    resetButton.textContent = 'Start new game';
    playground.prepend(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    timesPlayed = 1;
    playerScore = 0;
    computerScore = 0;

    const resetscores = document.querySelectorAll('.score span');
    for(let i = 0; i < resetscores.length; i++) {
        resetscores[i].textContent = '0';
    }
    const resetplayed = document.querySelectorAll('.played span');
    for(let i = 0; i < resetplayed.length; i++) {
        resetplayed[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    playground.style.display = "none";
    formGroup.style.visibility = "visible";
    rounds.value = '';
    info.textContent = "";

    rockBtn.addEventListener('click', rockPaperScissors);

    paperBtn.addEventListener('click', rockPaperScissors);

    scissorsBtn.addEventListener('click', rockPaperScissors);
    rounds.focus();

    // lastResult.style.backgroundColor = 'white';

    // randomNumber = Math.floor(Math.random()*100) + 1;
}