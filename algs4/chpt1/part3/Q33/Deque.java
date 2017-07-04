import java.util.Iterator;

public class Deque<Item> implements Iterable<Item> {

    private class Node {
        Node prev;
        Node next;
        Item item;
    }

    private int N;
    private Node first;
    private Node last;

    public boolean isEmpty() {
        return N == 0;
    }

    public Deque() {
        first = null;
        N = 0;
        last = null;
    }

    public int size() {
        return N;
    }

    public void pushLeft(Item item) {
        Node newNode = new Node();
        newNode.prev = null;
        newNode.item = item;
        if (N == 0) {
            first = newNode;
            last = first;
            newNode.next = null;
        } else {
            Node oldFirst = first;
            first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        N++;
    }

    public void pushRight(Item item) {
        Node newNode = new Node();
        newNode.next = null;
        newNode.item = item;
        if (N == 0) {
            last = new Node();
            first = last;
            newNode.prev = null;
        } else {
            Node oldLast = last;
            last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        N++;
    }

    public Item popLeft() {
        Item item = first.item;
        if (first.next == null) {
            first = null;
            last = null;
        } else {
            Node newFirst = first.next;
            newFirst.prev = null;
            first = newFirst;
        }
        N--;
        return item;
    }

    public Item popRight() {
        Item item = last.item;
        if (last.prev == null) {
            first = null;
            last = null;
        } else {
            Node newLast = last.prev;
            newLast.next = null;
            last = newLast;
        }
        N--;
        return item;
    }

    public Iterator<Item> iterator() {
        return new DequeIterator();
    }
    private class DequeIterator implements Iterator<Item> {
        private Node current = first;
        public boolean hasNext() {
            return current != null;
        }
        public void remove() {}
        public Item next() {
            Item item = current.item;
            current = current.next;
            return item;
        }
    }
    public static void main(String[] args) {
        Deque<String> d = new Deque<>();
        d.pushLeft("cao");
        d.pushRight("ni");
        d.pushLeft("wo");
        d.pushRight("ma");
        d.popLeft();
        d.popRight();
        for (String s : d) {
            System.out.println(s);
        }
    }
}