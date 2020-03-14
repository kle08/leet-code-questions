// insertion sort 
// space - O(n)
// Time - O(n^2)
// basically insertion sort is whre you start on index 1 and compare to the next index and swap 
// left side is slowing sorting to the right side 

function inserSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[j];
  array[i] = temp;
}