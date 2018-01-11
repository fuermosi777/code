/**
 * from 0 increase 2^i each time to N, how many possibilities?
 *
 * N=4: [0,1,2,3,4], [0,1,2,4], [0,1,3,4], [0,2,4], [0,2,3,4], [0,4]
 */

function base2log(x) {
  return Math.log(x) / Math.log(2);
}

function paths(N) {
  let res = [[0], [0, 1]];

  for (let i = 2; i <= N; i++) {
    let length = res.length;
    for (let j = 0; j < length; j++) {
      let top = res[j][res[j].length - 1];
      let diff = i - top;
      
      if (Number.isInteger(base2log(diff))) {
        let arr = res[j].slice();
        arr.push(i);
        res.push(arr);
      }
    }
  }

  let result = [];

  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i][res[i].length - 1] === N) {
      result.push(res[i]);
    }
  }

  return result;
}

console.log(paths(4));