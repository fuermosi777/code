/*
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings
 *
 * Medium (26.88%)
 * Total Accepted:    
 * Total Submissions: 
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

/**
 * Get the product of a multi-digit number and a single digit number
 * @param  {String} num1
 * @param  {String} s
 * @return {String}
 */
function singleMultiply(num1, s) {
  s = parseInt(s);
  if (s === 0) return '0';
  if (s === 1) return num1;

  let res = "";
  let d = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let t = parseInt(num1[i]);
    let tr = (t * s) % 10; // temp r
    let nd = (t * s) / 10 | 0; // new d
    let od = d; // old d
    let r = (tr + od) % 10;
    d = nd + (tr + od) / 10 | 0;
    res = r.toString() + res;
  }
  if (d > 0) res = d + res;
  return res.toString();
}

/**
 * Appending zeros to a number string
 * @param  {String} num
 * @param  {Number} ct
 * @return {String}
 */
function appendZero(num, ct) {
  let res = num;
  for (let i = 1; i <= ct; i++) {
    res = res + 0;
  }
  return res;
}

function add(num1, num2) {
  let res = '';
  let d = 0;
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    let a = i >= 0 ? parseInt(num1[i]) : 0;
    let b = j >= 0 ? parseInt(num2[j]) : 0;
    let r = (a + b + d) % 10;
    d = a + b + d >= 10 ? 1 : 0;
    res = r.toString() + res;
  }
  if (d > 0) {
    res = d.toString() + res;
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

  let res = 0;
  for (let i = num2.length - 1, j = 0; i >= 0; i--, j++) {
    let p = appendZero(singleMultiply(num1, num2[i]), j);
    res = add(res, p);
  }
  return res;
};