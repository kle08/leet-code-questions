// smallest diff
// input - 2 arrays of integers
// output - an array of 2 values from each array that has the smallest diff between them
// the purpose of this algo is to determine what 2 values, 1 from each array to find the diff between them
// example [2,3,15,20], [40,30,25, 21]
// should return [20,21];
// best way to tackle this type of problem is to use the 2 pointer method
// compare each indexies to determine to move the poiter up on either array

function smallestDiff(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let idx1 = 0;
  let idx2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    let firstNum = arr1[idx1];
    let secNum = arr2[idx2];
    if (firstNum < secNum) {
      current = secNum - firstNum;
      idx1++;
    } else if (secNum < firstNum) {
      current = firstNum - secNum;
      idx2++;
    } else {
      return [firstNum, secNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secNum];
    }
  }
  return smallestPair;
}