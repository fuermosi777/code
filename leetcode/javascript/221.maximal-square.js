function getSquare(matrix, i, j) {
  if (matrix[i][j] === '0') return 0;

  let max = 1;
  let n = 1;
  while (i + n < matrix.length && j + n < matrix[0].length) {
    for (let a = j; a <= n + j; a++) {
      if (matrix[i + n][a] === '0') return max;
    }
    for (let a = i; a <= i + n; a++) {
      if (matrix[a][j + n] === '0') return max;
    }
    max++;
    n++;
  }

  return max;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      max = Math.max(getSquare(matrix, i, j), max);
    }
  }
  return max * max;
};