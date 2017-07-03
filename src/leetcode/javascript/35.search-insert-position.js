/*
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position
 *
 * Easy (39.56%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[1]\n0'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * 
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;
  
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (lo === mid) {
      break;
    } else if (nums[mid] > target) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  if (target > nums[hi]) {
    return hi + 1;
  } else if (target > nums[lo]) {
    return hi;
  }

  return lo;
};