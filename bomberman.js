// Given a two-dimensional array, if any element within is zero, make its whole row and column zero.

function bomberman(arr) {
  const zeroes = [];

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      const cell = arr[i][j];
      if (cell === 0) {
        zeroes.push({row: i, col: j});
      }
    }
  }

  zeroes.forEach((data) => {
    zeroOut(arr, data.row, data.col);
  });

  return arr;
}

function zeroOut(arr, row, col) {
  for (let i=0; i<arr.length; i++) {
    // Zero out horizontally
    arr[i][col] = 0;
  }

  for (let i=0; i<arr[row].length; i++) {
    // Zero out vertically
    arr[row][i] = 0;
  }
}

let arr;
arr = [[1, 1, 1, 0],
       [1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1]];

console.log('Zeroing out all rows/columns that contain 0');
console.log(JSON.parse(JSON.stringify(arr)));
console.log(bomberman(arr));


arr = [[1, 1, 1, 1],
       [1, 1, 0, 1],
       [1, 0, 1, 1],
       [1, 1, 1, 1]];

console.log('Zeroing out all rows/columns that contain 0');
console.log(JSON.parse(JSON.stringify(arr)));
console.log(bomberman(arr));


arr = [[0, 1, 1, 1],
       [1, 0, 1, 1],
       [1, 1, 0, 1],
       [1, 1, 1, 1]];

console.log('Zeroing out all rows/columns that contain 0');
console.log(JSON.parse(JSON.stringify(arr)));
console.log(bomberman(arr));


arr = [[0, 1, 1, 1],
       [1, 1, 0, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 0]];

console.log('Zeroing out all rows/columns that contain 0');
console.log(JSON.parse(JSON.stringify(arr)));
console.log(bomberman(arr));
