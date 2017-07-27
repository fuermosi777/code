/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//   let left = [nums[0]], right = [nums[nums.length - 1]];
//   for (let i = 1; i < nums.length - 1; i++) {
//     left[i] = nums[i] * left[i - 1];
//     right[i] = nums[nums.length - 1 - i] * right[i - 1];
//   }
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       res[i] = right[nums.length - 2];
//     } else if (i === nums.length - 1) {
//       res[i] = left[i - 1];
//     } else {
//       res[i] = left[i - 1] * right[nums.length - 2 - i];
//     }
//   }

//   return res;
// };

// constact space
var productExceptSelf = function(nums) {
  let res = [1];
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }

  let p = 1;
  for (let i = nums.length - 1; i >= 0; i--) {

    res[i] = p * res[i];
    p = p * nums[i];
  }
  return res;
};