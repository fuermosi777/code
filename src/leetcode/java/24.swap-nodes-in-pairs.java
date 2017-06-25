/*
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs
 *
 * Medium (38.01%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[]'
 *
 * 
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * 
 * 
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * 
 * 
 * Your algorithm should use only constant space. You may not modify the values
 * in the list, only nodes itself can be changed.
 * 
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
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode node = head;
        ListNode newHead = head.next;
        ListNode former = null;
        while (node != null) {
          ListNode s = node.next;
          if (node.next == null) break;
          ListNode next = s.next;
          
          if (former != null) {
            former.next = s;
          }
          s.next = node;
          node.next = next;
          former = node;

          node = next;
        }
        return newHead;
    }
}
