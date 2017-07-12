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

function appendZero(num, ct) {

}

function add(num1, num2) {
  
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let res = 0;
  for (let i = num2.length - 1, j = 0; i >= 0; i--, j++) {
    
  }
};

console.log(singleMultiply("50", "2"))
