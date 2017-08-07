/**
 * Get all products of a non-duplicate prime number array
 *
 * [2, 3, 5] -> [2, 3, 5, 6, 10, 15, 30] 
 *
 * O(2^n)
 */

/**
 * DP
 * @param  {number[]}
 * @return {number[]}
 */
function products(array) {
  if (array.length === 0) return [];
  let last = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let newItem = array[i];
    let newLast = [newItem];
    newLast = newLast.concat(last);
    for (let j = 0; j < last.length; j++) {
      newLast.push(last[j] * newItem);
    }
    last = newLast;
  }
  last.sort((a, b) => (a - b));

  return last;
}


var expect = require('chai').expect;

expect(products([])).to.deep.equal([]);
expect(products([2])).to.deep.equal([2]);
expect(products([2, 3])).to.deep.equal([2, 3, 6]);
expect(products([2, 3, 5])).to.deep.equal([2, 3, 5, 6, 10, 15, 30]);