/*
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (34.45%)
 * Total Accepted:    68.9K
 * Total Submissions: 199.8K
 * Testcase Example:  '[]'
 *
 * Note: This is an extension of House Robber.
 * 
 * After robbing those houses on that street, the thief has found himself a new
 * place for his thievery so that he will not get too much attention. This
 * time, all houses at this place are arranged in a circle. That means the
 * first house is the neighbor of the last one. Meanwhile, the security system
 * for these houses remain the same as for those in the previous street. 
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Credits:Special thanks to @Freezen for adding this problem and creating all
 * test cases.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  let last = [0, 0]; // robbing the last
  for (let i = 1; i < nums.length - 1; i++) {
    let num = nums[i];
    last = [last[1] + num, Math.max(...last)];
  }
  let robLast = nums[nums.length - 1] + last[1];

  last = [nums[0], 0]; // not robbing the last
  for (let i = 1; i < nums.length - 1; i++) {
    let num = nums[i];
    last = [last[1] + num, Math.max(...last)];
  } 
  let notRobLast = Math.max(...last);

  return Math.max(robLast, notRobLast);
};
