package algs4.chpt3.part5.Q2;

/**
 * Created by hao on 8/11/16.
 */
public class SequentialSearchSET<Key> {

    private int N;
    private Key[] keys;

    public SequentialSearchSET() {
        keys = (Key[]) new Object[10];
    }

    private void resize(int X) {
        Key[] nkeys = (Key[]) new Object[X];
        keys = nkeys;
    }

    public void put(Key key) {
        keys[N] = key;
        N++;
        if (N >= keys.length / 2) {
            resize(keys.length * 2);
        }
    }

    public boolean contains(Key key) {
        for (int i = 0; i < N; i++) {
            if (keys[i].equals(key)) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {

    }
}
