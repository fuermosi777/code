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
  return lps(s);
};

function lps(s) {
  if (s === '') return [s, -1, -1];
  if (s.length === 1) return [s, 0, 0];

  let midStr = s.substring(1, s.length - 1);
  let midLps = lps(midStr);
  if (midLps.length === midStr.length) {
    if (s[0] === s[s.length - 1]) {
      return [s, true, true];
    } else {
      return midLps;
    }
  } else if (midLps[1] === 0 && midLps[2] < midLps[0].length - 1) {
    if (s[0] === midLps[0][midLps[2] - 1]) {
      return [s[0] + midLps[0] + midLps[0][midLps[2] - 1], 0, midLps[2]];
    }
  } else if (midLps[1] !== 0 && midLps[2] === midLps[0].length - 1) {

  } else {
    return midLps;
  }
}

console.log(longestPalindrome('abbb'))
