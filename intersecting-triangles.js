// A triangle intersects if at least one is true:
// 1) One triangle's center lies within the other triangle's edges
// 2) Any of the edges of one triangle intersects with the edges of the other triangle

function trianglesOverlap(t1, t2) {
  const edges1 = getEdges(t1);
  const edges2 = getEdges(t2);

  // One triangle's center lies within the other triangle's edges

  // Any edges intersects
  for (let i=0; i<edges1.length; i++) {
    const e1 = edges1[i]
    for (let j=0; j<edges2.length; j++) {
      const e2 = edges2[j];
      const intersects = intersects(e1, e2);
      if (intersects) {
        return true;
      }
    }
  }
}

function intersects(e1, e2) {
  const m1 = getSlope(e1[0], e1[1]);
  const m2 = getSlope(e2[0], e2[1]);
  const b1 = getYIntercept(m1, e1[0]);
  const b2 = getYIntercept(m2, e2[0]);
  const min1 = min(e1);
  const max1 = max(e1);
  const min2 = min(e2);
  const max2 = max(e2);
  let x;
  let y;

  if (min1.x > max2.x || min1.y > max2.y || min2.x > max1.x || min2.y > max2.y) {
    // Line segment boundaries do not overlap.
    return false
  }

  if ((m1 === Infinity || m1 === -Infinity) && (m2 === Infinity || m2 === -Infinity)) {
    return e1[0].x === e2[0].x; // Both vertical
  }

  if (m1 === m2) {
    return b1 === b2; // Share the same slope
  }

  if (Math.abs(m1) === Infinity) {
    x = e1[0].x;
    y = b2 + m2 * x;
  } else if (Math.abs(m2) === Infinity) {
    x = e2[0].x;
    y = b1 + m1 * x;
  } else {
    x = (b2 - b1) / (m1 - m2);
    y = b1 + m1 * x;
  }

  if (x <= max1.x && x >= min1.x && x <= max2.x && x >= min2.x &&
      y <= max1.y && y >= min1.y && y <= max2.y && y >= min2.y) {
    return true;
  } else {
    // Intersects beyond the boundaries of the line segments
    return false;
  }
}
function getSlope(p1, p2) {
  // Returns the slope. Infinity means it's vertical.
  return (p1.y - p2.y) / (p1.x - p2.x)
}
function getYIntercept(slope, p1) {
  return p1.y - slope * p1.x;
}
function getEdges(t) {
  return [[t[0], t[1]], [t[1], t[2]], [t[2], t[0]]];
}
function min(e) {
  return {x: Math.min(e[0].x, e[1].x), y: Math.min(e[0].y, e[1].y)}
}
function max(e) {
  return {x: Math.max(e[0].x, e[1].x), y: Math.max(e[0].y, e[1].y)}
}

let t1 = [{x: 0, y: 0}, {x: 10, y: 10}, {x: 10, y: 0}];
let t2 = [{x: 5, y: 5}, {x: 15, y: 10}, {x: 15, y: 0}];

console.log('Triangles overlap?', t1, t2, trianglesOverlap(t1, t2));
