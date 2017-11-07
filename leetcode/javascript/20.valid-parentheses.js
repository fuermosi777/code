/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses
 *
 * algorithms
 * Easy (33.43%)
 * Total Accepted:    251.2K
 * Total Submissions: 747.5K
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 * 
 */

let map = {
  '(': ')',
  '[': ']',
  '{': '}'
};

let rightItems = [')', ']', '}'];

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (Object.keys(map).indexOf(ch) > -1) {
      stack.push(ch);
    } else if (rightItems.indexOf(ch) > -1) {
      let l = stack.pop();
      if (!map.hasOwnProperty(l) || map[l] !== ch) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

