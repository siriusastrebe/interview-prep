// Given an m x n matrix, return all elements of the matrix in spiral order.

// Spiral can be done, but there are other shapes to consider. A space-filling curve, like the Hilbert curve can visit each element in a matrix with an even cardinality.
// Spiraling seems like you want to go in a direction until you hit either an edge, a row you've already visited, or a column you've already visited.
// There's an easy way to do this algorithm that takes O(N) storage. Just keep a list of all the visited nodes. Every time you hit an edge or a visited node, turn right.


function stepInDirection(x, y, direction) {
  if (direction === 'right') {
    return {x: x+1, y: y}
  }
  if (direction === 'down') {
    return {x: x, y: y+1}
  }
  if (direction === 'left') {
    return {x: x-1, y: y}
  }
  if (direction === 'up') {
    return {x: x, y: y-1}
  }
}
function turnRight(direction) {
  if (direction === 'right') {
    return 'down';
  }
  if (direction === 'down') {
    return 'left';
  }
  if (direction === 'left') {
    return 'up';
  }
  if (direction === 'up') {
    return 'right';
  }
}

function spiral (matrix, x, y, direction, visited) {
  x = x || 0;
  y = y || 0;
  visited = visited || [];
  direction = direction || 'right';

  visited.push(`${x},${y}`);

  const forwardStep = stepInDirection(x, y, direction);
  const rightStep = stepInDirection(x, y, turnRight(direction));

  if (matrix[forwardStep.y] && matrix[forwardStep.y][forwardStep.x] && visited.indexOf(`${forwardStep.x},${forwardStep.y}`) === -1) {
    return spiral(matrix, forwardStep.x, forwardStep.y, direction, visited);
  } else if (matrix[rightStep.y] && matrix[rightStep.y][rightStep.x] && visited.indexOf(`${rightStep.x},${rightStep.y}`) === -1) {
    return spiral(matrix, rightStep.x, rightStep.y, turnRight(direction), visited);
  } else {
    return visited;
  }
}

function getValue(matrix, coords) {
  return matrix[coords.split(',')[1]][coords.split(',')[0]];
}



matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiral(matrix).map(coords => getValue(matrix, coords)));
matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiral(matrix).map(coords => getValue(matrix, coords)));
