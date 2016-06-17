public class PrintBackward {
    private static class Queue<Item> {
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

    }
    public static void main(String[] args) {
        String s = "zheshiyigejiashede";
        int k = 4;
        Queue<Character> qc = new Queue<>();
        for (char c : s.toCharArray()) {
            qc.enqueue(c);
        }
        for (int i = 0; i < s.length(); i++) {
            char dqc = qc.dequeue();
            if (i == k) {
                System.out.println(dqc);
                break;
            }
        }
    }
}