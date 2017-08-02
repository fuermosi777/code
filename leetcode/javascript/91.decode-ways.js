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
  if (s.startsWith('0')) return 0;
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let lastChar = s[0];
  let cta = 1, ctb = 0;
  for (let i = 1; i < s.length; i++) {
    let char = s[i];
    let a = cta;
    let b = ctb;
    if (char !== '0') {
      cta = a + b;
    } else {
      cta = 0;
    }
    if (parseInt(lastChar + char) <= 26) {
      ctb = a;
    } else {
      ctb = 0;
    }

    lastChar = char;
  }

  return cta + ctb;
};
