package algs4.chpt2.part4.A6;

import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/29/16.
 */
public class MaxPQ<Item extends Comparable<Item>> {
    private Item[] pq;
    private int N = 0;
    public MaxPQ(int maxN) {
        pq = (Item[]) new Comparable[maxN + 1];

    }
    public boolean isEmpty() {
        return N == 0;
    }
    public int size() {
        return N;
    }
    public void insert(Item item) {
        pq[N + 1] = item;
        N++;
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
    private boolean less(int i, int j) {
        if (pq[i].compareTo(pq[j]) < 0) {
            return true;
        } else {
            return false;
        }
    }
    private void exch(int i, int j) {
        Item t = pq[i];
        pq[i] = pq[j];
        pq[j] = t;
    }
    private void swim(int k) {
        while (k > 1 && less(k / 2, k)) {
            exch(k, k / 2);
            k /= 2;
        }
    }
    private void sink(int k) {
        while (true) {
            if (k * 2 > N) break;
            int x = k * 2;
            int y = x + 1;
            if (less(k, x)) {
                exch(k, x);
                k = x;
            } else if (less(k, y)) {
                exch(k, y);
                k = y;
            } else {
                break;
            }
        }
    }
    public static void main(String[] args) {
        Integer[] a = {6,3,7,0,2,8,7,4,9,1,4,2,0};
        MaxPQ mpq = new MaxPQ(a.length);
        mpq.insert(6);
        mpq.insert(3);
        mpq.insert(7);
        mpq.insert(5);
        mpq.insert(2);
        mpq.delMax();
        mpq.insert(4);
        System.out.println(Arrays.toString(mpq.pq));
    }
}
