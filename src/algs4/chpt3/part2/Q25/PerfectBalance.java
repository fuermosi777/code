package algs4.chpt3.part2.Q25;

import edu.princeton.cs.algs4.Queue;

import java.util.Arrays;
import java.util.Random;

/**
 * Created by hao on 7/21/16.
 */
public class PerfectBalance<Key extends Comparable<Key>> {

    private class Node {
        private Key key;
        private Node left;
        private Node right;

        public Node(Key key) {
            this.key = key;
        }
    }

    private Node root;

    private void shuffle(Key[] a) {
        Random rand = new Random();
        for (int i = 0; i < a.length; i++) {
            int randomNum = rand.nextInt((a.length));
            exch(a, i, randomNum);
        }
    }

    private void exch(Key[] a, int i, int j) {
        Key temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    private void sort(Key[] a) {
        shuffle(a);
        partition(a, 0, a.length - 1);
    }

    private void partition(Key[] a, int lo, int hi) {
        if (lo >= hi) return;
        Key v = a[lo];
        int i = lo, j = hi + 1;
//        System.out.println(Arrays.toString(a));
        while (true) {
            while (a[++i].compareTo(v) < 0 && i < hi) {}
            while (a[--j].compareTo(v) > 0 && j > lo) {}

            if (i >= j) {
                break;
            }
            exch(a, i, j);
        }
//        System.out.println(Arrays.toString(a));
//        System.out.println(" === ");
        exch(a, lo, j);
        partition(a, lo, j - 1);
        partition(a, j + 1, hi);
    }

    public PerfectBalance(Key[] keys) {
        sort(keys);
        Queue<Key> q = new Queue<>();
        addQ(q, keys, 0, keys.length - 1);
        while (!q.isEmpty()) {
            Key key = q.dequeue();
            put(key);
        }
    }

    private void addQ(Queue<Key> q, Key[] a, int lo, int hi) {
        if (lo > hi) return;
        int mid = lo + (hi - lo) / 2;
        q.enqueue(a[mid]);
        addQ(q, a, lo, mid - 1);
        addQ(q, a, mid + 1, hi);
    }


    public void put(Key key) {
        Node n = root;
        if (n == null) {
            Node node = new Node(key);
            root = node;
            return;
        }
        while (n != null) {
            if (n.key.compareTo(key) > 0) {
                if (n.left != null) {
                    n.left = n;
                } else {
                    Node node = new Node(key);
                    n.left = node;
                    return;
                }
            } else if (n.key.compareTo(key) < 0) {
                if (n.right != null) {
                    n.right = n;
                } else {
                    Node node = new Node(key);
                    n.right = node;
                    return;
                }
            } else {
                return;
            }
        }
    }

    public static void main(String[] args) {
        Integer[] keys = {8,9,1,5,3,6,2,7,0,4};
        PerfectBalance<Integer> test = new PerfectBalance<>(keys);
    }

}
