// This is a simple game of rock/paper/scissors
  // play against the computer 
  // computer randomly selects either rock/paper/or scissors 
  // the user is then prompted for their input of rock/paper/scissors 
  // compare the two and based on that winner is selected 

// function for the computer selection - randomly select string 'rock', 'paper', or 'scissors'
function computerPlay(){
  // array of string options 
  const computer = ['Rock', 'Paper', 'Scissors'];

  // use math random to randomly choose a number 
  let randomNumber = Math.floor(Math.random() * 3)

  // based on the randomNumber return an element from the computerSelection array
  // console.log(computerSelection.at(randomNumber))
  return computer.at(randomNumber)
}

// function that plays a single round of rock, paper, scissors and takes in parameters - the computers selection and the plays selection 
function playRound(playerSelection, computerSelection){
  // lowercase both the computer choice and the users selection so there are no errors 
  let playerSelectionLowerCased = playerSelection.toLowerCase();
  console.log(playerSelectionLowerCased)
  let computerSelectionLowerCased = computerSelection.toLowerCase();
  console.log(computerSelectionLowerCased)

  // need a variable to hold the results of the game 
  let result = ''

  // compare the computer's choice with the user's choice 
  if(playerSelectionLowerCased === computerSelectionLowerCased){
    console.log('Tie!')
    result = 'Tie!'
  } 

  if(playerSelectionLowerCased === 'rock' && computerSelectionLowerCased === 'scissors'){
    console.log('You win!')
    result = 'You win!'
  } else if (playerSelectionLowerCased === 'rock' && computerSelectionLowerCased === 'paper'){
    console.log('You Lose!')
    result = 'You Lose!'
  } else if(playerSelectionLowerCased === 'paper' && computerSelectionLowerCased === 'scissors'){
    console.log('You Lose!')
    result = 'You Lose!'
  } else if(playerSelectionLowerCased === 'paper' && computerSelectionLowerCased === 'rock'){
    console.log('You Win!')
    result = 'You win!'
  } else if(playerSelectionLowerCased === 'scissors' && computerSelectionLowerCased === 'paper'){
    console.log('You win!')
    result = 'You win!'
  } else if (playerSelectionLowerCased === 'scissors' && computerSelectionLowerCased === 'rock'){
    console.log('You Lose!')
    result = 'You Lose!'
  }

  // return a string letting the user know who wins or loses 
  console.log(result)
  return result
}

// hard coded player selection for testing purposes 
const playerSelection = 'rock';
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection)