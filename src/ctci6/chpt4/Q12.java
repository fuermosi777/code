package ctci6.chpt4;

import ctci6.utils.Queue;

import java.util.Hashtable;

/**
 * Created by hao on 10/4/16.
 */
public class Q12 {

    private class Node {
        public Node left;
        public Node right;
        public int val;
        public Hashtable<Integer, Integer> map;
        public int sum;
        public Node(int val) {
            this.val = val;
            map = new Hashtable<>();
        }
    }

    public int paths(Node root, int target) {
        int num = 0;
        Queue<Node> queue = new Queue<>();
        queue.enqueue(root);
        while (!queue.isEmpty()) {
            Node node = queue.dequeue();
            if (node == root) {
                node.map.put(-1, 1);
                node.sum = node.val;
            }
            if (node.left != null) {
                node.left.sum = node.sum + node.val;
                node.left.map.putAll(node.map);
                if (node.left.map.containsKey(node.sum)) {
                    node.left.map.put(node.sum, node.left.map.get(node.sum) + 1);
                } else {
                    node.left.map.put(node.sum, 1);
                }
                queue.enqueue(node.left);
            }
            if (node.right != null) {
                node.right.sum = node.sum + node.val;
                node.right.map.putAll(node.map);
                if (node.right.map.containsKey(node.sum)) {
                    node.right.map.put(node.sum, node.right.map.get(node.sum) + 1);
                } else {
                    node.right.map.put(node.sum, 1);
                }
                queue.enqueue(node.right);
            }
        }

        Queue<Node> queue1 = new Queue<>();
        while (!queue.isEmpty()) {
            Node node = queue.dequeue();
            if (node.map.containsKey(node.sum - target)) {
                num = num + node.map.get(node.sum - target);
            }
            if (node.left != null) queue.enqueue(node.left);
            if (node.right != null) queue.enqueue(node.right);
        }

        return num;
    }

    public static void main(String[] args) {

    }


}
