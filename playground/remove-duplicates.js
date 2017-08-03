var expect = require('chai').expect;

/**
 * @param  {string} str
 * @return {string}
 */
var removeDuplicates = function(str) {
  let map = {};
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (!map.hasOwnProperty(str[i])) {
      res += str[i];
      map[str[i]] = true;
    }
  }
  return res;
};

expect(removeDuplicates('abc')).to.equal('abc');
expect(removeDuplicates('')).to.equal('');
expect(removeDuplicates('a')).to.equal('a');
expect(removeDuplicates('aab')).to.equal('ab');
expect(removeDuplicates('aaa')).to.equal('a');