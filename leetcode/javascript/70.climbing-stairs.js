/*
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs
 *
 * algorithms
 * Easy (40.11%)
 * Total Accepted:    191.9K
 * Total Submissions: 478.2K
 * Testcase Example:  '1'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * 
 * Note: Given n will be a positive integer.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    let a = i - 2 >= 0 ? dp[i - 2] : 0;
    let b = i - 1 >= 0 ? dp[i - 1] : 0;
    dp[i] = a + b;
  }
  return dp[n];
};
