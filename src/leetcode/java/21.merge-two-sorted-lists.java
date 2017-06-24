/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists
 *
 * Easy (38.85%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[]\n[]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode n1 = l1;
        ListNode n2 = l2;
        if (n1 == null && n2 == null) return null;

        ListNode head = null;
        ListNode n3 = head;

        while (n1 != null || n2 != null) {
            int nextVal = 0;
            if (n1 == null) {
                nextVal = n2.val;
                n2 = n2.next;
            } else if (n2 == null) {
                nextVal = n1.val;
                n1 = n1.next;
            } else if (n1.val > n2.val) {
                nextVal = n2.val;
                n2 = n2.next;
            } else {
                nextVal = n1.val;
                n1 = n1.next;
            }
            if (head == null) {
                head = new ListNode(nextVal);
                n3 = head;
            } else {
                n3.next = new ListNode(nextVal);
                n3 = n3.next;
            }
        }

        return head;
    }
}
