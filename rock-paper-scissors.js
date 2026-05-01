// Global variables
let humanScore = 0;
let computerScore = 0;

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
    return humanWin ? `You win! ${humanChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${humanChoice}`;
}

// Plays a full game with 5 rounds:
function playGame() {
    console.log('Game starts! your score is ' + humanScore + ' and the computer score is ' + computerScore);
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    console.log('Human score: ' + humanScore + ' | Computer score: ' + computerScore);
}

playGame();

