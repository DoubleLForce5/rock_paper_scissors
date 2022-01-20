const main = document.querySelector('main');
const gameDetails = document.createElement('h2');
gameDetails.setAttribute('style', 'white-space: pre;');
gameDetails.className = 'game-details';
gameDetails.textContent = 'You vs Me \r\n';
gameDetails.textContent += 'best of 5'

const readyPlayer1 = document.createElement('h3');
readyPlayer1.className = 'ready-player-1'
readyPlayer1.textContent = "Ready Player 1"

const startBtn = document.createElement('button');
startBtn.className = 'start-button';
startBtn.textContent = 'start'

main.append(gameDetails)
main.append(readyPlayer1)
main.append(startBtn)

let result = null;



// function for the computer selection - randomly select string 'rock', 'paper', or 'scissors'
function computerPlay(){
  // array of string options 
  const computerOptions = ['Rock', 'Paper', 'Scissors'];

  // use math random to randomly choose a number 
  let randomNumber = Math.floor(Math.random() * computerOptions.length)

  // based on the randomNumber return an element from the computerOptions array
  // console.log(computerOptions[randomNumber])

  let compSelection = computerOptions[randomNumber].toLocaleLowerCase()
  return compSelection
}

// function that plays a single round of rock, paper, scissors and takes in parameters - the computers selection and the plays selection 
function playRound(playerSelection, computerSelection){

  // lowercase both the computer choice and the users selection so there are no errors 
  // let playerSelectionLowerCased = playerSelection.toLowerCase();
  // console.log(playerSelectionLowerCased)
  // let computerSelectionLowerCased = computerSelection.toLowerCase();
  // console.log(computerSelectionLowerCased)

  // compare the computer's choice with the user's choice 
  if(playerSelection === computerSelection){
    //console.log('Tie!')
    result = 'Tie!'
  } 

  if(playerSelection === 'rock' && computerSelection === 'scissors'){
    //console.log('You win!')
    result = 'You win!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    //console.log('You Lose!')
    result = 'You Lose!'
  } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    //console.log('You Lose!')
    result = 'You Lose!'
  } else if(playerSelection === 'paper' && computerSelection === 'rock'){
    //console.log('You Win!')
    result = 'You win!'
  } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    //console.log('You win!')
    result = 'You win!'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    //console.log('You Lose!')
    result = 'You Lose!'
  }

  console.log(result)
}

// function game() {
//   let comp = 0
//   let player = 0

//   // call function 5 times for the game 
//    for(i = 0; i < 5; i++){
//     const playerSelection = usersPlay();
//     const computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection)

//     if(result === 'You win!'){
//       player++
//     } else if (result === 'You Lose!'){
//       comp++
//     } 
//    }

// // console.log(comp)
// // console.log(player)

// if (player > comp){
//   console.log('YOU WIN THE GAME!!!')
// } else if (player < comp){
//   console.log('Sorry, you lost')
// } else {
//   console.log('TIE!!!!')
// }

// }

function usersPlay() {
  let userInput = prompt("Rock, Paper, or Scissors?")

  let lowerCased = userInput.toLocaleLowerCase()
  return lowerCased
}

// game()
// const playerSelection = usersPlay();
// const computerSelection = computerPlay();
// playRound(playerSelection, computerSelection)