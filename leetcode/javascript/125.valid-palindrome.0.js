/*
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome
 *
 * algorithms
 * Easy (26.19%)
 * Total Accepted:    169.2K
 * Total Submissions: 645.9K
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
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (!/[a-z0-9]/i.test(s[i])) {
      i++;
    } else if (!/[a-z0-9]/i.test(s[j])) {
      j--;
    } else if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++; j--;
    } else {
      return false;
    }
  }
  return true;
};