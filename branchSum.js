// you have a tree structure, how would you calculate the sum of eaach branch
// I - tree structure
// o - array of the total sum of each branch 
// e - o(n), s- o(n)
// c - if there is only 1 node return 

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSum = (root) => {
  const sums = [];
  calBranchSum(root, 0, sums);
  return sums
}

const calBranchSum = (node, runningSum, sums) => {
  if (!node) return;

  let newRuningSum = node.value + runningSum;

  if (!node.left && !node.right) {
    sums.push(newRuningSum);
    return;
  }
  calBranchSum(node.left, newRuningSum, sums);
  calBranchSum(node.right, newRuningSum, sums);

}