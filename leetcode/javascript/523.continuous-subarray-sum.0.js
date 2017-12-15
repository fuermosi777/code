/*
 * [523] Continuous Subarray Sum
 *
 * https://leetcode.com/problems/continuous-subarray-sum
 *
 * algorithms
 * Medium (22.69%)
 * Total Accepted:    16.5K
 * Total Submissions: 72.8K
 * Testcase Example:  '[23,2,4,6,7]\n6'
 *
 * 
 * Given a list of non-negative numbers and a target integer k, write a
 * function to check if the array has a continuous subarray of size at least 2
 * that sums up to the multiple of k, that is, sums up to n*k where n is also
 * an integer.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up
 * to 6.
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [23, 2, 6, 4, 7],  k=6
 * Output: True
 * Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5
 * and sums up to 42.
 * 
 * 
 * 
 * Note:
 * 
 * The length of the array won't exceed 10,000.
 * You may assume the sum of all the numbers is in the range of a signed 32-bit
 * integer.
 * 
 * 
 */

Array.prototype.hasTwoMoreZeros = function() {
  for (let i = 1; i < this.length; i++) {
    if (this[i] === 0 && this[i - 1] === 0) return true;
  }

  return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if (nums.length < 2) return false;

  let map = new Map([[0, -1]]);
  let sum = 0;

  k = Math.abs(k);

  if (nums.hasTwoMoreZeros()) return true;

  if (k === 0) return false;

  if (k === 1) return true;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let j = 1;
    while (sum - k * j >= 0) {
      let sumToFind = sum - k * j;

      if (map.has(sumToFind) && i - map.get(sumToFind) > 1) {
        return true;
      } else {
        j++;
      }
    }
    map.set(sum, i);
  }

  return false;
};
