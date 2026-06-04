function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1;

    if (n === 1) {
        return "Rock";
    } else if (n === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("What is your choice?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make human input case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        alert("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    alert(
        `Human Score: ${humanScore}\nComputer Score: ${computerScore}`
    );
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

const resultsDiv = document.querySelector("#results");

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        resultsDiv.textContent = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultsDiv.textContent = "You win!";
    } else {
        resultsDiv.textContent = "You lose!";
    }
}

playRound(humanChoice, computerChoice);
