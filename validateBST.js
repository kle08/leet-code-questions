//validate BST
// create a function that it would validate a binary search tree
// input - a tree
// output - boolean
// parent has a middle value where the left child/node is less than parent
// where as right node is greater than parent

class BST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function valBST(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, minVal, maxVal) {
  if (tree === null) return true;
  if (tree.value < minVal && tree.value > maxVal) return false;
  const leftSide = helper(tree.left, minVal, tree.value);
  return leftSide && helper(tree.value, tree.value, maxVal);
}