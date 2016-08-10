package algs4.chpt3.part4.Q2;

import java.util.Arrays;

/**
 * Created by hao on 8/5/16.
 * Do not use SequentialSearchST but reuse its code
 */

public class SeparateChainingHashST<Key, Value> {

    private int M;
    private int N;
    private Node<Key, Value>[] st;
    private int[] ct;

    private class Node<Key, Value> {

        private Key key;
        private Value val;
        private int count;
        private Node next;

        public Node(Key key, Value val, int count) {
            this.key = key;
            this.val = val;
            this.count = count;
        }

    }

    public SeparateChainingHashST(int M) {
        this.M = M;
        N = 0;
        ct = new int[M];
        for (int i = 0; i < ct.length; i++) {
            ct[i] = 0;
        }
        st = (Node[]) new Node[M];
    }

    public int hash(Key key) {
        return (key.hashCode() & 0x7fffffff) % M;
    }

    public Value get(Key key) {
        Node<Key, Value> node = st[hash(key)];
        while (node != null) {
            if (node.key.equals(key)) {
                return node.val;
            }
            node = node.next;
        }
        return null;
    }

    public void put(Key key, Value value) {
        Node node = st[hash(key)];
        if (node == null) {
            Node n = new Node(key, value, N);
            st[hash(key)] = n;
            ct[hash(key)]++;
            N++;
        } else {
            while (node.next != null) {
                if (node.key.equals(key)) {
                    node.val = value;
                    node.count = N;
                    return;
                }
                node = node.next;
            }
            Node n = new Node(key, value, N);
            node.next = n;
            ct[hash(key)]++;
            N++;
        }
    }

    // 3.4.9
    public void delete(Key key) {
        Node node = st[hash(key)];
        Node last = null;
        while (node != null) {
            if (node.key.equals(key)) {
                if (last == null) {
                    st[hash(key)] = node.next;
                    N--;
                } else {
                    last.next = node.next;
                    N--;
                }
            }
            last = node;
            node = node.next;
        }
    }

    public static void main(String[] args) {
        SeparateChainingHashST s = new SeparateChainingHashST(7);
        s.put("A", 0);
        s.put("B", 1);
        s.put("C", 1);
        s.put("D", 1);
        s.put("E", 1);
        s.put("F", 1);
        s.put("G", 1);
        s.put("AB", 1);
        s.put("BF", 1);
        System.out.println(s.get("B"));
        System.out.println(Arrays.toString(s.ct));
    }

}