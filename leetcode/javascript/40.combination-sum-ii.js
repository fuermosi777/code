/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  
  candidates.sort((a, b) => a - b);

  let map = {};
  let dmap = {}; // dedup

  for (let i = 0; i < candidates.length; i++) {
    let ct = 0;
    if (map.hasOwnProperty(candidates[i])) {
      ct = map[candidates[i]];
    }
    map[candidates[i]] = ct + 1;
  }
  
  let dp = {};
  for (let i = candidates[0]; i <= target; i++) {
    dp[i] = [];
    if (map.hasOwnProperty(i)) dp[i].push([i]);

    for (let j = candidates[0]; j < i; j++) {
      let find = i - j;
      if (!map.hasOwnProperty(find)) continue;
      let arr = dp[j];
      for (let k = 0; k < arr.length; k++) {
        let findct = 0;
        for (let m = 0; m < arr[k].length; m++) {
          if (arr[k][m] === find) findct++;
        }
        if (map.hasOwnProperty(find) > 0 && findct < map[find]) {
          let newArr = arr[k].slice();
          newArr.push(find);
          newArr.sort((a, b) => a - b);
          let key = newArr.join(',');
          if (!dmap.hasOwnProperty(key)) {
            dmap[key] = true;
            dp[i].push(newArr);
          }
        }
      }
    }
  }
  return dp[target] || [];
};