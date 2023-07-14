let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorssButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => {
    const scoreCount = document.querySelector('.score');
    const result = document.querySelector('.result');
    let outcome = play('rock',getComputerChoice());
    score(outcome);
    scoreCount.textContent = "Player Score: " + playerScore.toString() + " Computer Score: " + computerScore.toString();
    result.textContent = playToFive(outcome);
});

paperButton.addEventListener('click', () => {
    const scoreCount = document.querySelector('.score');
    const result = document.querySelector('.result');
    let outcome = play('paper',getComputerChoice());
    score(outcome);
    scoreCount.textContent = "Player Score: " + playerScore.toString() + " Computer Score: " + computerScore.toString();
    result.textContent = playToFive(outcome);
});

scissorssButton.addEventListener('click', () => {
    const scoreCount = document.querySelector('.score');
    const result = document.querySelector('.result');
    let outcome = play('scissors',getComputerChoice());
    score(outcome);
    scoreCount.textContent = "Player Score: " + playerScore.toString() + " Computer Score: " + computerScore.toString();
    result.textContent = playToFive(outcome);
});

function getComputerChoice() {
    let moves = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}
  
function play(player, computer) {
    let playerLowerCase = player.toLowerCase();
    let str = '';
    if (playerLowerCase === 'rock' && computer === 'Rock') {
        str = "It's a Tie!";
    } else if (playerLowerCase === 'rock' && computer === 'Paper') {
        str = "You Lose! Paper beats Rock.";
    } else if (playerLowerCase === 'rock' && computer === 'Scissors') {
        str = 'You Win! Rock beats Scissors.';
    } else if (playerLowerCase === 'paper' && computer === 'Rock') {
        str = 'You Win! Paper beats Rock.';
    } else if (playerLowerCase === 'paper' && computer === 'paper') {
        str = "It's a Tie!";
    } else if (playerLowerCase === 'paper' && computer === 'Scissors') {
        str = "You Lose! Scissors beats Paper.";
    } else if (playerLowerCase === 'scissors' && computer === 'Rock') {
        str = "You Lose! Rock beats scissors.";
    } else if (playerLowerCase === 'scissors' && computer === 'Paper') {
        str = "You Win! Scissors beats paper";
    } else {
        str = "It's a Tie!"
    }

    return str;
}

function score(str) {
    let words = str.split(" ");
    if (words[1] === 'Win!') {
        playerScore += 1;
    } else if (words[1] === 'Lose!') {
        computerScore += 1;
    }
}

function playToFive (str) {
    if (playerScore === 5) {
        return 'The Player Wins! Thanks for playing.';
    } else if (computerScore === 5) {
        return 'The Computer Wins! Thanks for playing.';
    } else {
        return str;
    }
}