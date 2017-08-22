/*
[
  [IBCALKA],
  [DRFCAEA],
  [GHOELAD],
]

Get "IROCLED"
*/

/**
 * @param  {string[]} strs
 * @return {string}
 */
function z(strs) {
  if (strs.length < 2) return '';
  let res = strs[0][0];
  let i = 0, j = 0, dir = 1;
  while (true) {
    let nexti, nextj;
    if (dir === 1) {
      if (i === strs.length - 1) {
        nexti = strs.length - 2;
        nextj = j + 1;
        dir = 0;
      } else {
        nexti = i + 1;
        nextj = j + 1;
      }
    } else {
      if (i === 0) {
        nexti = 1;
        nextj = j + 1;
        dir = 1;
      } else {
        nexti = i - 1;
        nextj = j + 1;
      }
    }
    if (nexti >= strs.length || nextj >= strs[nexti].length) {
      break;
    }
    res += strs[nexti][nextj];
    i = nexti;
    j = nextj;
  }
  return res;
}

console.log(z([
  'IBCALKA',
  'DRFCAEA',
  'GHOELAD',
]))
