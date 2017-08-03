/*
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes
 *
 * algorithms
 * Easy (49.73%)
 * Total Accepted:    198.4K
 * Total Submissions: 398.9K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * 
 * 
 * For example, given nums  = [0, 1, 0, 3, 12], after calling your function,
 * nums should be [1, 3, 12, 0, 0].
 * 
 * 
 * 
 * Note:
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 */

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  while (i < nums.length && nums[i] !== 0) {
    i++;
  }
  let j = i;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      swap(nums, i, j);
      i++;
    }
    j++;
  }
};
