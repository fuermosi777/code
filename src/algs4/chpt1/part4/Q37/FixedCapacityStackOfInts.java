package algs4.chpt1.part4.Q37;

/**
 * Created by hao on 6/22/16.
 */
public class FixedCapacityStackOfInts {
    private int N = 0;
    private Integer[] a;
    public FixedCapacityStackOfInts(int size) {
        a = new Integer[size];
    }
    public void push(int item) {
        Integer it = new Integer(item);
        a[N] = it;
        N++;
    }
    public void pop() {
        a[N] = null;
        N--;
    }
}
