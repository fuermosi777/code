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
  if (digits.length === 0) return [];
  let codes = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let last;
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    if (i === 0) {
      last = codes[d].split('');
    } else {
      let current = [];
      let newd = codes[d].split('');
      for (let j = 0; j < last.length; j++) {
        for (let k = 0; k < newd.length; k++) {
          current.push(last[j] + newd[k]);
        }
      }
      last = current;
    }
  }
  return last;
};