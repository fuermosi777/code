/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n <= 1) n = 1;
  let dp = [];
  dp[0] = "1";
  dp[1] = "1";
  for (let i = 2; i <= n; i++) {
    let last = dp[i - 1];
    let res = "";

    let lc = last[0]; // last char
    let ct = 1;
    for (let j = 1; j < last.length; j++) {
      if (last[j] === lc) {
        ct++;
      } else {
        res = res + ct + lc;
        ct = 1;
        lc = last[j];
      }
    }
    res = res + ct + lc;
    dp[i] = res;
  }
  return dp[n];
};