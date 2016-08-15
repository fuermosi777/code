package algs4.chpt3.part5.Q10;

/**
 * Created by hao on 8/14/16.
 */
public class RedBackBSTDuplicateKey<Key extends Comparable<Key>, Value> {

    private static final boolean RED = true;
    private static final boolean BLACK = false;

    private class Node {
        private Key key;
        private Value val;
        private boolean color;
        private Node left;
        private Node right;
        public Node(Key key, Value val, boolean color) {
            this.key = key;
            this.val = val;
            this.color = color;
        }
    }

    private Node root;
    private int N;

    public RedBackBSTDuplicateKey() {
        N = 0;
    }

    private Node rotateLeft(Node h) {
        Node x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    private Node rotateRight(Node h) {
        Node x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    private Node flipColors(Node h) {
        h.color = RED;
        h.left.color = BLACK;
        h.right.color = BLACK;
    }

    public void put(Key key, Value val) {
        root = put(root, key, val);
        root.color = BLACK;
    }

    private Node put(Node node, Key key, Value val) {
        if (node == null) {
            return new Node(key, val, RED);
        }
        if (node.key.compareTo(key) >= 0) {
            node.left = put(node.left, key, val);
        } else {
            node.right = put(node.right, key, val);
        }

        if (node.left.color == BLACK && node.right.color == RED) {
            node = rotateLeft(node);
        }

        if (node.left.color == RED && node.left.left.color == RED) {
            node = rotateRight(node);
        }

        if (node.left.color == RED && node.right.color == RED) {
            node = flipColors(node);
        }

        return node;
    }

    public Value get(Key key, Value val) {

    }

    public void delete(Key key) {

    }

    public static void main(String[] args) {

    }
}
