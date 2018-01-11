/**
 * A square matrix is said to be symmetric matrix if the transpose of the matrix is same as the given matrix. Symmetric matrix can be obtain by changing row to column and column to row.
 *
 *
 * 
Input : 1 2 3
        2 1 4
        3 4 3
Output : Yes

Input : 3 5 8
        3 4 7
        8 5 3
Output : No

 */

function isSymmetric(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  if (matrix.length !== matrix[0].length) return false;
  if (matrix.length === 1 && matrix[0].length === 1) return true;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== matrix[j][i]) return false;
    }
  }

  return true;
}

console.log(isSymmetric([
  [1],
]))

console.log(isSymmetric([
  [1, 2, 3],
  [2, 1, 4],
  [3, 4, 3]
]))

console.log(isSymmetric([
  [1, 2, 3, 4],
  [2, 1, 4, 5],
  [3, 4, 3, 6],
  [4, 5, 7, 6]
]))