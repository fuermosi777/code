/*
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors
 *
 * algorithms
 * Medium (37.79%)
 * Total Accepted:    164.9K
 * Total Submissions: 436.3K
 * Testcase Example:  '[0]'
 *
 * 
 * Given an array with n objects colored red, white or blue, sort them so that
 * objects of the same color are adjacent, with the colors in the order red,
 * white and blue.
 * 
 * 
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 * 
 * 
 * 
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 * 
 * 
 * click to show follow up.
 * 
 * 
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with an one-pass algorithm using only constant space?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
//two-pass
var sortColors = function(nums) {
  let ct = [];
  for (let i = 0; i < nums.length; i++) {
    let color = nums[i];
    if (typeof ct[color] === 'undefined') {
      ct[color] = 0;
    }
    ct[color] += 1;
  }

  let cur = 0;
  for (let i = 0; i < ct.length; i++) {
    let j = 0;
    while (j < ct[i]) {
      nums[cur] = i;
      j++;
      cur++;
    }
  }
};
*/

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

// one-pass in-place
// 3-way quick sort
var sortColors = function(nums) {
  let m = 0, n = nums.length - 1;
  let i = 0;
  while (i < nums.length) {
    while (nums[m] === 0) {
      m++;
    }
    while (nums[n] === 2) {
      n--;
    }
    if (nums[i] === 2 && i < n) {
      swap(nums, i, n);
    }
    if (nums[i] === 0 && i > m) {
      swap(nums, i, m);
    }
    i++;
  }
};