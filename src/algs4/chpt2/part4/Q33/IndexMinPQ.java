package algs4.chpt2.part4.Q33;

import java.util.Arrays;

/**
 * Created by hao on 7/7/16.
 */
public class IndexMinPQ<Item extends Comparable<Item>> {
    /*
    index -> items
    qp[index] = pq
     */

    private int[] pq;
    private Item[] items;
    private int[] qp;
    private int N;
    public IndexMinPQ(int maxN) {
        pq = new int[maxN + 1];
        qp = new int[maxN + 1];
        items = (Item[]) new Comparable[maxN + 1];
        for (int i = 0; i < maxN + 1; i++) {
            qp[i] = -1;
        }
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public boolean contains(int k) {
        return qp[k] != -1;
    }

    public void insert(int k, Item item) {
        pq[N + 1] = k;
        qp[k] = N + 1;
        N++;
        items[k] = item;
        swim(N);
    }

    public Item min() {
        return items[pq[1]];
    }

    public int delMin() {
        int idx = pq[1];
        exch(1, N);
        N--;
        sink(1);

        items[pq[N + 1]] = null;
        qp[pq[N + 1]] = -1;

        return idx;
    }

    public int minIndex() {
        return pq[1];
    }

    public void change(int k, Item item) {
        items[k] = item;
        sink(qp[k]);
        swim(qp[k]);
    }

    public void delete(int k) {
        exch(qp[k], N);
        N--;
        swim(qp[k]);
        sink(qp[k]);
        items[k] = null;
        qp[k] = -1;
    }

    private void sink(int k) {
        while (2 * k <= N) {
            int j = 2 * k;
            if (j < N && !less(2 * k, 2 * k + 1)) j++;
            if (less(j, k)) {
                exch(j, k);
                k = j;
            } else {
                break;
            }
        }
    }
    private void swim(int k) {
        while (k / 2 >= 1 && less(k, k / 2)) {
            exch(k, k / 2);
            k /= 2;
        }
    }
    private boolean less(int i, int j) {
        return items[pq[i]].compareTo(items[pq[j]]) < 0;
    }
    private void exch(int i, int j) {
        int t = pq[i];
        pq[i] = pq[j];
        pq[j] = t;

        qp[pq[i]] = i;
        qp[pq[j]] = j;
    }

    public static void main(String[] args) {
        IndexMinPQ<String> mpq = new IndexMinPQ(10);
        mpq.insert(1, "E");
        mpq.insert(2, "S");
        mpq.insert(3, "D");
        mpq.insert(4, "A");
        mpq.change(4, "B");
        System.out.println(mpq.min());
    }
}
