/*
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray
 *
 * algorithms
 * Easy (39.97%)
 * Total Accepted:    259.4K
 * Total Submissions: 648.6K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 
 * Find the contiguous subarray within an array (containing at least one
 * number) which has the largest sum.
 * 
 * 
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * click to show more practice.
 * 
 * More practice:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * 2017-12-14
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return -Infinity;

  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (sum <= 0) {
      sum = num;
    } else {
      sum += num;
    }
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};
