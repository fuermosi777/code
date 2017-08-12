var expect = require('chai').expect;

/**
 * @param  {number[]} nums
 * @param  {number} target
 * @return {bool}
 */
function twoSumSortedArray(nums, target) {
  let i = 0, j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      return true;
    } else if (nums[i] + nums[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

let sortedNums = [-4, -1, 0, 2, 3, 6];
expect(twoSumSortedArray(sortedNums, 1)).to.equal(true);
expect(twoSumSortedArray(sortedNums, 4)).to.equal(false);

// ---

function twoSumUnsortedArray(nums, target) {
  nums.sort((a, b) => (a - b));
  return twoSumSortedArray(nums, target);
}

let unsortedNums = [2, 6, 0, -4, -1, 3];
expect(twoSumUnsortedArray(unsortedNums, 1)).to.equal(true);
expect(twoSumUnsortedArray(unsortedNums, 4)).to.equal(false);

// ---