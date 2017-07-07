/*
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses
 *
 * Hard (23.00%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '""'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * 
 * For "(()", the longest valid parentheses substring is "()", which has length
 * = 2.
 * 
 * 
 * Another example is ")()())", where the longest valid parentheses substring
 * is "()()", which has length = 4.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length <= 1) return 0;
  let stack = []; // left '(' pos
  let dp = [];
  let isAppend = true;

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      dp[i] = {length: 0, lo: 0, hi: 0};
      if (s[i] === '(') {
        stack.push(i);
      }
    } else if (stack.length === 0) {
      if (s[i] === '(') {
        stack.push(i);
      }
      dp[i] = dp[i - 1];
    } else if (s[i] === '(') {
      stack.push(i);
      dp[i] = dp[i - 1];
    } else { // )
      let pos = stack.pop();
      console.log(pos);
      if (pos - 1 >= 0 && dp[pos - 1].length > 0 && dp[pos - 1].hi === pos - 1) {
        let l = dp[pos - 1].length + i - pos + 1;
        dp[i] = {length: dp[pos - 1].length + i - pos + 1, lo: dp[pos - 1].lo, hi: i};
      } else {
        let l = i - pos + 1;
        if (l >= dp[i - 1].length) {
          dp[i] = {length: i - pos + 1, lo: pos, hi: i};
        } else {
          dp[i] = dp[i - 1];
        }
      }
    }
    console.log(s.substring(0, i + 1), stack, dp[i]);
  }
  
  return dp[s.length - 1].length;
};

// longestValidParentheses('()');
// longestValidParentheses(')()(((())))(');
// longestValidParentheses(')(())))(())())');
longestValidParentheses('(()))()()()()(');

