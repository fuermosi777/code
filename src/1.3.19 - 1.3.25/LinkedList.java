import sun.awt.image.ImageWatched;

public class LinkedList<Item> {
    private class Node {
        Item item;
        Node next;
    }

    private Node first;
    private Node last;
    private int size;

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    public void enqueue(Item item) {
        Node oldLast = last;
        last = new Node();
        last.item = item;
        last.next = null;

        if (isEmpty()) {
            first = last;
        } else {
            oldLast.next = last;
        }
        size++;
    }
    public Item dequeue() {
        Item item = first.item;
        first = first.next;
        if (isEmpty()) {
            last = null;
        }
        size--;
        return item;
    }

    public Item deleteLast() {
        Item item = last.item;
        Node flag = first;
        while (flag.next != last) {
            flag = flag.next;
        }
        flag.next = null;
        last = flag;
        size--;
        return item;
    }

    public Item delete(int k) {
        Node flag = first;
        int i = 1;
        while (i < k - 1) {
            flag = flag.next;
            i++;
        }

        if (flag.next != null) {
            Item item = flag.next.item;
            flag.next = flag.next.next;
            if (flag.next == null) {
                last = flag;
            }
            size--;
            return item;
        }
        return null;
    }

    public void removeAfter(Node node) {
        if (node == null || node.next == null) return;
        if (node.next.next == null) {
            last = node;
            node.next = null;
        } else {
            node.next = node.next.next;
        }
        size--;
    }

    public void insertAfter(Node n1, Node n2) {
        if (n1 == null || n2 == null) return;
        if (last == n1) {
            n1.next = n2;
            last = n2;
        } else {
            n2.next = n1.next;
            n1.next = n2;
        }
        size++;
    }

    public static void main(String[] args) {
        // test deleteLast()
        LinkedList<Integer> lli = new LinkedList<>();
        lli.enqueue(1);
        lli.enqueue(2);
        lli.enqueue(3);
        System.out.println(lli.delete(3));
    }

}