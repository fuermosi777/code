/*
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (41.93%)
 * Total Accepted:    45.5K
 * Total Submissions: 108.4K
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
  let res = '';
  let stack = [];
  let nStr = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];


    if (/\d/.test(char)) {
      nStr += char;
    } else if (char === '[') {
      let n = parseInt(nStr);
      nStr = '';
      stack.push({n, content: ''});
    } else if (char === ']') {
      let item = stack.pop();
      let newContent = multiplyStr(item.content, item.n);

      if (stack.length > 0) {
        stack[stack.length - 1].content += newContent;
      } else {
        res += newContent;
      }
    } else {
      if (stack.length > 0) {
        stack[stack.length - 1].content += char
      } else {
        res += char;
      }
    }
  }

  return res;
};


function multiplyStr(s, n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += s;
  }
  return res;
}
