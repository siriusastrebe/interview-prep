function invert(tree) {
  const swap = tree.left;

  if (tree.right) {
    tree.left = tree.right;
  }
  if (swap) {
    tree.right = swap;
  }

  if (tree.left) {
    invert(tree.left);
  }
  if (tree.right) {
    invert(tree.right);
  }
  return tree;
}


let tree;
tree = {value: 4, left: {value: 2, left: {value: 1}, right: {value: 3}}, right: {value: 6, left: {value: 5}, right: {value: 8}}}
console.log('Inverting tree');
console.log(tree);
console.log(invert(tree));
console.log('\n\n');

tree = {value: 2, left: {value: 1}, right: {value: 3}};
console.log('Inverting tree');
console.log(tree);
console.log(invert(tree));
console.log('\n\n');


