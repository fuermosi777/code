/*
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (47.25%)
 * Total Accepted:    201.2K
 * Total Submissions: 425.3K
 * Testcase Example:  '"DCXXI"'
 *
 * Given a roman numeral, convert it to an integer.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let ch = s[s.length - 1 - i];
    let lastCh = i > 0 ? s[s.length - i] : null;
    if (lastCh && map[ch] < map[lastCh]) {
      res -= map[ch];
    } else {
      res += map[ch]
    }
  }

  return res;
};
