// Step 2

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Step 3

function getHumanChoice() {

    let humanChoice = prompt('Please chose in the following ("rock, paper, scissor")').toLowerCase();

    return humanChoice;
}

// Step 4

let humanScore    = 0;
let computerScore = 0;

// Step 5

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        console.log("You Win!", `${humanChoice}` + " beats " + `${computerChoice}`);
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        console.log("You Win!", `${humanChoice}` + " beats " + `${computerChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        console.log("You Win!", `${humanChoice}` + " beats " + `${computerChoice}`);
    } else if (humanChoice === computerChoice) {
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        console.log("Draw!");
    } else {
        console.log("You Loss!", `${computerChoice}` + " beats " + `${humanChoice}`);
    }
}

const humanSelection    = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human Choice: ",humanSelection);
console.log("Computer Choice: ",computerSelection);

playRound(humanSelection, computerSelection);