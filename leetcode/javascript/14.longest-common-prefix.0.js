/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.57%)
 * Total Accepted:    234.6K
 * Total Submissions: 742.9K
 * Testcase Example:  '[]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let pre = strs[0];
  strs.forEach(str => {
    if (str.length < pre) {
      pre = str;
    }
  });

  let last = '';

  let lo = 1, hi = pre.length;

  while (lo <= hi) {
    let shouldStop = false;
    let mid = lo + (hi - lo) / 2 | 0;
    let targetPre = pre.substring(0, mid);
    
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(targetPre)) {
        hi = mid - 1;
        shouldStop = true;
        break;
      }
    }

    if (!shouldStop) {
      last = targetPre;
      lo = mid + 1;
    }
  }

  return last;
};
