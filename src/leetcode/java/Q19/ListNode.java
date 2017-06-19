package Q19;

/**
 * Created by hao on 6/18/17.
 */
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }

    public String toString() {
        String res = "";
        ListNode n = this;
        while (n != null) {
            res += n.val;
            if (n.next != null) res += "->";
            n = n.next;
        }
        return res;
    }

    public static ListNode createFromArray(int[] arr) {
        if (arr.length == 0) return null;

        ListNode head = new ListNode(arr[0]);
        ListNode current = head;

        for (int i = 1; i < arr.length; i++) {
            ListNode node = new ListNode(arr[i]);
            current.next = node;
            current = node;
        }

        return head;
    }
}
