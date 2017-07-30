/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let i = -1, j = -1, minSumLength = nums.length + 1, sum = 0;

  while (i <= j && j < nums.length) {
    while (sum < s && j < nums.length - 1) {
      j++;
      sum += nums[j];
    }

    if (sum < s) break;

    while (sum >= s) {
      minSumLength = Math.min(minSumLength, j - i);
      i++;
      sum -= nums[i];
    }
  }

  return minSumLength === nums.length + 1 ? 0 : minSumLength;
};