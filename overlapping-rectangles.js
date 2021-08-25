// How to check if two rectangles overlap with each other? (solution)

let r1 = {top: 100, left: 100, bottom: 0, right: 400} 
let r2 = {top: 200, left: 200, bottom: 0, right: 500} 

function overlapping(r1, r2) {
  if (r1.right < r2.left || r1.left > r2.right || r1.top < r2.bottom || r1.bottom > r2.top) {
    return false;
  } else {
    return true;
  }
}

// This is really overcomplicating it
// function overlapping(r1, r2) {
//   if (r1.top >= r2.bottom && r1.top <= r2.top && r1.left >= r2.left && r1.left <= r2.right) {
//     // top-left intersects
//     return true;
//   }
// 
//   if (r1.bottom >= r2.bottom && r1.bottom <= r2.top && r1.right >= r2.left && r1.right <= r2.right) {
//     // bottom-right intersects
//     return true;
//   }
// 
//   if (r2.top >= r1.bottom && r2.top <= r1.top && r2.left >= r1.left && r2.left <= r1.right) {
//     // top-left intersects
//     return true;
//   }
// 
//   if (r2.bottom >= r1.bottom && r2.bottom <= r1.top && r2.right >= r1.left && r2.right <= r1.right) {
//     // bottom-right intersects
//     return true;
//   }
// 
//   return false;
// }
console.log('Overlapping', r1, r2, overlapping(r1, r2));


r2 = {top: 200, bottom: 101, left: 100, right: 200}
console.log('Overlapping', r1, r2, overlapping(r1, r2));
