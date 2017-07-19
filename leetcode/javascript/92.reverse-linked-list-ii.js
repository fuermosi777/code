/*
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii
 *
 * Medium (30.56%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[5]\n1\n1'
 *
 * 
 * Reverse a linked list from position m to n. Do it in-place and in
 * one-pass.
 * 
 * 
 * 
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * 
 * 
 * return 1->4->3->2->5->NULL.
 * 
 * 
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ? m ? n ? length of list.
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (head === null || head.next === null || m === n) return head;

  let preStart = null;
  let start = null;
  let end = null;
  let postEnd = null;
  let i = 1;
  let node = head;
  let last = null;
  while (i <= n + 1) {
    if (i === m - 1) preStart = node;
    if (i === m) start = node;
    
    if (i === n - 1) end = node.next;
    if (i === n) end = node;
    if (i === n + 1) postEnd = node;
    if (m <= i && i < n) {
      let next = node.next;
      let nextNext = null;
      if (next !== null) {
        nextNext = next.next;
        next.next = node;
      }

      if (last !== null) node.next = last;

      last = next;

      i += 2;
      node = nextNext;
    } else if (i === n) {
      let next = node.next;
      node.next = last;
      node = next;
      i += 1;
    } else {
      if (node !== null) node = node.next;
      i += 1;
    }
  }

  if (preStart !== null) {
    preStart.next = end;
  } else {
    head = end;
  }
  start.next = postEnd;

  return head;
};
