package algs4.chpt1.part3.Q34;

import java.util.*;

public class RandomBag<Item> implements Iterable<Item> {
    public Item[] a;
    public int N;
    public RandomBag() {
        a = (Item[]) new Object[1];
        N = 0;
    }
    private void resize() {
        if (N == a.length) {
            Item[] b = (Item[]) new Object[a.length * 2];
            for (int i = 0; i < N; i++) {
                b[i] = a[i];
            }
            a = b;
        }
    }
    public boolean isEmpty() {
        return N == 0;
    }
    public int size() {
        return N;
    }
    public void add(Item item) {
        a[N] = item;
        N += 1;
        resize();
    }
    public Iterator iterator() {
        return new RandomBagIterator();
    }
    private class RandomBagIterator implements Iterator<Item> {
        private int s = 0;

        public RandomBagIterator() {
            Random rand = new Random();
            for (int i = 0; i < N; i++) {
                int randomPos = rand.nextInt(N);
                Item temp = a[i];
                a[i] = a[randomPos];
                a[randomPos] = temp;
            }
        }

        public Item next() {
            return a[s++];
        }
        public boolean hasNext() {
            return s < N;
        }
    }
    public static void main(String[] args) {
        RandomBag<Integer> rd = new RandomBag<>();
        rd.add(1);
        rd.add(2);
        rd.add(3);

        for (int i : rd) {
            System.out.println(i);
        }
    }
}