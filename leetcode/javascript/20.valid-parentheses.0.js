/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses
 *
 * algorithms
 * Easy (33.68%)
 * Total Accepted:    267.7K
 * Total Submissions: 795K
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 * 
 */

const map = {
  ')': '(',
  ']': '[',
  '}': '{'
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let leftStack = [];
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].indexOf(s[i]) > -1) {
      leftStack.push(s[i]);
    } else if ([')', ']', '}'].indexOf(s[i]) > -1) {
      if (leftStack.length === 0) {
        return false;
      }
      let left = leftStack.pop();
      if (left !== map[s[i]]) {
        return false;
      }
    }
  }

  if (leftStack.length > 0) {
    return false;
  }

  return true;
};