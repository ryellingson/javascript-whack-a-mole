// declaring the neccesary variables
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// classic JS function to generate a random number, which we will use to time the moles revealed periods in peep()
// works in milliseconds
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// picks a random hole for the mole to pop up from
// takes a NodeList
function randomHole(holes) {
  // generate a random number in index
  const index = Math.floor(Math.random() * holes.length);
  // use the random number to access an element in the NodeList
  const hole = holes[index];
  // if the same hole is selected twice in a row the function is called again to prevent the repetition
  if (hole === lastHole) {
    return randomHole(holes);
  }
  // saves the reference to which hole was selected last time the function was called
  lastHole = hole;
  return hole;
}

// reveals moles from holes
function peep() {
  // call our randomTime function giving us a time between 200ms and 1s
  const time = randomTime(200, 1000);
  // call our randomHole function
  const hole = randomHole(holes);
  // trigger the css class .up, which animates the mole into view
  hole.classList.add('up');
  
  setTimeout(() => {
    // timeout the mole so it returns to its hole
    hole.classList.remove('up');
    // keeps running peep() until the game timer expires
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  // reset the scoreboard
  scoreBoard.textContent = 0;
  // reset game time
  timeUp = false;
  // reset game score
  score = 0;
  // call peep() which essentially kicks off the game
  peep();
  // sets game timer to 20s
  setTimeout(() => timeUp = true, 20000)
}

function bonk(e) {
  // increments game score
  score++;
  // if mole is hit it will retreat
  this.parentNode.classList.remove('up');
  // displays score
  scoreBoard.textContent = score;
}

// listens for a successful click on revealed mole, if click is successful bonk() is called
moles.forEach(mole => mole.addEventListener('click', bonk));