/*
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings
 *
 * algorithms
 * Easy (33.72%)
 * Total Accepted:    109.1K
 * Total Submissions: 323.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * For example,
 * Given "egg", "add", return true.
 * 
 * Given "foo", "bar", return false.
 * 
 * Given "paper", "title", return true.
 * 
 * Note:
 * You may assume both s and t have the same length.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = {}, map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!map1.hasOwnProperty(s[i]) && !map2.hasOwnProperty(t[i])) {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    } else if (map1[s[i]] !== t[i] || map2[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
