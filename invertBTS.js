// invert binary tree
// createa function to flip a binary tree
// input is a tree 
// ex:      1       
//       /   \
//       2    3 
//      /\    /\
//     4  5   6 7
// output - 
// ex:      1       
//       /   \
//       3    2 
//      /\    /\
//     6  7   4 5

// // recursion way to solve it T - O(n), S - O(d)
// function invertBT(tree) {
//   if (tree === null) return;
//   swapLeftRight(tree);
//   invertBT(tree.left);
//   invertBT(tree.right);
// }

// function swapLeftRight(tree) {
//   const left = tree.right;
//   tree.left = tree.right;
//   tree.right = left;
// }

/// iterate version 
function invertBT(tree) {
  const que = [tree];
  while (que.length) {
    const current = que.shift();
    if (current === null) continue;
    swapLeftRight(current);
    que.push(current.left);
    que.push(current.right);
  }
}
function swapLeftRight(tree) {
  const left = tree.right;
  tree.left = tree.right;
  tree.right = left;
}