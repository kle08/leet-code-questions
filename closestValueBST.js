// given bst ds find the closest target value 
// input tree, target 
// output  value closest to target 

function findClosestValueBST(tree, target) {
  return helper(tree, target, Infinity);
}
function helper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.node)) {
    closest = tree.value;
  }
  if (target < closest) {
    return helper(tree.left, target, closest)
  }
  if (target > closest) {
    return helper(tree.right, target, closest)
  } else {
    return closest
  }
}

function helper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.vaule) {
      currentNode = currentNode.left
    } else if (target > currentNode.vaule) {
      currentNode = currentNode.right
    } else {
      break;
    }
  }
}