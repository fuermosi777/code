package algs4.chpt3.part5.Q9;

/**
 * Created by hao on 8/12/16.
 */
public class BSTDuplicateKey<Key extends Comparable<Key>, Value> {
    private class Node {
        private Key key;
        private Value val;
        private Node left;
        private Node right;
        private Node next;

        public Node(Key key, Value val) {
            this.key = key;
            this.val = val;
        }
    }

    private Node root;
    private int N;

    public BSTDuplicateKey() {
        N = 0;
    }

    public void put(Key key, Value val) {
        root = put(root, key, val);
        N++;
    }

    private Node put(Node node, Key key, Value val) {
        if (node == null) {
            return new Node(key, val);
        }
        if (node.key.compareTo(key) < 0) {
            node.right = put(node.right, key, val);
        } else if (node.key.compareTo(key) > 0) {
            node.left = put(node.left, key, val);
        } else {
            node.next = put(node.next, key, val);
        }
        return node;
    }

    public Value get(Key key) {
        Node node = root;
        while (node != null) {
            if (node.key.compareTo(key) < 0) {
                node = node.right;
            } else if (node.key.compareTo(key) > 0) {
                node = node.left;
            } else {
                return node.val;
            }
        }
        return null;
    }

    public void delete(Key key) {

    }

    public static void main(String[] args) {

    }
}
