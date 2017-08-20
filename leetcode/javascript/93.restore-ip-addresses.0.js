/*
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses
 *
 * algorithms
 * Medium (27.30%)
 * Total Accepted:    87.8K
 * Total Submissions: 321.3K
 * Testcase Example:  '"0000"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * 
 * For example:
 * Given "25525511135",
 * 
 * 
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 * 
 */

function possibilities(s, k) {
  if (k === 1) {
    if (s.startsWith('0') && s.length > 1) return [];
    if (parseInt(s) <= 255) return [s];
    return [];
  } else {
    let res = [];
    let a = s.substring(0, 1);
    let as = possibilities(s.substring(1), k - 1);
    for (let i of as) {
      res.push(a + '.' + i);
    }

    let b = s.substring(0, 2);
    if (b.length !== 2 || b.startsWith('0')) return res;
    let bs = possibilities(s.substring(2), k - 1);
    for (let i of bs) {
      res.push(b + '.' + i);
    }

    let c = s.substring(0, 3);
    if (c.length !== 3 || parseInt(c) > 255) return res;
    let cs = possibilities(s.substring(3), k - 1);
    for (let i of cs) {
      res.push(c + '.' + i);
    }
    return res;
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  return possibilities(s, 4);  
};
