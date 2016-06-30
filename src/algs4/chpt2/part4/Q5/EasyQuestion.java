package algs4.chpt2.part4.Q5;

import algs4.chpt2.part4.A6.MaxPQ;

import java.util.Arrays;

/**
 * Created by hao on 6/30/16.
 */
public class EasyQuestion {
    public static void main(String[] args) {
        MaxPQ pq = new MaxPQ(20);
        pq.insert("E");
        pq.insert("A");
        pq.insert("S");
        pq.insert("Y");
        pq.insert("Q");
        pq.insert("U");
        pq.insert("E");
        pq.insert("S");
        pq.insert("T");
        pq.insert("I");
        pq.insert("O");
        pq.insert("N");
        System.out.print(Arrays.toString(pq.array()));
    }
}
