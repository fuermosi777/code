import java.util.Iterator;

public class ArrayDeque<Item> implements Iterable<> {
    private int N = 0;
    private Item[] a = (Item[]) new Object[1];
    private int left = 0;
    private int right = 0;

    public Iterator iterator() {
        return new ArrayDequeIterator();
    }

    private void resize(int max) {
        Item[] newList = (Item[]) new Object[max];
        if (left <= right) {
            for (int i = left; i <= right; i++) {
                newList[i - left] = a[i];
            }
        } else {
            for (int i = left; i <= a.length - 1; i++) {
                newList[i - left] = a[i];
            }
            for (int i = 0; i <= right; i++) {
                newList[i + right] = a[i];
            }
        }
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    public void pushLeft(Item item) {
        if (left - 1 < 0) {
            left = a.length - 1;
            a[a.length - 1] = item;
        } else {
            a[left - 1] = item;
            left--;
        }
        N++;
        if (N > a.length * 1/2) {
            resize(2 * N);
        } else if (N < a.length * 1/4) {
            resize(N / 2);
        }
    }

    public void pushRight(Item item) {

    }

    //public Item popLeft() {

    //}

    //public Item popRight() {

    //}

    private class ArrayDequeIterator<Item> implements Iterator<Item> {
        public Item next() {

        }
        public boolean hasNext() {

        }
    }
    public static void main(String[] args) {

    }
}