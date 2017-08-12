/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum
 *
 * algorithms
 * Easy (34.35%)
 * Total Accepted:    578.8K
 * Total Submissions: 1.7M
 * Testcase Example:  '[3,2,4]\n6'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 */
/**
 * Two pointers
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (map.hasOwnProperty(nums[i])) {
//       map[nums[i]].push(i);
//     } else {
//       map[nums[i]] = [i];
//     }
//   }

//   nums.sort((a, b) => (a - b));
//   i = 0; let j = nums.length - 1;
//   while (i < j) {
//     if (nums[i] + nums[j] === target) {
//       if (nums[i] === nums[j]) {
//         return map[nums[i]];
//       } else {
//         return [map[nums[i]][0], map[nums[j]][0]];
//       }
//     } else if (nums[i] + nums[j] > target) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return [];
// };

/**
 * One loop
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(target - nums[i])) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
