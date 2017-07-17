/*
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix
 *
 * Medium (25.70%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 * 
 * 
 * 
 * For example,
 * Given the following matrix:
 * 
 * 
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 
 * 
 * You should return [1,2,3,6,9,8,7,4,5].
 * 
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];
  if (matrix.length === 0) return res;

  let lastDir = 'north';
  let minRow = -1;
  let maxRow = matrix.length;
  let minCol = -1;
  let maxCol = matrix[0].length;
  let lastRow = 0;
  let lastCol = -1;

  while (true) {
    if (lastDir === 'north') {
      lastDir = 'east';
      let i = lastCol + 1;
      if (i >= maxCol) break;
      for (i; i < maxCol; i++) {
        res.push(matrix[lastRow][i]);
      }
      lastCol = i - 1;
      minRow = lastRow;
    } else if (lastDir === 'east') {
      lastDir = 'south';
      let i = lastRow + 1;
      if (i >= maxRow) break;
      for (i; i < maxRow; i++) {
        res.push(matrix[i][lastCol]);
      }
      lastRow = i - 1;
      maxCol = lastCol;
    } else if (lastDir === 'south') {
      lastDir = 'west';
      let i = lastCol - 1;
      if (i <= minCol) break;
      for (i; i > minCol; i--) {
        res.push(matrix[lastRow][i]);
      }
      lastCol = i + 1;
      maxRow = lastRow;
    } else if (lastDir === 'west') {
      lastDir = 'north';
      let i = lastRow - 1;
      if (i <= minRow) break;
      for (i; i > minRow; i--) {
        res.push(matrix[i][lastCol]);
      }
      lastRow = i + 1;
      minCol = lastCol;
    }
  }

  return res;
};
