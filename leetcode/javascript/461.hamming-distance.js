/*
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance
 *
 * algorithms
 * Easy (70.14%)
 * Total Accepted:    82.4K
 * Total Submissions: 117.5K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Note:
 * 0 ≤ x, y < 2^31.
 * 
 * 
 * Example:
 * 
 * Input: x = 1, y = 4
 * 
 * Output: 2
 * 
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠       ?   ?
 * 
 * The above arrows point to positions where the corresponding bits are
 * different.
 * 
 * 
 */

/**
 * @param  {number}
 * @return {string}
 */
function toBinary(num) {
  let res = '';
  let s = num;
  while (s > 0) {
    res = s % 2 + res;
    s = s / 2 | 0;
  }
  return res;
}

function zeros(n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += '0';
  }
  return res;
}
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let a = toBinary(x), b = toBinary(y);
  if (a.length > b.length) {
    b = zeros(a.length - b.length) + b;
  } else {
    a = zeros(b.length - a.length) + a;
  }
  let i = a.length - 1;
  let d = 0;
  while (i >= 0) {
    if (a[i] !== b[i]) d++;
    i--;
  }
  return d;
};
