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

  let a = 0, b = 0, lastA = nums[a], lastB = nums[b], ct = 1;
  while (true) {
    while (true) {
      a++;
      b++;
      if (nums[a] === lastA) {
        ct++;
      } else if (nums[a] < lastA) {
        break;
      } else {
        ct = 1;
        lastA = nums[a];
      }
      if (ct > 2) break;
      if (a > nums.length || b > nums.length) break;
    }
    console.log(nums, a, b, lastA, ct);
    if (ct > 2) {
      while (nums[b] === lastA) {
        b++;
      }
      ct = 1;
    }
    if (b >= nums.length) break;
    swap(nums, a, b);
    lastA = nums[a];
  }
  return a;
};

var nums = [1,2,2,2,3,4,4,5,5,5,6];
console.log(removeDuplicates(nums), nums);
