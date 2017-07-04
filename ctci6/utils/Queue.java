package ctci6.utils;

import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * Created by hao on 10/3/16.
 */
public class Queue<Value> implements Iterable<Value> {

    private class Node {
        private Value val;
        private Node next;
        public Node(Value val) {
            this.val = val;
        }
        public void setNext(Node next) {
            this.next = next;
        }
    }

    private Node first;
    private Node last;
    private int N;

    public Queue() {

    }

    public void enqueue(Value val) {
        Node node = new Node(val);
        if (first == null) {
            this.first = node;
            this.last = node;
        } else {
            Node oldLast = this.last;
            oldLast.setNext(node);
            this.last = node;
        }
        N++;
    }

    public Value dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        Node node = this.first;
        if (size() == 1) {
            first = null;
            last = null;
            N--;
            return node.val;
        } else {
            Node newFirst = node.next;
            first = newFirst;
            N--;
            return node.val;
        }
    }

    public int size() {
        return N;
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public class QueueIterator implements Iterator {
        Node node = first;
        public Value next() {
            Node res = node;
            node = node.next;
            return res.val;
        }
        public boolean hasNext() {
            return node != null;
        }
    }

    public QueueIterator iterator() {
        return new QueueIterator();
    }

    public static void main(String[] args) {
        Queue<Integer> q = new Queue<>();
        q.enqueue(1);
        q.enqueue(2);
        for (Integer i : q) {
            System.out.println(i);
        }
    }

}
