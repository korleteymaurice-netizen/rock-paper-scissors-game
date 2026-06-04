function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    resultsDiv.innerHTML = `
        <p>${result}</p>
        <p>Human Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
}

document.querySelector("#rock").addEventListener("click", () => {
    playRound("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
    playRound("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
    playRound("scissors");
});
