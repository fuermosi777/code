package algs4.chpt3.part5.Q3;

/**
 * Created by hao on 8/12/16.
 */
public class BinarySearchSET<Key extends Comparable<Key>> {

    private Key[] keys;
    private int N = 0;

    public BinarySearchSET() {
        keys = (Key[]) new Object[100];
    }

    public void put(Key key) {
        // ...
    }

    public boolean contains(Key key) {
        int lo = 0;
        int hi = N - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (keys[mid].equals(key)) {
                return true;
            } else if (keys[mid].compareTo(key) > 0) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return false;
    }
}
