/*
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways
 *
 * algorithms
 * Medium (19.55%)
 * Total Accepted:    125.3K
 * Total Submissions: 640.8K
 * Testcase Example:  '""'
 *
 * 
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * 
 * Given an encoded message containing digits, determine the total number of
 * ways to decode it.
 * 
 * 
 * 
 * For example,
 * Given encoded message "12",
 * it could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * 
 * The number of ways decoding "12" is 2.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === '') return 0;
  if (s[0] === '0') return 0;

  let i = 1;
  let cta = 1;
  let ctb = 0;
  let hasZero = false;
  while (i < s.length) {
    let a = cta;
    let b = ctb;
    if (s[i] !== '0') {
      cta = a + b;
      hasZero = false;
    } else if (!hasZero) {
      cta = 0;
      hasZero = true;
    } else {
      return 0;
    }
    if (parseInt(s[i - 1] + s[i]) <= 26) {
      ctb = a;
    } else {
      ctb = 0;
    }
    i++;
  }
  return cta + ctb;
};
