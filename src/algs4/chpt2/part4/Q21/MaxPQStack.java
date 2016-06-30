package algs4.chpt2.part4.Q21;

import algs4.chpt2.part4.A6.MaxPQ;

/**
 * Created by hao on 6/30/16.
 */
public class MaxPQStack<Item extends Comparable<Item>> {
    private Item[] id;
    private MaxPQ<Integer> pq;
    private int N;

    public MaxPQStack(int maxN) {
        id = (Item[]) new Comparable[maxN];
        pq = new MaxPQ<Integer>(maxN);
        N = 0;
    }

    public void push(Item item) {
        id[N++] = item;
        pq.insert(N - 1);
    }

    public Item pop() {
        Integer max = pq.delMax();
        Item item = id[max];
        N--;
        return item;
    }
}
