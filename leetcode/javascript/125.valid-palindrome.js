/*
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome
 *
 * algorithms
 * Easy (26.10%)
 * Total Accepted:    165.9K
 * Total Submissions: 635.2K
 * Testcase Example:  '""'
 *
 * 
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * 
 * 
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * 
 * 
 * 
 * Note:
 * Have you consider that the string might be empty? This is a good question to
 * ask during an interview.
 * 
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var processed = s.replace(/\W/g, '').toLowerCase();
  for (let i = 0, j = processed.length - 1; i < j; i++, j--) {
    if (processed[i] !== processed[j]) return false;
  }

  return true;
};
