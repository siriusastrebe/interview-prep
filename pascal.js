// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


function getRow(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  if (rowIndex === 1) {
    return [1, 1]
  }
  if (rowIndex > 1) {
    const previousRow = getRow(rowIndex - 1);
    const currentRow = [1];
    for (let i=0; i<previousRow.length - 1; i++) {
      const cell = previousRow[i] + previousRow[i+1];
      currentRow.push(cell);
    }
    currentRow.push(1);
    return currentRow;
  }
}

for (let i=0; i<20; i++) {
  console.log(getRow(i));
}
