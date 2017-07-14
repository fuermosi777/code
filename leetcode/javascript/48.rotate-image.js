function swap(matrix, row, col) {
  let n = matrix.length;
  let iRow = col;
  let iCol = n - row - 1;
  let jRow = n - row - 1;
  let jCol = n - col - 1;
  let kRow = n - col - 1;
  let kCol = row;
  let t = matrix[kRow][kCol];
  matrix[kRow][kCol] = matrix[jRow][jCol];
  matrix[jRow][jCol] = matrix[iRow][iCol];
  matrix[iRow][iCol] = matrix[row][col];
  matrix[row][col] = t;
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length / 2 | 0; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      swap(matrix, i, j);
    }
  }
};