/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum
 *
 * algorithms
 * Medium (21.60%)
 * Total Accepted:    226.8K
 * Total Submissions: 1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a
 * + b + c = 0? Find all unique triplets in the array which gives the sum of
 * zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];

  if (nums.length < 3) return res;

  nums.sort((a, b) => (a - b));

  let i = 0;
  while (i < nums.length - 2) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      let target = 0 - nums[i];
      while (j < k) {
        if (nums[j] + nums[k] === target) {
          res.push([nums[i], nums[j], nums[k]]);
          k--;
          while (k > j && nums[k] === nums[k + 1]) {
            k--;
          }
          while (j < k && nums[j] === nums[j - 1]) { 
            j++;
          }
        } else if (nums[j] + nums[k] > target) {
          k--;
        } else {
          j++;
        }
      }
    }
    i++;
  }

  return res;
};