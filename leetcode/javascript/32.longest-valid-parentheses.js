/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let res = 0;
  let stack = [];
  let st = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (stack.length === 0) {
      st = i + 1;
    } else {
      let j = stack.pop();
      if (stack.length === 0) {
        res = Math.max(res, i - st + 1);
      } else { // crucial part
        res = Math.max(res, i - stack[stack.length - 1]); // very important to understand
      }
    }
  }

  return res;
};