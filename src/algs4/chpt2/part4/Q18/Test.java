package algs4.chpt2.part4.Q18;

import algs4.chpt2.part4.A6.MaxPQ;

import java.util.Arrays;

/**
 * Created by hao on 6/30/16.
 */
public class Test {
    public static void main(String[] args) {
        MaxPQ pq = new MaxPQ(10);
        pq.insert(6);
        pq.insert(2);
        pq.insert(9);
        pq.insert(5);
        pq.insert(3);
        pq.insert(4);
        pq.insert(1);
        System.out.println("init: " + Arrays.toString(pq.array()));
        pq.insert(10);
        pq.delMax();
        System.out.println("insert 1 del max: " + Arrays.toString(pq.array()));
        pq.insert(10);
        pq.insert(11);
        pq.delMax();
        pq.delMax();
        System.out.println("insert 2 del max: " + Arrays.toString(pq.array()));
    }
}
