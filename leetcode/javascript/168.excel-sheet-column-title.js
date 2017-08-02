/*
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title
 *
 * algorithms
 * Easy (25.82%)
 * Total Accepted:    105.6K
 * Total Submissions: 409K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * 
 * Credits:Special thanks to @ifanchu for adding this problem and creating all
 * test cases.
 */

var dict = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n < 26) return dict[n];
  if (n % 26 === 0) {
    return convertToTitle(n / 26 - 1) + 'Z';
  }
  return convertToTitle(n / 26 | 0) + convertToTitle(n % 26);
};