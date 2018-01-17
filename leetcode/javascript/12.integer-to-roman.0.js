/*
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (45.77%)
 * Total Accepted:    128.9K
 * Total Submissions: 281.5K
 * Testcase Example:  '1'
 *
 * Given an integer, convert it to a roman numeral.
 * 
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */

const romainDict = [
  ['I', 'V', 'X'],
  ['X', 'L', 'C'],
  ['C', 'D', 'M'],
  ['M']
];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = '';
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    let ch = str[str.length - i - 1];
    res = charToRomain(ch, romainDict[i]) + res;
  }

  return res;
};

function dup(char, n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += char;
  }
  return res;
}

function charToRomain(char, romans) {
  let num = Number(char);
  if (num < 4) return dup(romans[0], num);
  if (romans.length === 1) return ''; // For number larger than 4999
  if (num === 4) return romans[0] + romans[1];
  if (num < 9) return romans[1] + dup(romans[0], num - 5);
  return romans[0] + romans[2];
}
