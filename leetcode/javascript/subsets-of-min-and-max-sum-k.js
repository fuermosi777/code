/**
 * Find all subsets of a sorted array which the sum of minvalue and maxvalue is less than K
 *
 * [2, 3, 5, 7], K = 8
 * ->
 * [2], [2, 3], [2, 3, 5], [3], [5]
 * ->
 * Result: 5
 */

/**
 * @param  {number[]}
 * @param  {number}
 * @return {number}
 */
function subsets(nums, k) {
  // TODO
}

var expect = require('chai').expect;

expect(subsets([], 1)).to.equal(0);
expect(subsets([1], 1)).to.equal(0);
expect(subsets([1], 2)).to.equal(1);
expect(subsets([1, 1], 2)).to.equal(2);
expect(subsets([2, 3, 5, 7], 8)).to.equal(5);
expect(subsets([0, 2, 3, 5, 5, 7, 7], 8)).to.equal(28);