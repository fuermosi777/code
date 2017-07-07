/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let a = -1, b = -1;

  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      if (mid === 0) {
        a = mid; break;
      } else if (nums[mid - 1] < target) {
        a = mid; break;
      } else {
        hi = mid - 1;
      }
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  lo = 0; 
  hi = nums.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) {
      if (mid === nums.length - 1) {
        b = mid; break;
      } else if (nums[mid + 1] > target) {
        b = mid; break;
      } else {
        lo = mid + 1;
      }
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return [a, b];
};

// console.log(searchRange([], 5));
