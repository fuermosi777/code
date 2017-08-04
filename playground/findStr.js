// not KMP solution

/**
 * @param  {string}
 * @param  {string}
 * @return {number}
 */
var strStr = function(s, k) {
  if (k.length > s.length || k.length === 0) return -1;

  let i = 0, j = 0;
  while (i <= s.length - k.length) {
    if (s[i] === k[j]) {
      i++;
      j++;
      if (j === k.length) {
        return i - k.length;
      }
    } else {
      i = i - j + 1;
      j = 0;
    }
  }

  return -1;
};

var expect = require('chai').expect;
expect(strStr('abcd', 'abcd'), 0);
expect(strStr('', 'cd'), -1);
expect(strStr('abcd', ''), -1);
expect(strStr('a', 'aa'), -1);
expect(strStr('aa', 'a'), 0);
expect(strStr('abcd', 'cd'), 2);
expect(strStr('abcd', 'cf'), -1);