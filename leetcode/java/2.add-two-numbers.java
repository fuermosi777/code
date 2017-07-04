public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode f1 = l1;
        ListNode f2 = l2;

        ListNode result = new ListNode(-1);
        ListNode f3 = result;

        int remain = 0;
        while (l1 != null || l2 != null) {
            int v1 = 0;
            int v2 = 0;
            if (l1 != null) v1 = l1.val;
            if (l2 != null) v2 = l2.val;
            int newVal = v1 + v2 + remain;
            if (remain > 0) remain = 0;
            if (newVal >= 10) {
                remain = 1;
                newVal = newVal - 10;
            }
            if (f3.val == -1) {
                f3.val = newVal;
            } else {
                f3.next = new ListNode(newVal);
                f3 = f3.next;
            }
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        if (remain > 0) {
            f3.next = new ListNode(remain);
        }
        return result;
    }
}
