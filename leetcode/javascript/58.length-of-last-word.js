/*
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word
 *
 * algorithms
 * Easy (31.84%)
 * Total Accepted:    155.2K
 * Total Submissions: 487.1K
 * Testcase Example:  '""'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * 
 * For example, 
 * Given s = "Hello World",
 * return 5.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let max = 0;
  while (i >= 0 && s[i] === ' ') {
    i--;
  }
  while (i >= 0 && s[i] !== ' ') {
    max++;
    i--;
  }
  return max;
};
