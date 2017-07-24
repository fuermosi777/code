/*
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list
 *
 * algorithms
 * Easy (45.22%)
 * Total Accepted:    237.3K
 * Total Submissions: 524.7K
 * Testcase Example:  '[]'
 *
 * Reverse a singly linked list.
 * 
 * click to show more hints.
 * 
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// iteration
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//   if (head === null || head.next === null) return head;

//   let last = head;
//   let node = head.next;
//   last.next = null;

//   while (node !== null) {
//     let next = node.next;
//     node.next = last;
//     last = node;
//     node = next;
//   }
//   return last;
// };


// recursion
function reverse(head) {
  if (head.next === null) {
    return {head, tail: head};
  } else if (head.next.next === null) {
    let newHead = head.next;
    newHead.next = head;
    head.next = null;
    return {head: newHead, tail: head};
  } else {
    let n = reverse(head.next);
    n.tail.next = head;
    head.next = null;
    return {tail: head, head: n.head};
  }
}

// recursion
var reverseList = function(head) {
  if (head === null) return null;
  return reverse(head).head;
};