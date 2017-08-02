/*
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary
 *
 * algorithms
 * Easy (32.26%)
 * Total Accepted:    149.3K
 * Total Submissions: 462.9K
 * Testcase Example:  '"0"\n"0"'
 *
 * 
 * Given two binary strings, return their sum (also a binary string).
 * 
 * 
 * 
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let remain = 0;
  let res = '';
  let i = a.length - 1, j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let chi = i >= 0 ? parseInt(a[i]) : 0;
    let chj = j >= 0 ? parseInt(b[j]) : 0;
    let sum = chi + chj + remain;
    if (sum >= 2) {
      sum = sum % 2;
      remain = 1;
    } else {
      remain = 0;
    }
    res = sum + res;
    i--; j--;
  }
  if (remain !== 0) {
    res = 1 + res;
  }
  return res;
};