// Game score
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
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let humanWin = false;
    if (humanChoice == computerChoice) {
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
    
    return humanWin ? `You win! ${humanChoice} beats ${computerChoice}` : `You lose! ${computerChoice} beats ${humanChoice}`;
}

console.log(playRound());
console.log('Human Score: ' + humanScore);
console.log('Computer Score: ' + computerScore);

