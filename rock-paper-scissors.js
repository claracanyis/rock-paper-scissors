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

