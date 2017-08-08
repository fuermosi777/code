/*
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets
 *
 * algorithms
 * Medium (40.02%)
 * Total Accepted:    167.9K
 * Total Submissions: 419.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a set of distinct integers, nums, return all possible subsets.
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * 
 * For example,
 * If nums = [1,2,3], a solution is:
 * 
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [1],
 * ⁠ [2],
 * ⁠ [1,2,3],
 * ⁠ [1,3],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */
/**
 * DP
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var last = [[]];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0, len = last.length; j < len; j++) {
      last.push(last[j].concat(nums[i]));
    }
  }
  return last;
};

/**
 * DFS
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   let res = [[]];
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     let visited = [];
//     dfs(res, nums, visited, [], i, set);
//   }
//   return res;
// };

// function dfs(res, nums, visited, existed, i, set) {
//   if (visited[i]) return;

//   let v = visited.slice();
//   v[i] = true;
//   let array = existed.slice();
//   array.push(nums[i]);
//   array.sort();
//   let key = JSON.stringify(array);
//   if (!set.has(key)) {
//     res.push(array);
//     set.add(key);
//   }
//   for (let j = 0; j < nums.length; j++) {
//     dfs(res, nums, v, array, j, set);
//   }
// }
