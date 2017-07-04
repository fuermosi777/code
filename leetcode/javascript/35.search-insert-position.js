/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;
  
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (lo === mid) {
      break;
    } else if (nums[mid] > target) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  if (target > nums[hi]) {
    return hi + 1;
  } else if (target > nums[lo]) {
    return hi;
  }

  return lo;
};