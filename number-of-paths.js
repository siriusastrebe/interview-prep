// Given a 2-dimensional array of integers in the range [0,1]
// [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ]
//
// Find the number of paths you could take starting from the top-left corner, and ending on the bottom-right corner.
// 0 is walkable, 1 is not
// You can only move up-down-left-right.

function numberOfPaths(grid, position) {
  if (position === undefined) {
    position = {x: 0, y: 0};
  }


  if (position.x === grid.length - 1 && position.y === grid[grid.length - 1].length - 1) {
    return 1;
  }

  let subpaths = 0;
  if (position.x < grid.length - 1 && grid[position.x + 1][position.y] === 0) {
    // Right
    // console.log('right');
    subpaths += numberOfPaths(grid, {x: position.x + 1, y: position.y});
  }
  if (position.y < grid[position.x].length - 1 && grid[position.x][position.y + 1] === 0) {
    // Down
    // console.log('down');
    subpaths += numberOfPaths(grid, {x: position.x, y: position.y + 1});
  }

  return subpaths;
}


let g = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]

console.log('Number of paths', g, numberOfPaths(g));


g = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 0, 0]
]
console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0, 0],
  [0, 0]
]

console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
console.log('Number of paths', g, numberOfPaths(g));

g = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]
console.log('Number of paths', g, numberOfPaths(g));
