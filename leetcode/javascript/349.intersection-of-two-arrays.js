/*
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays
 *
 * algorithms
 * Easy (47.17%)
 * Total Accepted:    95.3K
 * Total Submissions: 201.9K
 * Testcase Example:  '[]\n[]'
 *
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * 
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * 
 * 
 * Note:
 * 
 * Each element in the result must be unique.
 * The result can be in any order.
 * 
 * 
 */
/**
 * Use map
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   let map = {}, res = [];
//   for (let num of nums1) {
//     if (!(num in map)) {
//       map[num] = 0;
//     }
//   }
//   for (let num of nums2) {
//     if (map[num] === 0) {
//       res.push(num);
//       map[num] = 1;
//     }
//   }
//   return res;
// };

/**
 * Two pointers
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   let res = [];
//   nums1.sort((a, b) => (a - b));
//   nums2.sort((a, b) => (a - b));
//   let i = 0, j = 0;
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j] && (res.length === 0 || res[res.length - 1] !== nums1[i])) {
//       res.push(nums1[i]);
//     } else if (nums1[i] > nums2[j]) {
//       j++;
//     } else {
//       i++;
//     }
//   }
//   return res;
// };

/**
 * Two pointers with Binary search
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => (a - b));
  let res = [];
  let map = {};
  for (let num of nums2) {
    if (bs(nums1, num) > -1 && !map.hasOwnProperty(num)) {
      res.push(num);
      map[num] = true;
    }
  }
  return res;
};

function bs(nums, t) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (nums[mid] === t) {
      return mid;
    } else if (nums[mid] > t) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}