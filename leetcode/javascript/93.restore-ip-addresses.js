/*
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses
 *
 * Medium (27.03%)
 * Total Accepted:    
 * Total Submissions: 
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

function isIllegal(nums) {
  return nums.length > 1 && nums[0] === '0';
}

function divide(nums, ct) {
  let res = [];
  if (nums === '') return res;
  if (nums.length > ct * 3 || nums.length < ct) return res;
  if (ct === 1 && parseInt(nums) >= 0 && parseInt(nums) <= 255 && !isIllegal(nums)) {
    res.push(nums);
  } else {
    for (let i = 0; i < 3; i++) {
      if (i < nums.length) {
        let prefix = nums.substring(0, i + 1);
        if (parseInt(prefix) > 255 || isIllegal(prefix)) continue;
        let remains = nums.substring(i + 1);
        let postfixs = divide(remains, ct - 1);
        for (let j = 0; j < postfixs.length; j++) {
          res.push(`${prefix}.${postfixs[j]}`);
        }
      }
    }
  }
  return res;
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  return divide(s, 4);
};