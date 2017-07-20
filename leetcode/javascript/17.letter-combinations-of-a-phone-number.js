/*
 * [17] Letter Combinations of a Phone Number
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below.
 * 
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 *
 * Company: Facebook
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  let res = [];
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    if (res.length === 0) {
      res = map[d];
    } else {
      let current = [];
      for (let j = 0; j < res.length; j++) {
        for (let k = 0; k < map[d].length; k++) {
          current.push(res[j] + map[d][k]);
        }
      }
      res = current;
    }
  }

  return res;
};