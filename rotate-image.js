// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// 
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function matrixSwap(matrix, a, b) {
  let swap = matrix[a.y][a.x];
  matrix[a.y][a.x] = matrix[b.y][b.x];
  matrix[b.y][b.x] = swap;
}

function rotate(matrix) {
  const n = matrix.length;

  matrixSwap(matrix, {x: 0, y: 0}, {x: 0, y: 2});
  matrixSwap(matrix, {x: 0, y: 2}, {x: 2, y: 2});
  matrixSwap(matrix, {x: 2, y: 2}, {x: 2, y: 0});

  matrixSwap(matrix, {x: 1, y: 0}, {x: 0, y: 1});
  matrixSwap(matrix, {x: 0, y: 1}, {x: 1, y: 2});
  matrixSwap(matrix, {x: 1, y: 2}, {x: 2, y: 1});

  return matrix;
}




matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))
matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotate(matrix))