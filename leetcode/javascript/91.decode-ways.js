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

var dict = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = {};
  for (let i = 1; i <= 10; i++) {
    dp[i] = dict[i];
  }
  for (let i = 0; i < s.length; i++) {
    
  }
};

numDecodings()
