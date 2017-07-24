/*
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx
 *
 * algorithms
 * Easy (27.74%)
 * Total Accepted:    161.1K
 * Total Submissions: 580.8K
 * Testcase Example:  '0'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x.
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var root = 1;
  var res = 0;
  while (true) {
    res = res + root;
    if (res * res > x && root !== 1) {
      res = res - root;
      root = 1;
    } else if (res * res > x && root === 1) {
      res = res - 1;
      break;
    } else if (res * res === x) {
      break;
    } else {
      root = root * 2;
    }
  }

  return res;
};