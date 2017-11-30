/*
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman
 *
 * algorithms
 * Medium (44.91%)
 * Total Accepted:    123.7K
 * Total Submissions: 271.5K
 * Testcase Example:  '1'
 *
 * Given an integer, convert it to a roman numeral.
 * 
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * I = 1
 * V = 5
 * X = 10
 * L = 50
 * C = 100
 * D = 500
 * M = 1000
 */

const Romans = [
  null,
  ['I', 'V', 'X'],
  ['X', 'L', 'C'],
  ['C', 'D', 'M'],
  ['M']
];

function repeat(str, n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += str;
  }
  return res;
}

function convertDigitToRomain(num, digit) {
  let n = Number(num);
  if (n < 4) {
    return repeat(Romans[digit][0], n);
  } else if (n === 4) {
    return Romans[digit][0] + Romans[digit][1];
  } else if (n < 9) {
    return Romans[digit][1] + repeat(Romans[digit][0], n - 5);
  } else if (n === 9) {
    return Romans[digit][0] + Romans[digit][2];
  }

  return ''; // num = '0'
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let str = num.toString();
  let res = '';
  for (let i = str.length; i > 0; i--) {
    res += convertDigitToRomain(str[str.length -  i], i);
  }

  return res;
};
