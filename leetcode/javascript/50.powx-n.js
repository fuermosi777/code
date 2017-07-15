/*
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n
 *
 * Medium (26.45%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '8.88023\n3'
 *
 * Implement pow(x, n).
 * 
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = x;
  if (n === 0) return 1; // edge case
  let isNegative = n < 0;
  if (isNegative) n = -n;

  let c = 1; // cursor
  let r = 1;
  let map = {}; // store all calculated results

  map[1] = x;

  while (r < n) {
    if (r + c <= n) {
      res = res * map[c];
      r = r + c;
      map[r] = res;

      c = c * 2;
    } else {
      c = 1;
    }
  }

  return isNegative ? (1 / res) : res;
};