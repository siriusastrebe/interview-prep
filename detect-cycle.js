// How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle?

function hasCycle(list, next) {
  // An old algorithm I learned in computer science. Tortise and Hare, or Floyd's Cycle Finding algorithm.
  // Can tell you if there is a cycle, but not where the cycle begins
  // Expects a list and a next string for traversing to next
  if (next === undefined) next = 'next';

  let left = list;
  let right = list[next];

  while (left[next] && right[next] && right[next][next]) {
    if (left === right) {
      return true;
    }

    left = left[next];
    right = right[next][next];
  }

  return false;
}

/*
let s;
s = {v: 0, next: null}
console.log('Has cycle', s, hasCycle(s));

s = {v: 0, next: null}
s.next = s;
console.log('Has cycle', s, hasCycle(s));

s = {v: 0, next: {v: 1, next: null}}
console.log('Has cycle', s, hasCycle(s));

s = {v: 0, next: {v: 1, next: null}}
s.next.next = s;
console.log('Has cycle', s, hasCycle(s));

s = {v: 0, next: {v: 1, next: {v: 2, next: null}}}
console.log('Has cycle', s, hasCycle(s));

s = {v: 0, next: {v: 1, next: {v: 2, next: null}}}
s.next.next.next = s.next;
console.log('Has cycle', s, hasCycle(s));
*/

// It seems like detecting where the cycle starts requires some sort of backtracking. 
// 
function locateCycle(list, next) {
  // Locate cycle using above method while also storing all links the fast visits. Once a cycle is found, backtrack on both 
  if (next === undefined) {
    next = 'next';
  }

  let left = list;
  let right = list[next];
  let counter = 0;
  let visited = [left];

  while (left[next] && right[next] && right[next][next]) {
    visited.push(right);

    if (left === right) {
      break;
    }

    counter++;
    visited.push(right[next]);

    left = left[next];
    right = right[next][next];
  }

  if (left !== right) {
    return null;
  }

  let leftCount = counter;
  let rightCount = visited.length - 1;

  while (leftCount >= 0 && visited[leftCount] === visited[rightCount]) {
    leftCount--;
    rightCount--;
  }

  return visited[rightCount];
}

s = {v: 0, next: null}
s.next = s;
console.log('Locate cycle starting at 0', locateCycle(s));

s = {v: 0, next: {v: 1, next: null}}
s.next.next = s;
console.log('Locate cycle starting at 1', locateCycle(s));

s = {v: 0, next: {v: 1, next: {v: 2, next: null}}}
s.next.next.next = s.next;
console.log('Locate cycle starting at 2', locateCycle(s));

