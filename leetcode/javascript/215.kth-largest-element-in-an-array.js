/*
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 *
 * algorithms
 * Medium (39.03%)
 * Total Accepted:    139K
 * Total Submissions: 356.1K
 * Testcase Example:  '[1]\n1'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * For example,
 * Given [3,2,1,5,6,4] and k = 2, return 5.
 * 
 * 
 * Note: 
 * You may assume k is always valid, 1 <= k <= array's length.
 * 
 * Credits:Special thanks to @mithmatt for adding this problem and creating all
 * test cases.
 */

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

function find(nums, lo, hi, k) {
  let i = lo + 1, j = hi, m = nums[lo];
  while (i <= j) {
    if (nums[i] <= m && nums[j] >= m) {
      swap(nums, i, j);
      i++;
      j--;
    } else if (nums[i] >= m && nums[j] >= m) {
      i++;
    } else if (nums[i] <= m && nums[j] <= m) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  swap(nums, lo, j);
  if (j - lo === k - 1) return nums[j];
  if (j - lo > k - 1) {
    return find(nums, lo, j, k);
  } else {
    return find(nums, j + 1, hi, k - j + lo - 1);
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (nums.length > 1) {
    for (let i = 0, len = nums.length; i < len; i++) {
      swap(nums, i, Math.floor(Math.random() * (len - 1)) + 1);
    }
  }
  
  return find(nums, 0, nums.length - 1, k);
};