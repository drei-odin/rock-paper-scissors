"use strict"


function getComputerChoice() {
    let randNum = () => Math.floor(Math.random() * 3);
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    return CHOICES[randNum()];
}

function playGame(playerSelection, computerSelection) {
    let playerPrompt = prompt('Please enter rock, paper, or scissors');
    playerSelection = playerPrompt.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    //* TO CHECK SELECTIONS
    console.log(playerSelection, computerSelection);

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock!')
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!')
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beats Paper!')
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors!')
    } else {
        console.log(`It's a tie!`)
    }
} 

playGame();

// TODO Make scoring system