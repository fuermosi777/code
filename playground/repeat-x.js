/**
 * Implement a function repeat('x', a) ---> 'xxxx'
 */
var expect = require('chai').expect;

/**
 * @param  {string} x
 * @param  {number} a count to repeat
 * @return {string}
 */
function repeat(x, a) {
  let res = '';
  let repeat = 0;

  let temp = x;
  let ct = 1;

  let DEBUG = 0;

  while (repeat < a) {
    console.log(++DEBUG);
    if (repeat + ct <= a) {
      res += temp;
      repeat += ct;
      temp += temp;
      ct *= 2;
    } else {
      temp = x;
      ct = 1;
    }
  }
  console.log(res);
  return res;
}

// expect(repeat('x', 5)).to.equal('xxxxx');
// expect(repeat('abc', 3)).to.equal('abcabcabc');
repeat('a', 100000);