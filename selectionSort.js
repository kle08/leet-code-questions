// selection sort
// space - O(n)
// time - O(n^2)
// basically iterate each index to find the smallest value once found 
// swap the first index and the smallest index
// then iterate again to find the next smallest and swap 
// repeat

function selecitonSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[startIdx] < array[i]) {
        smallestIdx = i;
      }
      swap(startIdx, smallestIdx, array);
      startIdx++;
    }
    return array;
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}