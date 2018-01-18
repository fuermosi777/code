/*
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (26.47%)
 * Total Accepted:    126.4K
 * Total Submissions: 477.5K
 * Testcase Example:  '[-2]'
 *
 * 
 * Find the contiguous subarray within an array (containing at least one
 * number) which has the largest product.
 * 
 * 
 * 
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0];

  let dp = [[nums[0], nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let a = dp[i - 1][0] * num;
    let b = dp[i - 1][1] * num;
    let min = Math.min(a, b, num);
    let max = Math.max(a, b, num);
    dp[i] = [min, max];
  }

  let max = dp[0][0];
  dp.forEach(d => {
    max = Math.max(max, d[0], d[1]);
  });

  return max;
};