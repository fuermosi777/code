package algs4.chpt3.part3.A4;

/**
 * Created by hao on 8/2/16.
 */
public class RBT<Key extends Comparable<Key>, Value> {

    private static final boolean RED = true;
    private static final boolean BLACK = false;

    Node root;

    private class Node {
        Key key;
        Value val;
        Node left, right;
        int N;
        boolean color;

        public Node(Key key, Value val, int N, boolean color) {
            this.key = key;
            this.val = val;
            this.N = N;
            this.color = color;
        }
    }

    private boolean isRed(Node n) {
        if (n == null) return false;
        return n.color;
    }

    private Node rotateLeft(Node h) {
        Node x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RED;
        x.N = h.N;
        h.N = 1 + size(h.left) + size(h.right);
        return x;
    }

    private Node rotateRight(Node h) {
        Node x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = RED:
        x.N = h.N;
        h.N = size(h);

        return x;
    }

    private void flipColors(Node h) {
        h.color = RED;
        h.left.color = BLACK;
        h.right.color = BLACK;
    }

    private int size(Node n) {
        if (n == null) return 0;
        return 1 + size(n.left) + size(n.right);
    }

    public void put(Key key, Value val) {
        root = put(root, key, val);
        root.color = BLACK;
    }

    private Node put(Node h, Key key, Value val) {
        if (h == null) {
            return new Node(key, val, 1, RED);
        }
        int cmp = key.compareTo(h.key);
        if (cmp > 0) {
            h.right = put(h.right, key, val);
        } else if (cmp < 0) {
            h.left = put(h.left, key, val);
        } else {
            h.val = val;
        }

        if (isRed(h.right) && !isRed(h.left)) {
            h = rotateLeft(h);
        }
        if (isRed(h.left) && isRed(h.left.left)) {
            h = rotateRight(h);
        }
        if (isRed(h.right) && isRed(h.left)) {
            flipColors(h);
        }


        h.N = size(h);
        return h;
    }

}
