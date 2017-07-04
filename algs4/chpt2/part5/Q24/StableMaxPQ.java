package algs4.chpt2.part5.Q24;

/**
 * Created by hao on 7/12/16.
 */
public class StableMaxPQ<Item extends Comparable<Item>> {
    private int[] pq;
    private Item[] keys;
    private int N = 0;

    public StableMaxPQ(int maxN) {
        pq = new int[maxN + 1];
        keys = (Item[]) new Comparable[maxN + 1];
    }

    public void insert(Item item) {
        int index = N + 1;
        pq[N + 1] = index;
        keys[index] = item;
        N++;
        swim(N);
    }

    public Item max() {
        return keys[pq[1]];
    }

    public Item delMax() {
        Item max = keys[pq[1]];
        keys[pq[1]] = null;
        exch(1, N);
        N--;
        sink(1);
        return max;
    }

    private void exch(int k, int j) {
        int x = pq[k];
        pq[k] = pq[j];
        pq[j] = x;
    }

    private void swim(int k) {
        while (k > 1) {
            if (keys[pq[k]].compareTo(keys[pq[k / 2]]) == 0) {
                if (pq[k] < pq[k / 2]) {
                    exch(k, k / 2);
                }
            } else if (keys[pq[k]].compareTo(keys[pq[k / 2]]) > 0) {
                exch(k, k / 2);
            }
            k /= 2;
        }
    }

    private void sink(int k) {
        while (k * 2 <= N) {
            int j = k * 2;
            if (j + 1 <= N && keys[pq[j]].compareTo(keys[pq[j + 1]]) == 0 && pq[j] > pq[j + 1]) {
                j++;
            } else if (j + 1 <= N && keys[pq[j]].compareTo(keys[pq[j + 1]]) < 0) {
                j++;
            }
            if (keys[pq[k]].compareTo(keys[pq[j]]) == 0 && pq[k] > pq[j]) {
                exch(k, j);
            } else if (keys[pq[k]].compareTo(keys[pq[j]]) < 0) {
                exch(k, j);
            }
            k *= 2;
        }
    }

    public static void main(String[] args) {

    }
}
