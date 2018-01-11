/*
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (26.74%)
 * Total Accepted:    80.9K
 * Total Submissions: 302.7K
 * Testcase Example:  '[1]\n0'
 *
 * 
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 * 
 * 
 * 
 * Example 1:
 * coins = [1, 2, 5], amount = 11
 * return 3 (11 = 5 + 5 + 1)
 * 
 * 
 * 
 * Example 2:
 * coins = [2], amount = 3
 * return -1.
 * 
 * 
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */

/**
 * 0: 0
 * 1: 
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0; // Edge

  let res = [0];

  for (let i = 1; i <= amount; i++) {
    let poss = [];
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      let val = i - coin;
      if (val >= 0 && res[val] > -1) {
        poss.push(res[val] + 1);
      }
    }
    if (poss.length === 0) res[i] = -1;
    else res[i] = Math.min(...poss);
  }

  return res[amount];
};
