/**
 * @param  {string}  str
 * @return {Boolean}
 */
var isPalindrome = function(str) {
  var pstr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  // JS simple implementation
  // return pstr.split('').reverse().join('') === pstr.toLowerCase();
  
  // Faster
  for (let i = 0, j = pstr.length - 1; i <= j; i++, j--) {
    if (pstr[i] !== pstr[j]) return false;
  }
  return true;
};

var expect = require('chai').expect;

expect(isPalindrome('abc')).to.equal(false);
expect(isPalindrome('abcba')).to.equal(true);
expect(isPalindrome('abba')).to.equal(true);
expect(isPalindrome('abab')).to.equal(false);
expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true);