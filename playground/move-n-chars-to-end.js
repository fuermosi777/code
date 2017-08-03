/**
 * Time - O(n), Space - O(1)
 *
 * 3-step reverse string
 */

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function reverse(arr, i, j) {
  if (i > j) return;
  for (; i <= j; i++, j--) {
    swap(arr, i, j);
  }
}

/**
 * @param {string} str
 * @param {number} n
 * @return {string}
 */
var move = function(str, n) {
  let arr = str.split('');
  reverse(arr, 0, n - 1);
  reverse(arr, n, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr.join('');
};


// ---
var expect = require('chai').expect;

expect(move('abc', 2)).to.equal('cab');
expect(move('abcdef', 2)).to.equal('cdefab');