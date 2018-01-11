/*
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (29.44%)
 * Total Accepted:    122.3K
 * Total Submissions: 415.4K
 * Testcase Example:  '[]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return null;

  let slow = head, fast = head, prev;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (!head.next) {
    return head;
  }

  let head2 = slow.next;
  slow.next = null;

  let l1 = sortList(head);
  let l2 = sortList(head2);

  return merge(l1, l2);
};

function merge(n1, n2) {
  let head = new ListNode();
  let cur = head;
  let node1 = n1;
  let node2 = n2;
  while (node1 || node2) {
    if (node1 && node2) {
      if (node1.val > node2.val) {
        cur.next = node2;
        node2 = node2.next;
      } else {
        cur.next = node1;
        node1 = node1.next;
      }
    } else if (node1) {
      cur.next = node1;
      node1 = node1.next;
    } else {
      cur.next = node2;
      node2 = node2.next;
    }
    cur = cur.next;
  }

  return head.next;
}

