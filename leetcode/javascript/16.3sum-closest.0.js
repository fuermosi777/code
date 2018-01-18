/*
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (31.50%)
 * Total Accepted:    158.8K
 * Total Submissions: 504.2K
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
  let closestDiff = Infinity;

  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      let diff = sum - target;

      if (Math.abs(diff) < Math.abs(closestDiff)) {
        closestDiff = diff;
      }

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return closestDiff + target;
};
