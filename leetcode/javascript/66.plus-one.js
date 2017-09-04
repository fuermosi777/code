/*
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one
 *
 * algorithms
 * Easy (38.62%)
 * Total Accepted:    184.5K
 * Total Submissions: 476.8K
 * Testcase Example:  '[0]'
 *
 * Given a non-negative integer represented as a non-empty array of digits,
 * plus one to the integer.
 * 
 * You may assume the integer do not contain any leading zero, except the
 * number 0 itself.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list.
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let r = 0;
  let res = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + r;
    if (i === digits.length - 1) {
      sum += 1;
    }
    r = sum / 10 | 0;
    sum = sum % 10;
    res.unshift(sum);
  }

  if (r > 0) res.unshift(1);

  return res;
};
