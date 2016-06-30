package algs4.chpt2.part4.Q3;

import java.util.LinkedList;

/**
 * Created by hao on 6/30/16.
 */
public class MaxPQLinkedList<Item extends Comparable<Item>> {

    private LinkedList<Item> pq;

    public MaxPQLinkedList() {
        pq = new LinkedList<>();
    }

    public void insert(Item item) {
        pq.add(item);
    }

    public Item delMax() {
        Item max = pq.getFirst();
        for (Item i : pq) {
            if (i.compareTo(max) > 0) {
                max = i;
            }
        }
        pq.remove(max);
        return max;
    }
    public static void main(String[] args) {
        MaxPQLinkedList mpq = new MaxPQLinkedList();
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
