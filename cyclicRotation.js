// An array A consisting of N integers is given. 
// Rotation of the array means that each element is shifted right by one index, 
// and the last element of the array is moved to the first place.
//  For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] k = 1
//  (elements are shifted right by one index and 6 is moved to the first place).


//I - array and number of shifts
//O - array that is shifted
//C- O(n)
//E 


function cyclicRotation(A, K) {
  let size = A.length;
  let tempArr = [];
  if (K === 0 || K < 0 || size === 0) {
    return tempArr;
  }
  if (size === 1) {
    return A;
  }
  for (let i = 0; i < size; i++) {
    tempArr[(i + K) % size] = A[i];
  }
  return tempArr;
}

console.log(cyclicRotation([1, 2, 3, 4,], 2))

    // size var
    // temp arr
    //condition where if k is 0 return the temp arr
    // if size is 1 return A
    // loop A 
    // determine index by algo i + shift % size assign it to a[i]
    // return temp arr
