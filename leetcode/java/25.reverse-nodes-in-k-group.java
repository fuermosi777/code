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
