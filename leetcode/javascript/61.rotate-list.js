/*
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list
 *
 * algorithms
 * Medium (24.34%)
 * Total Accepted:    115.3K
 * Total Submissions: 473.8K
 * Testcase Example:  '[]\n0'
 *
 * Given a list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * For example:
 * Given 1->2->3->4->5->NULL and k = 2,
 * return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) return null;

  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    node = node.next;
  }

  let more = k % length;
  if (more === 0) return head;
  let i = 0;
  node = head;
  let tail, newTail, newHead;
  while (node !== null) {
    i++;
    if (i === length - more) {
      newTail = node;
    } 
    if (i === length - more + 1) {
      newHead = node;
    }
    if (node.next === null) {
      tail = node;
    }
    node = node.next;
  }
  tail.next = head;
  newTail.next = null;
  return newHead;
};
