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

cp2('aaa', 'ae')

// expect(cp2('', 'ab')).to.equal('');
// expect(cp2('aa', 'ab')).to.equal('a');
// expect(cp2('abc', 'ab')).to.equal('ab');
// expect(cp2('abc', 'abc')).to.equal('abc');