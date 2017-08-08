/*
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings
 *
 * algorithms
 * Medium (27.00%)
 * Total Accepted:    106.5K
 * Total Submissions: 394.5K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */

function multiplySingle(num1, s) {
  let more = 0;
  let b = parseInt(s);
  let i = num1.length - 1;
  let res = '';
  while (i >= 0) {
    let a = parseInt(num1[i]);
    let product = a * b + more;
    if (product > 9) {
      more = product / 10 | 0;
      product = product % 10;
    } else {
      more = 0;
    }
    res = product + res;
    i--;
  }
  if (more > 0) {
    res = more + res;
  }
  return res;
}

function add(num1, num2) {
  let more = 0;
  let i = num1.length - 1, j = num2.length - 1;
  let res = '';
  while (i >= 0 || j >= 0) {
    let a = i >= 0 ? parseInt(num1[i]) : 0;
    let b = j >= 0 ? parseInt(num2[j]) : 0;
    let sum = a + b + more;
    if (sum > 9) {
      more = 1;
      sum -= 10;
    } else {
      more = 0;
    }
    res = sum + res;
    i--;
    j--;
  }
  if (more !== 0) {
    res = '1' + res;
  }
  return res;
}

function addZeros(num, n) {
  let res = num;
  for (let i = 0; i < n; i++) {
    res = res + '0';
  }
  return res;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let res = '0';
  for (let i = 0; i < num2.length; i++) {
    let j = num2.length - i - 1;
    res = add(res, addZeros(multiplySingle(num1, num2[j]), i));
  }
  return res;
};