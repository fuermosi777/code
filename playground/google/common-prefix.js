/**
 * Give two strings, find their common prefix
 */

/**
 * O(n)
 */
function cp(str1, str2) {
  let i = 0;
  let res = '';
  while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
    res += str1[i];
    i++;
  }
  return res;
}

var expect = require('chai').expect;

expect(cp('', 'ab')).to.equal('');
expect(cp('aa', 'ab')).to.equal('a');
expect(cp('abc', 'ab')).to.equal('ab');
expect(cp('abc', 'abc')).to.equal('abc');