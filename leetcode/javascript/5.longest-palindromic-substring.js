/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.15%)
 * Total Accepted:    271.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example:
 * 
 * Input: "babad"
 * 
 * Output: "bab"
 * 
 * Note: "aba" is also a valid answer.
 * 
 * 
 * 
 * Example:
 * 
 * Input: "cbbd"
 * 
 * Output: "bb"
 *
 *
 *   cbbbaabb
 *   bbaabbbc
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  let maxLeft = 0, maxRight = 0, maxLen = 1;
  for (let len = 2; len <= s.length; len++) {
    for (let start = 0; start <= s.length - len; start++) {
      let i = start, j = start + len - 1;
      if (len === 2) dp[i][j] = s[i] === s[j];
      else {
        dp[i][j] = (
          s[i] === s[j] && 
          dp[i + 1][j - 1]
        )
      }
      if (dp[i][j] && len > maxLen) {
        maxLeft = i;
        maxRight = j;
        maxLen = len;
      }
    }
  }

  return s.substring(maxLeft, maxRight + 1);
};
