function insert(nums, index, a) {
  let res = [];
  let flag = false;
  for (let i = 0; i <= nums.length; i++) {
    if (i === index) {
      res.push(a);
      flag = true;
    } else if (!flag) {
      res.push(nums[i]);
    } else {
      res.push(nums[i - 1]);
    }
  }
  return res;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let last = [];
  let res;
  for (let i = 0; i < nums.length; i++) {
    res = [];
    if (i === 0) {
      res = [[nums[i]]];
    } else {
      for (let j = 0; j < last.length; j++) {
        for (let k = 0; k <= last[j].length; k++) {
          res.push(insert(last[j], k, nums[i]));
        }
      }
    }
    last = res;
  }
  return res;
};
