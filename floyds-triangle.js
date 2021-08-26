// 1
// 2 	3
// 4 	5 	6
// 7 	8 	9 	10
// 11 	12 	13 	14 	15 

function printFloyd(rows) {
  let row = 1; 
  let i = 1;
  let printed = [];
  while (row <= rows) {
     printed[row-1] = [];
    for (let j=0; j<row; j++) {
      printed[row-1].push(String(i));
      i++;
    }
    row++;
    
  }

  let largest = printed[printed.length-1][printed[printed.length-1].length-1];
  let digits = Math.floor(Math.log10(largest)) + 1;

  printed.forEach((p) => {
    let line = '';
    p.forEach((n) => {
      line += n;
      let characters = Math.floor(Math.log10(n)) + 1;
      for (let i=characters; i<=digits+1; i++) {
        line += ' ';
      }
    });
    console.log(line);
  });
}

printFloyd(50);
