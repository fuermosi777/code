/*
 * [160] Intersection of Two Linked Lists
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists
 *
 * algorithms
 * Easy (30.53%)
 * Total Accepted:    137.8K
 * Total Submissions: 451.4K
 * Testcase Example:  'No intersection: []\n[]'
 *
 * Write a program to find the node at which the intersection of two singly
 * linked lists begins.
 * 
 * For example, the following two linked lists: 
 * 
 * A:          a1 → a2
 * ⁠                  ↘
 * ⁠                    c1 → c2 → c3
 * ⁠                  ↗            
 * B:     b1 → b2 → b3
 * 
 * begin to intersect at node c1.
 * 
 * Notes:
 * 
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function
 * returns. 
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 * 
 * 
 * 
 * Credits:Special thanks to @stellari for adding this problem and creating all
 * test cases.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getLength(head) {
  if (head === null) return 0;

  let ct = 1;
  let node = head;
  while (node !== null) {
    ct++;
    node = node.next;
  }
  return ct;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let cta = getLength(headA);
  let ctb = getLength(headB);
  if (cta === 0 || ctb === 0) return null;
  let shorter = cta < ctb ? headA : headB;
  let longer = shorter === headA ? headB : headA;

  let startCt = Math.abs(cta - ctb);
  let i = 0;
  while (i < startCt) {
    longer = longer.next;
    i++;
  }
  while (shorter !== longer && shorter !== null) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return shorter;
};
