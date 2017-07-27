/*
 * [80] Remove Duplicates from Sorted Array II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 *
 * algorithms
 * Medium (35.83%)
 * Total Accepted:    120K
 * Total Submissions: 334.8K
 * Testcase Example:  '[]'
 *
 * 
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 * 
 * 
 * For example,
 * Given sorted array nums = [1,1,1,2,2,3],
 * 
 * 
 * Your function should return length = 5, with the first five elements of nums
 * being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new
 * length.
 * 
 */
function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  var i = 0, j = 0, last = nums[0], ct = 1;

  while (true) {
    while (true) {
      i++;
      if (nums[i] === last) {
        ct++;
      } else if (nums[i] < last) {
        break;
      } else {
        ct = 1;
        last = nums[i];
      }
      if (ct > 2) break;
    }
    
    j = i;

    while (j < nums.length) {
      j++;
      if (ct < 2 && nums[j] === last) break;
      if (nums[j] > last) break;
    }

    if (j >= nums.length) break;

    swap(nums, i, j);
    if (nums[i] !== last) {
      ct = 1;
    } else {
      ct++;
    }
    last = nums[i];
  }

  return i;

};