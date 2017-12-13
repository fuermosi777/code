/*
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string
 *
 * algorithms
 * Medium (41.73%)
 * Total Accepted:    43K
 * Total Submissions: 102.8K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 
 * Given an encoded string, return it's decoded string.
 * 
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 * 
 * 
 * You may assume that the input string is always valid; No extra white spaces,
 * square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any
 * digits and that digits are only for those repeat numbers, k. For example,
 * there won't be input like 3a or 2[4].
 * 
 * 
 * Examples:
 * 
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  let res = '';
  let number = '';
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (/^\d$/.test(ch)) {
      number += ch;
    } else if (ch === '[') {
      stack.push({ct: Number(number), d: ''});
      number = '';
    } else if (ch === ']') {
      let top = stack.pop();
      let content = decode(top.ct, top.d);
      if (stack.length > 0) {
        stack[stack.length - 1].d += content;
      } else {
        res += content;
      }
    } else {
      if (stack.length > 0) {
        stack[stack.length - 1].d += ch;
      } else {
        res += ch;
      }
    }

  }

  return res;
};

function decode(ct, d) {
  let res = '';
  for (let i = 0; i < ct; i++) {
    res += d;
  }
  return res;
}
