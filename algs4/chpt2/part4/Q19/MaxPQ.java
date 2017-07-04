package algs4.chpt2.part4.Q19;

import algs4.chpt2.part3.A5.Quick;

import java.util.Arrays;

/**
 * Created by hao on 6/30/16.
 */
public class MaxPQ<Item extends Comparable<Item>> {
    private Item[] pq;
    private int N;

    public MaxPQ(Item[] a) {
        N = a.length;
        pq = (Item[]) new Comparable[N + 1];

        for (int i = 1; i <= N; i++) {
            pq[i] = a[i - 1];
        }

//        System.out.print(Arrays.toString(pq));

        for (int i = N / 2; i >= 1; i--) {
            sink(i);
        }
    }

    private void sink(int k) {
        while (true) {
            if (2 * k > N) break;
            int j = 2 * k;
            if (j < N && pq[j].compareTo(pq[j + 1]) < 0) {
                j++;
            }
            if (pq[k].compareTo(pq[j]) < 0) {
                Quick.exch(pq, k, j);
            }
            k = j;

        }
    }

    public static void main(String[] args) {
        Integer[] a = {6, 4, 8, 0, 3, 5, 2, 7, 9};
        MaxPQ b = new MaxPQ(a);
        System.out.print(Arrays.toString(b.pq));
    }
}
