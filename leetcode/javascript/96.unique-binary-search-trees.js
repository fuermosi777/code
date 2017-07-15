/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let res = 0;
    for (let j = 1; j <= i; j++) {
      let l = j - 1; // left ct
      let r = i - j; // right ct
      res += dp[l] * dp[r];
    }
    dp[i] = res;
  }
  return dp[n];
};