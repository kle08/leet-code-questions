// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// TC = 0(nlogn)

function containsDuplicate(nums) {
  let sortNums = nums.sort((a, b) => a - b);
  let duplicate = false;
  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] === sortNums[i + 1]) {
      duplicate = true;
    }
  }
  return duplicate;
};

// using hash function
//tc= o(1)
function containsDuplicate(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = obj[nums[i]] + 1 || 1;
    if (hash[nums[i]] > 1) {
      return true;
    }
  }
  return false;
}