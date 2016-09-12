package algs4.chpt5.part2.A5;

/**
 * Created by hao on 9/11/16.
 */
public class TST<Value> {

    private Node root;

    private class Node {
        private char c;
        Node left, mid, right;
        Value val;
    }

    public Value get(String key) {
        Node x = get(root, key, 0);
        if (x == null) return null;
        return x.val;
    }

    private Node get(Node n, String key, int d) {
        if (n == null) return null;
        if (d == key.length()) return n;
        char c = key.charAt(d);
        if (c < n.c) {
            return get(n.left, key, d);
        } else if (c > n.c) {
            return get(n.right, key, d);
        } else {
            return get(n.mid, key, d + 1);
        }
    }

    public void put(String key, Value val) {
        root = put(root, key, val, 0);
    }

    private Node put(Node n, String key, Value val, int d) {
        char c = key.charAt(d);
        if (n == null) {
            Node x = new Node();
            x.c = c;
            return x;
        }
        if (d == key.length()) {
            n.val = val;
            return n;
        }
        if (c < n.c) {
            n.left = put(n.left, key, val, d);
        } else if (c > n.c) {
            n.right = put(n.right, key, val, d);
        } else {
            n.mid = put(n.mid, key, val, d + 1);
        }
        return n;
    }

}
