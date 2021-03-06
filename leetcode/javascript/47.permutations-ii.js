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
var permuteUnique = function(nums) {
  let last = [];
  let res;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    res = [];
    if (i === 0) {
      res = [[nums[i]]];
      let key = [nums[i]].join(',');
      map[key] = true;
    } else {
      for (let j = 0; j < last.length; j++) {
        for (let k = 0; k <= last[j].length; k++) {
          let newArr = insert(last[j], k, nums[i]);
          let key = newArr.join(',');
          if (!map[key]) {
            res.push(insert(last[j], k, nums[i]));
            map[key] = true;
          }
        }
      }
    }
    last = res;
  }
  return res;
};
