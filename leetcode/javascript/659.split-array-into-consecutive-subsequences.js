/*
 * [659] Split Array into Consecutive Subsequences
 *
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (36.39%)
 * Total Accepted:    6.3K
 * Total Submissions: 17.3K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * You are given an integer array sorted in ascending order (may contain
 * duplicates), you need to split them into several subsequences, where each
 * subsequences consist of at least 3 consecutive integers. Return whether you
 * can make such a split.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,3,4,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences : 
 * 1, 2, 3
 * 3, 4, 5
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1,2,3,3,4,4,5,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences : 
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [1,2,3,4,4,5]
 * Output: False
 * 
 * 
 * 
 * Note:
 * 
 * The length of the input is in range of [1, 10000]
 * 
 * 
 */

// To sumit, replace with source
var MinPQ = require('./util/MinPQ');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let prev = num - 1;
    if (!map.has(prev)) {
      if (!map.has(num)) {
        map.set(num, new MinPQ());
      }
      map.get(num).insert(1);
    } else {
      let prevPQ = map.get(prev);
      let top = prevPQ.deleteMin();
      top++;
      if (prevPQ.size === 0) {
        map.delete(prev);
      }
      if (!map.has(num)) {
        map.set(num, new MinPQ());
      }
      map.get(num).insert(top);
    }
  }

  // validate
  let vals = map.values();
  for (let val of vals) {
    let cts = val.values();
    for (let ct of cts) {
      if (ct < 3) return false;
    }
  }
  return true;
};
