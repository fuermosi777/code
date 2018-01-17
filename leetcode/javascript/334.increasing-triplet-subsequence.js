/*
 * [334] Increasing Triplet Subsequence
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (40.03%)
 * Total Accepted:    53.2K
 * Total Submissions: 132.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 
 * Given an unsorted array return whether an increasing subsequence of length 3
 * exists or not in the array.
 * 
 * 
 * Formally the function should:
 * Return true if there exists i, j, k  
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 
 * else return false.
 * 
 * 
 * 
 * Your algorithm should run in O(n) time complexity and O(1) space
 * complexity.
 * 
 * 
 * Examples:
 * Given [1, 2, 3, 4, 5],
 * return true.
 * 
 * 
 * Given [5, 4, 3, 2, 1],
 * return false.
 * 
 * 
 * Credits:Special thanks to @DjangoUnchained for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false;

  let min = Infinity, max = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num <= min) {
      min = num;
    } else if (num <= max) {
      max = num;
    } else {
      return true;
    }
  };
  return false;
};
