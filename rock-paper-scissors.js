// Global variables
let humanScore = 0;
let computerScore = 0;
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// Create random integer from 0 to (max - 1):
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Get computer's choice
function getComputerChoice() {
    let choice = getRandomInt(3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'something went wrong';
    }
}

// Get user's choice
function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors?');
    choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    }
    return 'Invalid choice';
}

// Play one round
function playRound(humanChoice, computerChoice) {

    let humanWin = false;
    if (humanChoice == computerChoice) {
        ++humanScore;
        ++computerScore;
        return `It's a tie! you both chose ${humanChoice}`;
    }
    switch (humanChoice) {
        case 'rock':
            humanWin = (computerChoice == 'paper') ? false : true;
            break;
        case 'paper':
            humanWin = (computerChoice == 'scissors') ? false : true;
            break;
        case 'scissors':
            humanWin = (computerChoice == 'rock') ? false : true;
            break;
        default:
            return humanChoice;
    }
    humanWin ? ++humanScore : ++computerScore;
    addResultMessage(humanWin ? `You win! ${humanChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${humanChoice}`);
    return humanWin ? `You win! ${humanChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${humanChoice}`;
}

// Plays a full game with 5 rounds:
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        btnRock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
        btnPaper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
        btnScissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});
        
        updateScore();
    }
    showFinalResult();
}

// playGame();

function addResultMessage(message) {
    const div = document.querySelector("#results");
    let resultMessage = document.createElement("p");
    resultMessage.textContent = message;
    div.appendChild(resultMessage);
}

function updateScore() {
    let score = document.querySelector("#score");
    score.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;    
}

function showFinalResult() {
    const div = document.querySelector("#results");
    let score = document.querySelector("#score");
    let finalResult = document.createElement("h1");
    if (humanScore == 5) {
        finalResult.textContent = "YOU WIN!";
    } else {
        finalResult.textContent = "YOU LOSE!";
    }
    div.insertBefore(finalResult,score);
}

