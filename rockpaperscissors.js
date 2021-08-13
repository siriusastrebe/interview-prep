const input = process.argv[2]
const hidden = rockPaperScissors();

let win;
if (input === 'rock') {
  if (hidden === 'scissors') {
    win = true;
  } else if (hidden === 'paper') {
    win = false;
  }
}
if (input === 'paper') {
  if (hidden === 'rock') {
    win = true;
  } else if (hidden === 'scissors') {
    win = false;
  }
}
if (input === 'scissors') {
  if (hidden === 'paper') {
    win = true;
  } else if (hidden === 'rock') {
    win = false;
  }
}

let string = 'Opponent uses ' + hidden + ' you ';
if (win === true) string += 'win!';
if (win === false) string += 'lose!';
if (win === undefined) string += 'tie!';
console.log(string);


function rockPaperScissors() {
  const rand = Math.random();
  if (rand < 0.33) {
    return 'rock';
  } else if (rand < 0.66) {
    return 'paper';
  } else if (rand < 0.99) {
    return 'scissors'
  } else {
    return rockPaperScissors(); // Try again, for statistical accuracy
  }
}
