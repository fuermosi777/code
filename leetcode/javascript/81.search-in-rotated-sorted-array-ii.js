/*
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 *
 * algorithms
 * Medium (32.73%)
 * Total Accepted:    100.9K
 * Total Submissions: 308.4K
 * Testcase Example:  '[]\n5'
 *
 * 
 * Follow up for "Search in Rotated Sorted Array":
 * What if duplicates are allowed?
 * 
 * Would this affect the run-time complexity? How and why?
 * 
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * 
 * Write a function to determine if a given target is in the array.
 * 
 * The array may contain duplicates.
 */

function searchStart(nums, lo, hi) {
  if (hi <= lo) return lo;
  if (hi - lo === 1) {
    if (nums[hi] < nums[lo]) {
      return hi;
    } else {
      return lo;
    }
  }

  let mid = lo + (hi - lo) / 2 | 0;
  if (nums[mid] > nums[lo]) {
    return searchStart(nums, mid, hi);
  } else if (nums[mid] < nums[hi]) {
    return searchStart(nums, lo, mid);
  } else {
    let left = searchStart(nums, lo, mid);
    let right = searchStart(nums, mid, hi);
    if (left !== lo) return left;
    if (right !== mid) return right;
    return left;
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums.length === 0) return false;

  let lo = 0, hi = nums.length - 1;
  lo = searchStart(nums, lo, hi);
  
  let res = false;
  if (nums[0] <= target && target <= nums[lo - 1]) {
    res = bs(0, lo - 1, nums, target) !== -1;
  } else if (nums[lo] <= target && target <= nums[nums.length - 1]) {
    res = bs(lo, nums.length - 1, nums, target) !== -1;
  }

  return res;
};

function bs(lo, hi, nums, target) {
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (nums[mid] >= target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  if (nums[lo] === target) return lo;
  return -1;
}
