/*
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation
 *
 * Medium (28.66%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[1]'
 *
 * 
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 *  * 
 * The replacement must be in-place, do not allocate extra memory.
 * 
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

/**
 * Iterate backward, found ascending a[i], a[i+1] and look for the min (larger than a[i]) after it, swap the i with the min and sort i ... n
 * For sorting, use in-place heap sort
 */

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

function min(nums, t, lo, hi) {
  let mi = hi;
  let cm = nums[hi];
  for (let i = lo; i <= hi; i++) {
    if (nums[i] > nums[t] && nums[i] < cm) {
      mi = i;
      cm = nums[i];
    }
  }
  return mi;
}

function reverse(nums, lo, hi) {
  for (let i = lo, j = hi; i < j; i++, j--) {
    swap(nums, i, j);
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let mi = min(nums, i - 1, i, nums.length - 1); // min index to swap with i - 1
      swap(nums, mi, i - 1);
      reverse(nums, i, nums.length - 1);
      return;
    }
  }

  reverse(nums, 0, nums.length - 1);
};

let arr = [1, 2, 4, 3, 2];
nextPermutation(arr);
console.log(arr);
