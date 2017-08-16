/*
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix
 *
 * algorithms
 * Medium (35.07%)
 * Total Accepted:    129.2K
 * Total Submissions: 368.4K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 * 
 * 
 * 
 * 
 * For example,
 * 
 * Consider the following matrix:
 * 
 * 
 * [
 *  [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * 
 * 
 * Given target = 3, return true.
 */

function searchRow(rows, target) {
  let lo = 0, hi = rows.length - 1, k = rows[0].length - 1;
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (rows[mid][0] <= target && target <= rows[mid][k]) {
      return mid;
    } else if (target < rows[mid][0]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

function searchNumber(row, target) {
  let lo = 0, hi = row.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (row[mid] === target) {
      return mid;
    } else if (row[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;

  let rowId = searchRow(matrix, target);
  return searchNumber(matrix[rowId], target) > -1;
};
