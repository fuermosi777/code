/*
 * [304] Range Sum Query 2D - Immutable
 *
 * https://leetcode.com/problems/range-sum-query-2d-immutable
 *
 * algorithms
 * Medium (25.09%)
 * Total Accepted:    34.1K
 * Total Submissions: 135.7K
 * Testcase Example:  '["NumMatrix","sumRegion","sumRegion","sumRegion"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]'
 *
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle
 * defined by its upper left corner (row1, col1) and lower right corner (row2,
 * col2).
 * 
 * 
 * 
 * The above rectangle (with the red border) is defined by (row1, col1) = (2,
 * 1) and (row2, col2) = (4, 3), which contains sum = 8.
 * 
 * 
 * Example:
 * 
 * Given matrix = [
 * ⁠ [3, 0, 1, 4, 2],
 * ⁠ [5, 6, 3, 2, 1],
 * ⁠ [1, 2, 0, 1, 5],
 * ⁠ [4, 1, 0, 1, 7],
 * ⁠ [1, 0, 3, 0, 5]
 * ]
 * 
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 * 
 * 
 * 
 * Note:
 * 
 * You may assume that the matrix does not change.
 * There are many calls to sumRegion function.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.map = {};
  this.matrix = matrix;

  // init DP
  this.dp = [];
  for (let i = 0; i < this.matrix.length; i++) {
    this.dp[i] = [];
  }

  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      let a = 0, b = 0, c = 0;
      if (i - 1 >= 0) {
        a = this.dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        b = this.dp[i][j - 1];
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        c = this.dp[i - 1][j - 1];
      }
      this.dp[i][j] = this.matrix[i][j] + a + b - c;
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let total = this.dp[row2][col2];
  let a = 0, b = 0, c = 0;
  if (row1 - 1 >= 0) {
    a = this.dp[row1 - 1][col2];
  }
  if (col1 - 1 >= 0) {
    b = this.dp[row2][col1 - 1];
  }
  if (row1 - 1 >= 0 && col1 - 1 >= 0) {
    c = this.dp[row1 - 1][col1 - 1];
  }
  return total - a - b + c;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
