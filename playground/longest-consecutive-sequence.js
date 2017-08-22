/**
 * LC128
 */

/**
 * O(n) - return the sequence
 * @param {number[]} nums
 * @return {number[]}
 */
var longestConsecutive = function(nums) {
  let map = {};
  for (let n of nums) {
    if (!map[n]) map[n] = true;
  }
  let maxStart, maxEnd, maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let left = n - 1;
    let right = n + 1;
    let ct = 1;
    while (map[left]) {
      ct++;
      map[left] = false;
      left--;
    }
    while (map[right]) {
      ct++;
      map[right] = false;
      right++;
    }
    if (maxLength < ct) {
      maxStart = left + 1;
      maxEnd = right - 1;
      maxLength = ct;
    }
  }
  let res = [];
  if (nums.length === 0) return res;
  for (let i = maxStart; i <= maxEnd; i++) {
    res.push(i);
  }
  return res;
};

var expect = require('chai').expect;

expect(longestConsecutive([])).to.deep.equal([]);
expect(longestConsecutive([1,2,3])).to.deep.equal([1,2,3]);
expect(longestConsecutive([100,1,200,2,300,3])).to.deep.equal([1,2,3]);
expect(longestConsecutive([-1,0,5,8,9,4,-4,-3,1])).to.deep.equal([-1,0,1]);