/*
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game
 *
 * algorithms
 * Medium (29.52%)
 * Total Accepted:    132.1K
 * Total Submissions: 447.3K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * 
 * Each element in the array represents your maximum jump length at that
 * position. 
 * 
 * 
 * Determine if you are able to reach the last index.
 * 
 * 
 * 
 * For example:
 * A = [2,3,1,1,4], return true.
 * 
 * 
 * A = [3,2,1,0,4], return false.
 * 
 */ 

// function dfs(i, nums, visited) {
//   visited[i] = true;
//   if (nums[i] >= nums.length - i - 1) return true;
//   for (let j = 1; j <= nums[i]; j++) {
//     if (!visited[j]) {
//       if (dfs(j, nums, visited)) return true;
//     }
//   }
//   return false;
// }

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let visited = [];
  let stack = [0];

  while (stack.length > 0) {
    let i = stack.pop();
    visited[i] = true;
    if (nums[i] >= nums.length - i - 1) return true;
    for (let j = 1; j <= nums[i]; j++) {
      if (!visited[i + j] && nums[i + j] > nums[i] - j) {
        stack.push(i + j);
      }
    }
  }

  return false;
};
