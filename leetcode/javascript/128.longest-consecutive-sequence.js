/*
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence
 *
 * algorithms
 * Hard (36.79%)
 * Total Accepted:    108.8K
 * Total Submissions: 295.6K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * 
 * 
 * For example,
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its
 * length: 4.
 * 
 * 
 * Your algorithm should run in O(n) complexity.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  nums.sort((a, b) => (a - b));
  let max = 1, current = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      current++;
    } else {
      max = Math.max(max, current);
      current = 1;
      i++;
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
