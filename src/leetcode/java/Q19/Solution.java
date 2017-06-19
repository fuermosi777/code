package Q19;
/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 *
 * Medium (33.08%)
 * Total Accepted:    176890
 * Total Submissions: 534651
 * Testcase Example:  '[1]\n1'
 *
 * Given a linked list, remove the nth node from the end of list and return its
 * head.
 * 
 * 
 * For example,
 * 
 * 
 * ⁠  Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * ⁠  After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * 
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 * 
 */


import java.util.ArrayList;
import java.util.List;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        List<ListNode> helper = new ArrayList<>();
        ListNode node = head;
        while (node != null) {
            helper.add(node);
            node = node.next;
        }

        int index = helper.size() - n;
        ListNode toRemove = index >= 0 ? helper.get(index) : null;
        ListNode prev = index - 1 >= 0 ? helper.get(index - 1) : null;
        ListNode next = index + 1 < helper.size() ? helper.get(index + 1) : null;
        ListNode newHead = removeNode(toRemove, prev, next, head);
        return newHead;
    }

    private ListNode removeNode(ListNode node, ListNode prev, ListNode next, ListNode head) {
        if (node == null || (prev == null && next == null)) {
            return null;
        } else if (prev == null) {
            return next;
        } else if (next == null) {
            prev.next = null;
            return head;
        } else {
            prev.next = next;
            return head;
        }
    }

//    public static void main(String[] args) {
//        Solution s = new Solution();
//        System.out.println(s.removeNthFromEnd(ListNode.createFromArray(new int[]{1,2,3}), 0));
//    }
}
