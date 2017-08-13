/*
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion
 *
 * algorithms
 * Medium (26.75%)
 * Total Accepted:    162.3K
 * Total Submissions: 606.6K
 * Testcase Example:  '""\n1'
 *
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * string convert(string text, int nRows);
 * 
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let res = '';
  if (numRows === 1) return s; // VIP

  for (let n = 0; n < numRows; n++) {
    if (n < s.length) res += s[n];
    let next = n;
    while (next !== n) { // VIP
      if (numRows - n - 2 >= 0) {
        next += (1 + 2 * (numRows - n - 2) + 1);
        if (next >= s.length) break; // VIP
        res += s[next];
      }
      if (n - 1 >= 0) {
        next += (1 + 2 * (n - 1) + 1);
        if (next >= s.length) break; // VIP
        res += s[next];
      }
    }
  }
  return res;
};