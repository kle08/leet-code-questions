// BST traversal 
// wrte 3 fx using in-order, preorder and post order tree traversal
// in-order 
// input - tree
// output - an array of the tree that is from least to greatest 
//pre-order (dfs)
// input - tree
// output - array that the root is the first index then start left side of the tree
// until null left side then right side of the left child.
// then right side of the tree
// post-order (bfs)
// input - tree
// output - array where the first indes of the array is the furthest left leaf goes up then the irght side and last idx is the root

function inOrderTrav(tree, array) {
  if (tree !== null) {
    inOrderTrav(tree.left, array);
    array.push(tree.value);
    inOrderTrav(tree.right, array);
  }
  return array;
}

function preOrderTrav(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTrav(tree.left, array);
    preOrderTrav(tree.right, array);
  }
  return array;
}

function postOrderTrav(tree, array) {
  if (tree !== null) {
    postOrderTrav(tree.left, array);
    postOrderTrav(tree.right, array);
    array.push(tree.value, array)
  }
  return array;
}