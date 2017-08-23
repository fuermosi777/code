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

/**
 * Method 1: two pointers - relative order will change
 * Method 2: use 1 pointer but need two loops, check next non-zero and replace with the current zero
 * Method 3: find non-zero, paste to current non-zero count position, and then fill with zeros
 */

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

/**
 * One pointer
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = 0;
  for (i; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, j);
      j++;
    }
  }
  for (j; j < nums.length; j++) {
    nums[j] = 0;
  }
};

// var moveZeroes = function(nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== 0) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }
//   while (i < nums.length) {
//     nums[i] = 0;
//     i++;
//   }
// };

/**
 * One pointer stupid
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*var moveZeroes = function(nums) {
  let i = 0;
  while (i < nums.length) {
    let ch = nums[i];
    if (ch === 0) {
      let j = i + 1;
      while (j < nums.length && nums[j] === 0) {
        j++;
      }
      if (j >= nums.length) break;
      swap(nums, i, j);
    }
    i++;
  }
};*/
