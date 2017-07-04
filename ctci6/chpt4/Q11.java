package ctci6.chpt4;

import ctci6.utils.BinaryTreeNode;
import ctci6.utils.Queue;

import java.util.Random;

/**
 * Created by hao on 10/4/16.
 */
public class Q11 {

    private class BinaryTree {
        private int N = 0;
        private BinaryTreeNode root;

        public BinaryTreeNode getRandomNodeSlow() {
            if (N == 0) return null;

            Queue<BinaryTreeNode> queue = new Queue<>();
            int i = 0, j = randomIndex();
            queue.enqueue(root);
            while (!queue.isEmpty()) {
                BinaryTreeNode node = queue.dequeue();
                if (node == null) break;
                if (i == 0) return node;
                i++;
                queue.enqueue(node.left);
                queue.enqueue(node.right);
            }
            return null;
        }

        private int randomIndex() {
            return (int) (Math.random() * (N - 1) + 0);
        }

        public BinaryTreeNode getRandomNodeFast() {
            Queue<BinaryTreeNode> queue = new Queue<>();
            queue.enqueue(root);
            while (!queue.isEmpty()) {
                BinaryTreeNode node = queue.dequeue();
                BinaryTreeNode next = randomNode(node);
                if (next == node) {
                    return node;
                } else {
                    queue.enqueue(next);
                }
            }
            return null;
        }

        private BinaryTreeNode randomNode(BinaryTreeNode node) {
            double nodeOdds = 1 / N;
            double leftOdds = node.left.size / N;
            double rightOdds = node.right.size / N;
            double random = Math.random();
            if (random < nodeOdds) {
                return node;
            } else if (random < nodeOdds + leftOdds) {
                return node.left;
            } else {
                return node.right;
            }
        }
    }

    public static void main(String[] args) {
        Random rand = new Random();
        System.out.println(rand.nextInt(10));
    }
}
