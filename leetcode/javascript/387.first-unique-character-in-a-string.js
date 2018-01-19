/*
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (47.27%)
 * Total Accepted:    96K
 * Total Submissions: 203.2K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */

class Node {
  constructor(val, pos) {
    this.val = val;
    this.ct = 1;
    this.pos = pos;
    this.next = null;
  }
}
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map(); // <char, Node>
  let head = null;
  let tail = null;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (map.has(ch)) {
      map.get(ch).ct += 1;
    } else {
      let node = new Node(ch, i);
      if (!head) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
      map.set(ch, node)
    }
  }
  let n = head;
  while (n) {
    if (n.ct === 1) {
      return n.pos;
    }
    n = n.next;
  }

  return -1;
};