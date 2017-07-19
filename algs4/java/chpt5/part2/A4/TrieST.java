package algs4.chpt5.part2.A4;

import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 9/11/16.
 */
public class TrieST<Value> {
    private int R = 256;
    private Node root;
    private class Node {
        private Value val;
        private Node[] next;
        public Node() {
            next = (Node[]) new Object[R];
        }
    }

    public TrieST() {

    }

    public Value get(String key) {
        Node x = get(root, key, 0);
        if (x == null) return null;
        else return x.val;
    }

    private Node get(Node x, String key, int d) {
        if (x == null) return null;
        if (d == key.length()) return x;
        char c = key.charAt(d);
        return get(x.next[c], key, d + 1);
    }

    public Value get2(String key) {
        Node x = root;
        int d = 0;
        if (x == null) return null;
        while (x != null) {
            if (d < key.length()) {
                return x.val;
            }
            char c = key.charAt(d);
            x = x.next[c];
            d++;
        }
        return x.val;
    }

    public void put(String key, Value val) {
        root = put(root, key, val, 0);
    }

    private Node put(Node x, String key, Value val, int d) {
        if (x == null) x = new Node();
        if (d == key.length()) {
            x.val = val;
            return x;
        }
        char c = key.charAt(d);
        x.next[c] = put(x.next[c], key, val, d + 1);
        return x;
    }

    public Iterable<String> keys() {
        return keysWithPrefix("");
    }

    public Iterable<String> keysWithPrefix(String pre) {
        Queue<String> q = new Queue<>();
        Node start = get(root, pre, 0);
        collect(start, pre, q);
        return q;
    }

    private void collect(Node x, String pre, Queue<String> q) {
        if (x == null) return;
        if (x.val != null) q.enqueue(pre);
        for (char c = 0; c < R; c++) {
            collect(x.next[c], pre + c, q);
        }
    }

    public String longestPrefix(String s) {
        int l = search(root, s, 0, 0);
        return s.substring(0, l);
    }

    public int search(Node x, String s, int d, int length) {
        if (x == null) return length;
        if (d == s.length()) return s.length();
        if (x.val == null) length = d;
        char c = s.charAt(d);
        return search(x.next[c], s, d + 1, length);
    }

    public String longestPrefix2(String s) {
        int d = 0;
        Node x = root;
        if (x == null) return null;
        while (x != null) {
            if (d == s.length()) return s;
            char c = s.charAt(d);
            x = x.next[c];
            d++;
        }
        return s.substring(0, d);
    }
}