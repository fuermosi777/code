/*
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?
*/

/*
  sum(start, end) = sum(0, end) - sum(0, start)
 */

function maxSubarray(nums, k) {
  let map = {};
  let max = 0, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      max = Math.max(max, i + 1);
    } else if (map.hasOwnProperty(sum - k)) {
      max = Math.max(max, i - map[sum - k]);
    }
    if (!map.hasOwnProperty(sum)) {
      map[sum] = i;
    }
  }
  return max;
}


var expect = require('chai').expect;

expect(maxSubarray([1, -1, 5, -2, 3], 3)).to.equal(4);
expect(maxSubarray([-2, -1, 2, 1], 1)).to.equal(2);
