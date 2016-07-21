package algs4.chpt3.part2.A3;

import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdOut;

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
        root = put(root, key, value);
    }

    private Node put(Node n, Key key, Value value) {
        if (n == null) {
            return new Node(key, value, 1);
        }
        if (n.key.compareTo(key) > 0) {
            n.left = put(n.left, key, value);
        } else if (n.key.compareTo(key) < 0) {
            n.right = put(n.right, key, value);
        } else {
            n.value = value;
        }
        n.N = size(n.left) + size(n.right) + 1;
        return n;
    }

    public void altPut(Key key, Value value) {
        Node n = root;
        Stack<Node> path = new Stack<>();
        if (n == null) {
            root = new Node(key, value, 1);
            return;
        }
        while (n != null) {
            int cmp = n.key.compareTo(key);
            if (cmp == 0) {
                n.value = value;
                return;
            } else {
                if (cmp > 0) {
                    path.push(n);
                    if (n.left == null) {
                        n.left = new Node(key, value, 1);
                        updateN(path);
                        return;
                    } else {
                        n = n.left;
                    }
                } else {
                    path.push(n);
                    if (n.right == null) {
                        n.right = new Node(key, value, 1);
                        updateN(path);
                        return;
                    } else {
                        n = n.right;
                    }
                }
            }
        }
    }

    private void updateN(Stack<Node> path) {
        while (!path.isEmpty()) {
            Node n = path.pop();
            n.N = size(n.left) + size(n.right) + 1;
        }
    }

    public Key min() {
        if (root == null) return null;
        Node n = root;
        while (n != null && n.left !=  null) {
            n = n.left;
        }
        return n.key;
    }

    private Node min(Node node) {
        if (node == null) return null;
        if (node.left != null) {
            return min(node.left);
        } else {
            return node;
        }
    }

    public Key max() {
        if (root == null) return null;
        Node n = root;
        while (n != null && n.right !=  null) {
            n = n.right;
        }
        return n.key;
    }

    public Key floor(Key key) {
        return null;
    }

    public Key ceil(Key key) {
        return null;
    }

    public void delMin() {
        root = delMin(root);
    }

    public void altDelMin() {
        if (root == null) return;

        Node n = root;
        Stack<Node> path = new Stack<>();
        while (n != null && n.left != null) {
            path.push(n);
            n = n.left;
        }

        if (path.size() > 0) {
            path.peek().left = n.right;
        } else {
            root = n.right;
        }
        updateN(path);
    }

    private Node delMin(Node node) {
        if (node == null) return null;
        if (node.left == null) {
            return node.right;
        }
        node.left = delMin(node.left);
        node.N = size(node.left) + size(node.right) + 1;
        return node;
    }

    public void del(Key key) {
        if (root == null) return;
        Node n = root;
        Stack<Node> path = new Stack<>();
        while (n != null) {
            int cmp = n.key.compareTo(key);
            if (cmp > 0) {
                path.push(n);
                n = n.left;
            } else if (cmp < 0) {
                path.push(n);
                n = n.right;
            } else {
                Node t = n;
                if (t.right != null) {
                    Node x = min(t.right);
                    x.right = delMin(t.right);
                    x.left = t.left;
                    if (path.size() > 0) {
                        path.peek().right = x;
                    } else {
                        root = x;
                    }
                } else {
                    if (path.size() > 0) {
                        path.peek().left = t.left;
                    } else {
                        root = t.left;
                    }
                }


                updateN(path);
                break;
            }
        }
    }

    public int height() {
        return height(root);
    }

    private int height(Node node) {
        if (node == null) return 0;
        return Math.max(height(node.left), height(node.right)) + 1;
    }

    public void print() {
        print(root);
    }

    private void print(Node node) {
        if (node == null) return;
        StdOut.println(node.key);
        if (node.left != null) {
            print(node.left);
        }
        if (node.right != null) {
            print(node.right);
        }
    }

    public static void main(String[] args) {
        BST<String, Integer> bst = new BST<>();
        bst.altPut("A", 1);
        bst.altPut("C", 2);
        bst.altPut("F", 5);
        bst.altPut("B", 5);
        bst.altPut("G", 5);

//        System.out.println(" --- ");
//        System.out.println("min: " + bst.min());
//        System.out.println("min: " + bst.max());
//
//        bst.delMin();
//        System.out.println("delMin min: " + bst.min());

        bst.del("B");
        System.out.println("delMin min: " + bst.min());
        System.out.println("size: " + bst.size());
        bst.print();

        System.out.println("height: " + bst.height());
    }

}
