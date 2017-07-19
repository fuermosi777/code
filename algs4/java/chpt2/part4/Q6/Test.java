package algs4.chpt2.part4.Q6;

import algs4.chpt2.part4.A6.MaxPQ;

import java.util.Arrays;

/**
 * Created by hao on 6/30/16.
 */
public class Test {
    public static void main(String[] args) {
        MaxPQ pq = new MaxPQ(20);
        pq.insert("P");
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("R");
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("I");
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("O");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("R");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("I");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("T");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("Y");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("Q");
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("U");
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("E");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("U");
        System.out.println(Arrays.toString(pq.array()));
        pq.delMax();
        System.out.println(Arrays.toString(pq.array()));
        pq.insert("E");
        System.out.println(Arrays.toString(pq.array()));
    }
}
