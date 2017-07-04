package algs4.chpt2.part4.Q3;

import algs4.chpt2.part4.A6.MaxPQ;

import java.util.Arrays;

/**
 * Created by hao on 6/29/16.
 */
public class MaxPQUnsortedList<Item extends Comparable<Item>> {
    public Item[] pq;
    private int N = 0;

    public MaxPQUnsortedList(int MaxN) {
        pq = (Item[]) new Comparable[MaxN];
    }

    public void insert(Item item) {
        pq[N] = item;
        N++;
    }

    public Item delMax() {
        int max = 0;
        for (int i = 0; i < N; i++) {
            if (pq[i].compareTo(pq[max]) > 0) {
                max = i;
            }
        }

        Item item = pq[max];
        pq[max] = pq[N - 1];
        pq[N - 1] = null;
        N--;

        return item;
    }
    public static void main(String[] args) {
        Integer[] a = {6,3,7,0,2,8,7,4,9,1,4,2,0};
        MaxPQUnsortedList mpq = new MaxPQUnsortedList(a.length);
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
