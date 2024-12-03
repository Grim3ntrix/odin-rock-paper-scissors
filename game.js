function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);

    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

console.log(getComputerChoice());