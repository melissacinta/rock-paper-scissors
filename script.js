let submitBtn = document.querySelector("#numRounds");
let playground = document.getElementById("playground");
let rounds = document.getElementById("rounds");
let formGroup = document.querySelector(".form-group");
let playerScore = 0;
let computerScore = 0;
let scorePlayer = document.getElementById("playerScore");
let scoreComputer = document.getElementById("computerScore");
let info = document.getElementById("info");
let _prompt = document.getElementById("prompt");
let computerPlayed = document.querySelector("#computerPlayed");
let playerPlayed = document.querySelector("#playerPlayed");
let resetButton;
let computerBtns = document.querySelectorAll('.computer-btn')
let playerBtns = document.querySelectorAll('.player-btn')
let timesPlayed = 1;

// function to remove animation from both player and computer
function removeTransition(e) {
    if(e.propertyName !== "transform") return;//skip if it is not a transform;
    this.classList.remove('playing');
}

// function to animate computer selection
function animateComputerBtns(e) {
    let computerBtn = [...computerBtns]
    if (e === "rock"){
        computerBtn[0].classList.add('playing')
    }else if(e === "paper"){
        computerBtn[1].classList.add('playing')
    }else{
        computerBtn[2].classList.add('playing')
    }
}

//function to get winning number
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

// function to get randomized computer selection
function computerPlay() {
    let randomGuess = Math.floor(Math.random() * 1000) + 1;
    if (randomGuess % 3 === 0) {
        animateComputerBtns("rock")
        return "rock";
    } else if (randomGuess % 3 === 1) {
        animateComputerBtns("paper")
        return "paper";
    } else {
        animateComputerBtns("scissors")
        return "scissors"
    }
}
function updatedLogs(e) {
    if (e === 1){//to initialize logging output on first play
        computerPlayed.textContent = "Computer played: ";
        playerPlayed.textContent = "Player played: ";
    }else{
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";
    }
    return 
}

// main game body this function controls the game
function rockPaperScissors(computerSelection, playerSelection) {
    // assign the winning number in this case rounds to numRound
    let numRound = rounds.value;

    // get computer Selection
    computerSelection = computerPlay();

    // get player selection
    playerSelection = this.dataset.button;

    // add the class playing to the clicked button
    this.classList.add('playing');

    if (computerSelection === playerSelection) {
        //if both players play the same thing then just update logs and do nothing else
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";
    } else if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock") && 
        (computerScore <= numRound || playerScore <= numRound)) {
            //but if player plays the winning hand while the winning score has not been 
            // reached, increment player's score & update logs
        scorePlayer.textContent = ++playerScore;
        
        if (playerScore>=numRound) {
            // now if player's score is equal to the winning score update the info section and call the game over function.
            info.textContent = "Player wins with " + (playerScore-computerScore) + " points";
            setGameOver();
        }

    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper") &&
         (computerScore <= numRound || playerScore <= numRound)) {
             //but if computer plays the winning hand while the winning score has not been 
            // reached, increment computer's score & update logs
        scoreComputer.textContent = ++computerScore;
        computerPlayed.textContent += computerSelection+ ", ";
        playerPlayed.textContent += playerSelection+ ", ";

        if (computerScore>=numRound) {
            // and if player's score is equal to the winning score update the info section and call the game over function.
            info.textContent = "Computer wins with " + (computerScore - playerScore) + " points";
            setGameOver();
        }

    } else {
        console.log("incorrect input please choose either Rock, Paper or Scissors");
    }

    // increment the number of times played by 1
    timesPlayed ++

    // focucs on the round input box
    rounds.focus();
   // add event listeners to selected player button to remove transitions
   this.addEventListener('transitionend', removeTransition);
    
    // add event listeners to selected computer button to remove transitions
    computerBtns.forEach(computerBtn => computerBtn.addEventListener('transitionend', removeTransition));
}

// function to show that the game is over and display reset button
function setGameOver() {
    playerBtns.forEach(playerBtn => playerBtn.removeEventListener('click', rockPaperScissors))

    resetButton = document.createElement('button');
    resetButton.setAttribute('class', 'btn resetBtn');
    resetButton.textContent = 'Start new game';
    playground.prepend(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// function the refreshes the game for a new play
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
    playerBtns.forEach(playerBtn => playerBtn.addEventListener('click', rockPaperScissors))
    rounds.focus();
}

// add event listeners to all players button to call the game method
playerBtns.forEach(playerBtn => playerBtn.addEventListener('click', rockPaperScissors))


getNumRounds();//get the winning number