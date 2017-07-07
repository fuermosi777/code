/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let r = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      r = i;
      break;
    }
  }
  let helper = nums.concat(nums);
  let lo = r, hi = nums.length - 1 + r;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (helper[mid] === target) {
      return mid % nums.length;
    } else if (helper[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};