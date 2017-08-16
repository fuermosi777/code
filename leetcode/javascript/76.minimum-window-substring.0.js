/*
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring
 *
 * algorithms
 * Hard (25.26%)
 * Total Accepted:    107.9K
 * Total Submissions: 426.9K
 * Testcase Example:  '"a"\n"a"'
 *
 * 
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * 
 * 
 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * 
 * 
 * Minimum window is "BANC".
 * 
 * 
 * 
 * Note:
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * 
 * 
 * If there are multiple such windows, you are guaranteed that there will
 * always be only one unique minimum window in S.
 * 
 */
/**
 * Round 2
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let match = {};
  for (let char of t) {
    if (match.hasOwnProperty(char)) {
      match[char] += 1;
    } else {
      match[char] = 1;
    }
  }

  let unique = Object.keys(match).length;
  let uniqueTodo = 0;
  let queue = [];
  let minLength = s.length;
  let min = s;
  let matching = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    queue.push(ch);

    if (match.hasOwnProperty(ch)) {
      if (matching.hasOwnProperty(ch)) {
        matching[ch] += 1;
      } else {
        matching[ch] = 1;
      }

      if (matching[ch] === match[ch]) uniqueTodo++;

      if (uniqueTodo >= unique) {
        while ((matching[queue[0]] > match[queue[0]] || !match[queue[0]]) && queue.length > 0) {
          let del = queue.shift();
          if (matching.hasOwnProperty(del)) {
            matching[del] -= 1;
          }
        }

        if (queue.length < minLength) {
          minLength = queue.length;
          min = queue.join('');
        }
      }
    }
  }
  if (uniqueTodo < unique) return '';

  return min;
};
