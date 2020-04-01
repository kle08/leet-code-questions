// move target elements to the end 
// algo basically just asking to move all the target elements to the end of the array 
// input is an array of int and target value 
// example [1,2,1,3,4,1] , 1 (target )
// output - [2,3,4,1,1,1]
// Edge case - most be in the same array not in a new array 
// ask if it needs to be in the same array or not if not then the solution is easier 

// // easiest solution if you can use a new array straight forward 
// T - O(n) space O(1) where n is the length of the array

// function moveToEnd(arr, target) {
//   const newArr = [];
//   for (const move of arr) {
//     if (move === target) {
//       newArr.push(move);
//     } else {
//       newArr.unshift(move);
//     }
//   }
//   return newArr;
// }

// algo that makes it a little more diff by only using the same array 
// to use 2 pointers to solve this propblem
// T - O(n) space O(1) where n is the length of the array
function moveToEnd(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (i < j && arr[j] === target) j--;
    if (arr[i] === target) swap(i, j, arr);
    i++;
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

console.log(moveToEnd([1, 2, 3, 1, 1, 4], 1));