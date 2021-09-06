// Check if a binary tree is a bst or not.


function isBst(tree, max, min) {
  if (max === undefined) { max = Infinity }
  if (min === undefined) { min = -Infinity }

  if (tree.value > max || tree.value < min) {
    return false;
  }

  
  if (tree.left) {
    if (!isBst(tree.left, tree.value, min)) {
      return false;
    }
  }

  if (tree.right) {
    if (!isBst(tree.right, max, tree.value)) {
      return false;
    }
  }

  return true;
}


let tree;
tree = {value: 4, left: {value: 2, left: {value: 1}, right: {value: 3}}, right: {value: 6, left: {value: 5}, right: {value: 8}}}
console.log('Is bst');
console.log(tree);
console.log(isBst(tree));
console.log('\n\n');

tree = {value: 4, left: {value: 2, left: {value: 1}, right: {value: 3}}, right: {value: 3, left: {value: 5}, right: {value: 8}}}
console.log('Is bst');
console.log(tree);
console.log(isBst(tree));
console.log('\n\n');

tree = {value: 2, left: {value: 1}, right: {value: 3}};
console.log('Is bst'); 
console.log(tree);
console.log(isBst(tree));
console.log('\n\n');
