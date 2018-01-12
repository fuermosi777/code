/**
 * Input: 16
 *
 * assume input always be 2^n
 *
 * 1
 *
 * 1, 2
 *
 * 1, 4, 2, 3
 *
 * 1, 8, 4, 5, 2, 7, 3, 6
 *
 * 1, 16, 8, 11, 4, 13, ...
 *
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 * 
 */

function createTournament(N) {
  let res = [1];
  let ct = 1;
  let nextVal = 2;
  while (nextVal <= N) {
    let gap = N / (ct * 2) | 0;
    
    for (let i = gap; i < N; i += gap) {
      if (!res[i]) {
        res[i] = nextVal;
        nextVal++;
      }
    }
    ct += ct;
  }
  return res;
}

console.log(createTournament(16));