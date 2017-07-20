/**
 * Reverse an array without using loop - SigFig
 */

var expect = require('chai').expect;

function swap(nums, i, j) {
  if (i >= j) return;
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
  swap(nums, i + 1, j - 1);
}

function reverse(nums) {
  swap(nums, 0, nums.length - 1);
  return nums; // for testing
}

expect(reverse([])).to.deep.equal([]);
expect(reverse([1])).to.deep.equal([1]);
expect(reverse([1,1])).to.deep.equal([1,1]);
expect(reverse([1,2])).to.deep.equal([2,1]);
expect(reverse([1,2,3])).to.deep.equal([3,2,1]);