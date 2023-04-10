"use strict"


function getComputerChoice() {
    let randNum = () => Math.floor(Math.random() * 3);
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    return CHOICES[randNum()];
}

    let playerScore =  0;
    let computerScore = 0;

function playGame(playerSelection, computerSelection) {
    let playerPrompt = prompt('Please enter rock, paper, or scissors');
    playerSelection = playerPrompt.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    //* TO CHECK SELECTIONS
    // console.log(playerSelection, computerSelection);

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock!');
     playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!');
     playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper!');
     playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!');
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beats Paper!');
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors!');
        computerScore += 1;
    } else {
        console.log(`It's a tie!`);
    }
} 
// Play 5 rounds then declare a winner
function game() {
    let rounds = 1;
    for (let i = rounds; i <= 5; i++) {
        playGame();
        console.log(`Your score: ${playerScore} Computer score: ${computerScore}`);
        if (i === 5) {
            if (playerScore > computerScore) {
                console.log(`You win 🏆`);
            } else if (computerScore > playerScore) {
                console.log(`Computer wins 🏆`);
            } else {
                console.log(`It's a tie 🤷‍♀️`);
            }
        }
    }
}

game();

// TODO Make scoring system