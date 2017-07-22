/*
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break
 *
 * algorithms
 * Medium (29.65%)
 * Total Accepted:    150.9K
 * Total Submissions: 509K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words. You may assume the dictionary does
 * not contain duplicate words.
 * 
 * 
 * For example, given
 * s = "leetcode",
 * dict = ["leet", "code"].
 * 
 * 
 * 
 * Return true because "leetcode" can be segmented as "leet code".
 * 
 * 
 * 
 * UPDATE (2017/1/4):
 * The wordDict parameter had been changed to a list of strings (instead of a
 * set of strings). Please reload the code definition to get the latest
 * changes.
 * 
 */

function contains(s, dict, failed) {
  if (dict.hasOwnProperty(s)) return true;
  if (failed.hasOwnProperty(s)) return false;

  for (let i = 1; i <= s.length; i++) {
    if (dict.hasOwnProperty(s.substring(0, i))) {
      if (contains(s.substring(i), dict, failed)) {
        return true;
      }
    }
  }
  failed[s] = false;
  return false;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dict = {};
  wordDict.forEach(word => dict[word] = true);
  let failed = {};
  
  return contains(s, dict, failed);
};
