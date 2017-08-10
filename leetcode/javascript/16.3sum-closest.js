/*
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest
 *
 * algorithms
 * Medium (31.06%)
 * Total Accepted:    135.1K
 * Total Submissions: e435K
 * Testcase Example:  '[0,0,0]\n1'
 *
 * Given an array S of n integers, find three integers in S such that the sum
 * is closest to a given number, target. Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * ⁠   For example, given array S = {-1 2 1 -4}, and target = 1.
 * 
 * ⁠   The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => (a - b));
  
  let res = nums[0] + nums[1] + nums[2];
  let minDiff = Math.abs(res - target);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      let diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        res = sum;
      }

      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        return target;
      }
    }
  }
  return res;
};
