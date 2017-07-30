function swap(nums, i, j) {
  let t = nums[i];
  nums[j] = nums[i];
  nums[i] = t;
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = m - 1; i >= 0; i--) {
    swap(nums1, i, i + n);
  }

  let i = 0, j = 0, k = 0;
  while (i < m || j < n) {
    if (i === m) {
      nums1[k] = nums2[j];
      j++;
    } else if (j === n) {
      nums1[k] = nums1[i + n];
      i++;
    } else if (nums1[i + n] < nums2[j]) {
      nums1[k] = nums1[i + n];
      i++;
    } else {
      nums1[k] = nums2[j];
      j++;
    }
    k++;
  }
};