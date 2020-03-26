// 3 number sum
// input - you have an array and target value 
// output - array of 3 values eqaul to target 
// iterate the array to find the 3 values that would equal to the some 
// [1,2,3,4,5,6] 6 
// [1,2,3]

function threeNumSum(array, target) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === target) {
        triplets.push(array[i], array[left], array[right]);
        left++;
        right++;
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right++;
      }
    }
  }
  return triplets;
}

console.log(threeNumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));