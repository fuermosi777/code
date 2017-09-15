/*
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array
 *
 * algorithms
 * Medium (32.10%)
 * Total Accepted:    192K
 * Total Submissions: 598K
 * Testcase Example:  '[]\n5'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    if (hi - lo === 1) { // only two vals
      if (nums[hi] < nums[lo]) {
        lo = hi;
      }
      break;
    }
    let mid = lo + (hi - lo) / 2 | 0;
    if (nums[mid] < nums[lo]) {
      hi = mid;
    } else if (nums[mid] > nums[hi]) {
      lo = mid;
    } else {
      break;
    }
  }

  hi = lo === 0 ? nums.length - 1 : lo - 1;
  while (lo < hi) {
    
  }
};

console.log(search([7,0,1,2,3,4,5], 2));
