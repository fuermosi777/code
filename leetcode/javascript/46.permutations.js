/*
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations
 *
 * Medium (43.13%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a collection of distinct numbers, return all possible permutations.
 * 
 * 
 * 
 * For example,
 * [1,2,3] have the following permutations:
 * 
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let map = {};
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp.push([nums[i]]);
    } else {
      dp[i] = [];
      let last = dp[i - 1];
      for (let j = 0; j < last.length; j++) {
        let str = last.join('');
        let key = str.substring(0, j) + nums[i] + str.substring(j);
        if (!map.hasOwnProperty(key)) {
          dp[i].push(key.split(''));
          map[key] = true;
        }
      }
    }
  }
  console.log(dp);
  return dp[nums.length - 1];
};

permute([1, 2]);
