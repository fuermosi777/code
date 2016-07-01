package algs4.chpt2.part4.Q24;

import java.util.LinkedList;


// incomplete

/**
 * Created by hao on 6/30/16.
 */
public class LinkedListMaxPQ<Item extends Comparable<Item>> {
    private class Node {
        Node parent;
        Node left;
        Node right;
        Item item;
    }

    private int N;
    private Node first;

    public LinkedListMaxPQ() {
        N = 0;
    }

    public void insert(Item item) {
        Node last = shortest();

        Node newNode = new Node();
        if (last == null) {
            first = newNode;
        } else {
            if (last.left == null) {
                last.left = newNode;
            } else {
                last.right = newNode;
            }
        }
        newNode.parent = last;
        swim(newNode);
    }

    public Item delMax() {
        return null;
    }

    private Node shortest() {
        if (first == null) return null;
        LinkedList<Node> q = new LinkedList();
        q.add(first);
        Node node;
        while (true) {
            node = q.remove();
            if (node.right == null) break;
            q.add(node.left);
            q.add(node.right);
        }
        return node;
    }

    private void sink(Node node) {

    }

    private void swim(Node node) {
        while (node.parent != null && node.item.compareTo(node.parent.item) > 0) {
            Node parent = node.parent;
            Node grand = parent.parent;
            Node childLeft = node.left;
            Node childRight = node.right;
            Node sibiling = parent.left == node ? parent.right : parent.left;

            if (childLeft != null) {
                childLeft.parent = parent;
            }
            parent.left = childLeft;

            if (childRight != null) {
                childRight.parent = parent;
            }
            parent.right = childRight;

            parent.parent = node;
            node.left = parent;
            node.right = sibiling;
            sibiling.parent = node;
            node.parent = grand;
            if (grand != null) {
                if (grand.left == parent) {
                    grand.left = node;
                } else {
                    grand.right = node;
                }
            }
        }
    }
}
