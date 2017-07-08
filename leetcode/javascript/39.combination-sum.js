/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let min = candidates[0];
  let map = {};
  let dmap = {}; // duplicate map
  for (let i = min; i <= target; i++) {
    map[i] = [];
    for (let j = 0; j < candidates.length; j++) {
      let t = i - candidates[j];
      if (t < 0) break;
      if (candidates[j] === i) map[i].push([i]);

      if (!map.hasOwnProperty(t)) continue;

      for (let k = 0; k < map[t].length; k++) {
        let l = map[t][k].slice();
        l.push(candidates[j]);
        let key = l.sort().join('');
        if (!dmap[key]) {
          map[i].push(l);
          dmap[key] = true;
        }
      }
    }
  }

  let arr = map[target];
  if (!arr) return [];
  return arr;
};