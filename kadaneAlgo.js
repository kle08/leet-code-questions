// Kadane Algo
// purpose of kadane algo is to find the max consecutive sum in a sub array in the array
// input - array of numbers 
// output - the sum of the highest value of consecutive numbers in hte array/sub array
// t - O(n)
// s - O(1)
// [ 3,5,-9,1,3-2,7,2]
// = 9 (cuz it sumed up 7,2 as the highest value)

function kadane(array) {
  let maxEnding = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.lenth; i++) {
    const num = array[i];
    maxEnding = Math.max(num, maxEnding + num);
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
}