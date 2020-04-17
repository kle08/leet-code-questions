// search in sorted matrix 
// create a fucntion to find the target value in a sorted matrix 
// input - matrix and target
// output - location of the target 
// edge - if the target is not in the martix return [-1, -1]

// constraint - T - O(n + m), S - O(1)

function searchMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1]
}

const mat = [
  [1, 2, 3, 4, 5],
  [11, 21, 31, 41, 51],
  [12, 22, 23, 42, 52],
];

const tar = 51;

console.log(searchMatrix(mat, tar));