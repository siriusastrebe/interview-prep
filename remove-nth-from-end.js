// How to remove Nth Node from the end of a linked list?
function removeNth(list, n, previous, previousKey) {
  let depth = 0;

  if (Object.keys(list).length > 0) {
    for (let key in list) {
      depth = removeNth(list[key], n, list, key) + 1;
      if (depth === n) {
        previous[previousKey] = list[key];
      }
    }
  }

  return depth;
}

let s = {a: {b: {c: {d: {}}}}}
console.log('Removing 2 from ', JSON.stringify(s), removeNth(s, 2), JSON.stringify(s));  // Need to stringify because console.log will delay evaluation

s = {a: {b: {c: {d: {e: {f: {g: {h: {i: {j: {k: {l: {m: {n: {o: {p: {q: {r: {s: {t: {u: {v: {w: {x: {y: {z: []}}}}}}}}}}}}}}}}}}}}}}}}}}
console.log('Removing 5 from ', JSON.stringify(s), removeNth(s, 5), JSON.stringify(s));
