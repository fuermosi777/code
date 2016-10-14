package ctci6.chpt7;

import java.util.Arrays;

/**
 * Created by hao on 10/9/16.
 */
public class Q9CircularArray<T> {
    private T[] items;
    private int head;
    private int tail;
    private int N;
    public Q9CircularArray(int M) {
        items = (T[]) new Object[M];
        head = 0;
        tail = 0;
        N = 0;
    }
    public boolean isEmpty() {
        return N == 0;
    }
    public T getFirst() {
        if (isEmpty()) throw new ArrayIndexOutOfBoundsException();
        return items[head];
    }
    public T get(int index) {
        return items[(head + index) % items.length];
    }
    public void set(int index, T item) {
        T old = get(index);
        items[(head + index) % items.length] = item;
        if (old == null) {
            N++;
        }
    }
    public static void main(String[] args) {
        Q9CircularArray<Integer> array = new Q9CircularArray<>(10);
        array.set(0, 1);
        System.out.println(Arrays.toString(array.items));
    }
}
