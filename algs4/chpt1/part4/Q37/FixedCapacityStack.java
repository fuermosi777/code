package algs4.chpt1.part4.Q37;

/**
 * Created by hao on 6/22/16.
 */
public class FixedCapacityStack<Item> {
    private int N = 0;
    private Item[] a;
    public FixedCapacityStack(int size) {
        a = (Item[]) new Object[size];
    }
    public void push(Item item) {
        a[N] = item;
        N++;
    }
    public void pop() {
        a[N] = null;
        N--;
    }
}
