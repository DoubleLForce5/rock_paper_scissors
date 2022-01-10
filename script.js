// This is a simple game of rock/paper/scissors
  // play against the computer 
  // computer randomly selects either rock/paper/or scissors 
  // the user is then prompted for their input of rock/paper/scissors 
  // compare the two and based on that winner is selected 

// function for the computer selection - randomly select string 'rock', 'paper', or 'scissors'
function computerPlay(){
  // array of string options 
  const computerSelection = ['Rock', 'Paper', 'Scissors'];

  // use math random to randomly choose a number 
  let randomNumber = Math.floor(Math.random() * 3)

  // based on the randomNumber return an element from the computerSelection array
  // console.log(computerSelection.at(randomNumber))
  return computerSelection.at(randomNumber)
}



computerPlay()