// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

const one = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const three = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

function islands(grid) {
  const seen = [];
  let islands = 0;
  for (let row=0; row<grid.length; row++) {
    for (let col=0; col<grid[row].length; col++) {
      const key = row + '-' + col;
      if (grid[row][col] === '1' && !seen[key]) {
        islands = islands + 1;
        visitConnectedIsland(grid, seen, row, col);
      }
    }
  }
  return islands;
}

function visitConnectedIsland(grid, seen, row, col) {
  const key = row + '-' + col;
  if (seen[key] === true) {
    return
  } else {
    if (grid[row][col] === '1') {
      seen[key] = true;
      if (row > 0) {
        visitConnectedIsland(grid, seen, row - 1, col);
      }
      if (row < grid.length - 1) {
        visitConnectedIsland(grid, seen, row + 1, col);
      }
      if (col > 0) {
        visitConnectedIsland(grid, seen, row, col - 1);
      }
      if (col < grid[row].length - 1) {
        visitConnectedIsland(grid, seen, row, col + 1);
      }
    }
  }
}

console.log(islands(one));
console.log(islands(three));
