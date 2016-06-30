package algs4.chpt2.part4.Q3;

import java.util.Arrays;

/**
 * Created by hao on 6/30/16.
 */
public class MaxPQSortedList<Item extends Comparable<Item>> {
    public Item[] pq;
    private int N = 0;
    public MaxPQSortedList(int maxN) {
        pq = (Item[]) new Comparable[maxN];
    }
    public void insert(Item item) {
        pq[N] = item;
        N++;

        // insert sort
        for (int i = N - 1; i > 0 && pq[i].compareTo(pq[i - 1]) < 0; i--) {
            Item t = pq[i];
            pq[i] = pq[i - 1];
            pq[i - 1] = t;
        }
    }
    public Item delMax() {
        Item max = pq[N - 1];
        pq[N - 1] = null;
        N--;
        return max;
    }
    public static void main(String[] args) {
        Integer[] a = {6,3,7,0,2,8,7,4,9,1,4,2,0};
        MaxPQSortedList mpq = new MaxPQSortedList(a.length);
        mpq.insert(6);
        mpq.insert(3);
        mpq.insert(7);
        mpq.insert(5);
        mpq.insert(2);
        System.out.println(mpq.delMax());
        mpq.insert(4);
        System.out.println(mpq.delMax());
    }
}

