/*
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group
 *
 * Hard (30.42%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[]\n1'
 *
 * 
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * 
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 * 
 * You may not alter the values in the nodes, only nodes itself may be
 * changed.
 * 
 * Only constant memory is allowed.
 * 
 * 
 * For example,
 * Given this linked list: 1->2->3->4->5
 * 
 * 
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * 
 * 
 * For k = 3, you should return: 3->2->1->4->5
 * 
 */

public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || head.next == null) return head;
        if (k == 1) return head;
        int size = 0;
        ListNode n = head;
        ListNode newHead = null;
        while (n != null) {
            size++;
            if (size == k) newHead = n;
            n = n.next;
        }
        if (k > size) return head;

        int i = 1; // counter
        n = head; // reset the flag
        ListNode lt = null, // last partial tail
            next = null, // next node
            t = null, // current tail
            f = null; // former node
        while (i <= size - size % k) {
            if ((i - 1) % k == 0) { // is partial tail
                f = null;
                t = n;
            }
            if (i % k == 0) { // is partial head
                if (lt != null) {
                    lt.next = n;
                }
                lt = t;
            }
            next = n.next;
            if (f != null) {
                n.next = f;
            }

            f = n;
            n = next;
            i++;
        }
        lt.next = n;

        return newHead;
    }
}
