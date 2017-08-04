
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)

var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let last = nums[0];
  let max = last;
  for (let i = 1; i < nums.length; i++) {
    last = Math.max(last + nums[i], nums[i]);
    if (last > max) max = last;
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// divide and conquer

// function crossMax(nums, lo, hi, mid) {
//   let sum = 0;
//   let iSum = nums[mid];
//   let i = mid;
//   for (let n = mid; n >= lo; n--) {
//     sum += nums[n];
//     if (sum > iSum) {
//       iSum = sum;
//       i = n;
//     }
//   }

//   sum = 0;
//   let jSum = nums[mid + 1];
//   let j = mid + 1;
//   for (let n = mid + 1; n <= hi; n++) {
//     sum += nums[n];
//     if (sum > jSum) {
//       jSum = sum;
//       j = n;
//     }
//   }
//   return iSum + jSum;
// }

/**
 * @param  {number[]} nums
 * @param  {number} lo
 * @param  {number} hi
 * @return {{number, number, number}}
 */
// function getMaxSubArray(nums, lo, hi) {
//   if (lo === hi) return nums[lo];
//   let mid = lo + (hi - lo) / 2 | 0;
//   let left = getMaxSubArray(nums, lo, mid);
//   let right = getMaxSubArray(nums, mid + 1, hi);
//   let cross = crossMax(nums, lo, hi, mid);

//   let res = left;
//   if (right > left) {
//     res = right;
//   }
//   if (cross > res) {
//     res = cross;
//   }
//   return res;
// }

// var maxSubArray = function(nums) {
//   return getMaxSubArray(nums, 0, nums.length - 1);
// };