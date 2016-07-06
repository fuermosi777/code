package algs4.chpt2.part4.Q26_Q27;

import algs4.chpt2.part4.A6.MaxPQ;

import java.util.Arrays;

/**
 * Created by hao on 7/6/16.
 */
public class BetterMaxPQ<Item extends Comparable<Item>> {

    private Item[] pq;
    private int N = 0;
    private Item min;

    public BetterMaxPQ(int maxN) {
        pq = (Item[]) new Comparable[maxN + 1];
    }

    public void insert(Item item) {
        if (min == null || item.compareTo(min) < 0) {
            min = item;
        }
        pq[++N] = item;
//        System.out.println("insert " + Arrays.toString(pq));
        swim(N);
    }

    public Item delMax() {
        Item max = pq[1];
        exch(1, N);
        pq[N] = null;
        N--;
        sink(1);
        return max;
    }

    public Item min() {
        return min;
    }

    private void swim(int k) {
        while (k > 1 && less(k / 2, k)) {
            exch(k, k / 2);
            k /= 2;
        }
    }
    private void sink(int k) {
        // insertion
        for (int i = 1; i <= N; i = i * 2) {
            if (pq[i + 1] != null && less(i, i + 1)) {
                i++;
            }
            for (int j = i; j >= 1 && j / 2 >= 1; j /= 2) {
                if (less(j / 2, j)) {
                    exch(j, j / 2);
                }
            }
        }
    }

    public int size() {
        return N;
    }

    private void exch(int i, int j) {
        if (i == j) return;
        Item t = pq[i];
        pq[i] = pq[j];
        pq[j] = t;
    }

    private boolean less(int i, int j) {
        return pq[i].compareTo(pq[j]) < 0;
    }

    public static void main(String[] args) {
        Integer[] a = {6,3,7,0,2,8,7,4,9,1,4,2,0};
        BetterMaxPQ mpq = new BetterMaxPQ(a.length);
        mpq.insert(6);System.out.println(Arrays.toString(mpq.pq));
        mpq.insert(3);System.out.println(Arrays.toString(mpq.pq));
        mpq.insert(7);System.out.println(Arrays.toString(mpq.pq));
        mpq.insert(0);System.out.println(Arrays.toString(mpq.pq));
        mpq.insert(2);System.out.println(Arrays.toString(mpq.pq));
        mpq.delMax();System.out.println(Arrays.toString(mpq.pq));
        mpq.insert(8);System.out.println(Arrays.toString(mpq.pq));
        System.out.println(mpq.min());
    }
}
