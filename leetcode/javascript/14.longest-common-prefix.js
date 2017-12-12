/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix
 *
 * algorithms
 * Easy (31.55%)
 * Total Accepted:    226.5K
 * Total Submissions: 717.6K
 * Testcase Example:  '[]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * ['abc', 'abcd', 'abd']
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let lcp = strs[0];

  for (let i = 0; i < strs.length - 1; i++) {
    lcp = lcpOfTwo(lcp, strs[i + 1]);
  }

  return lcp;
};

function lcpOfTwo(str1, str2) {
  if (str1 === '' || str2 === '') {
    return '';
  }

  let lcp = '';
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      lcp += str1[i];
    } else {
      break;
    }
  }

  return lcp;
}
