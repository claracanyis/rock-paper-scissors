// Global variables
let humanScore = 0;
let computerScore = 0;
const div = document.querySelector("#results");
const buttons = document.querySelector("#buttons");
const btnStart = document.querySelector("#start");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

let finalResult = document.createElement("h1");

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
        addResultMessage(`It's a tie! you both chose ${humanChoice}`);
        updateScore();
    } else {
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
        };

        humanWin ? ++humanScore : ++computerScore;
        addResultMessage(humanWin ? `You win! ${humanChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${humanChoice}`);
        updateScore();
    }
   
    if (humanScore == 5 || computerScore == 5) {showFinalResult()};
}

btnRock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
btnPaper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
btnScissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});


function addResultMessage(message) {
    let resultMessage = document.createElement("p");
    resultMessage.textContent = message;
    div.appendChild(resultMessage);
}

function updateScore() {
    let score = document.querySelector("#score");
    score.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;    
}

function showFinalResult() {
    let score = document.querySelector("#score");
    
    if (humanScore == 5 && computerScore == 5) {
        finalResult.textContent = "YOU TIE!";
    } else if (humanScore == 5) {
        finalResult.textContent = "YOU WIN!";
    } else {
        finalResult.textContent = "YOU LOSE!";
    }
    div.insertBefore(finalResult,score);

    // Reset game
    btnStart.setAttribute("style", "display: inline-block");
    btnRock.setAttribute("style", "display: none");
    btnPaper.setAttribute("style", "display: none");
    btnScissors.setAttribute("style", "display: none");
}

function resetGame() {
    if (humanScore != 0 || computerScore != 0) {
        for (let element of div.querySelectorAll("p")) {
            element.remove();
        }
        finalResult.remove();
        humanScore = 0;
        computerScore = 0;
        updateScore();
    }
}

btnStart.addEventListener('click',() => {
    resetGame();
    btnStart.setAttribute("style", "display: none");
    btnRock.setAttribute("style", "display: inline-block");
    btnPaper.setAttribute("style", "display: inline-block");
    btnScissors.setAttribute("style", "display: inline-block");
});
