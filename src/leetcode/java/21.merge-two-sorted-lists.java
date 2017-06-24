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
        if (n1 == null) return n2;
        if (n2 == null) return n1;

        ListNode head = null;
        ListNode n3 = head;

        while (n1 != null || n2 != null) {
            if (n1 == null) {
                n3.next = n2;
                n2 = n2.next;
            } else if (n2 == null) {
                n3.next = n1;
                n1 = n1.next;
            } else if (n1.val > n2.val) {
                n3.next = n2;
                n2 = n2.next;
            } else {
                n3.next = n1;
                n1 = n1.next;
            }
            if (head == null) {
                head = n3;
            } else {
                n3 = n3.next;
            }
        }

        return head;
    }
}
