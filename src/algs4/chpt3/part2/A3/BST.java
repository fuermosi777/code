package algs4.chpt3.part2.A3;

/**
 * Created by hao on 7/15/16.
 */
public class BST<Key extends Comparable<Key>, Value> {
    private class Node {
        private Key key;
        private Value value;
        private int N;
        private Node left;
        private Node right;

        public Node(Key key, Value value, int N) {
            this.key = key;
            this.value = value;
            this.N = N;
        }
    }

    private Node root;

    public BST() {

    }

    public int size() {
        return size(root);
    }

    private int size(Node node) {
        if (node == null) return 0;
        else return node.N;
    }

    public Value get(Key key) {
        Node n = root;
        while (n != null) {
            if (n.key.compareTo(key) > 0) {
                n = n.left;
            } else if (n.key.compareTo(key) < 0) {
                n = n.right;
            } else {
                return n.value;
            }
        }
        return null;
    }

    public void put(Key key, Value value) {

    }
}
