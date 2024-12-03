// Step 2

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

// Step 3

function getHumanChoice() {

    let humanChoice = prompt('Please chose in the following ("rock, paper, scissors")');

    return humanChoice;
}

console.log(getHumanChoice());

let humanScore    = 0;
let computerScore = 0;