/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists
 *
 * algorithms
 * Easy (39.02%)
 * Total Accepted:    242.4K
 * Total Submissions: 621K
 * Testcase Example:  '[]\n[]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) return null;

  let head = null;
  let prev = null;
  let n1 = l1, n2 = l2;
  while (n1 !== null || n2 !== null) {
    let node;
    if (n1 === null) {
      node = new ListNode(n2.val);
      n2 = n2.next;
    } else if (n2 === null) {
      node = new ListNode(n1.val);
      n1 = n1.next;
    } else if (n1.val < n2.val) {
      node = new ListNode(n1.val);
      n1 = n1.next;
    } else {
      node = new ListNode(n2.val);
      n2 = n2.next;
    }
    if (head === null) head = node;
    if (prev) prev.next = node;
    prev = node;
  }

  return head;
};
