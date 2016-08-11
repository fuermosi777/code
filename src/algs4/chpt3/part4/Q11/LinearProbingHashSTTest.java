package algs4.chpt3.part4.Q11;

import java.util.Arrays;

/**
 * Created by hao on 8/11/16.
 */
public class LinearProbingHashSTTest<Key, Value> {

    private Key[] keys;
    private Value[] vals;
    private int M;
    private int K = 0;

    public LinearProbingHashSTTest(int M) {
        this.M = M;
        keys = (Key[]) new Object[M];
        vals = (Value[]) new Object[M];
    }

    private void resize(int X) {
        LinearProbingHashSTTest n = new LinearProbingHashSTTest(X);
        for (int i = 0; i < keys.length; i++) {
            if (keys[i] != null) {
                n.put(keys[i], vals[i]);
            }
        }
        keys = (Key[]) n.keys;
        vals = (Value[]) n.vals;
        M = X;
    }

    private int hash(Key key) {
        return (key.hashCode() * 11) % M;
    }

    public void put(Key key, Value val) {
        int i = hash(key);
        while (keys[i] != null) {
            if (keys[i].equals(key)) {
                keys[i] = key;
                vals[i] = val;
                return;
            }
            i = (i + 1 ) % M;
        }

        keys[i] = key;
        vals[i] = val;

        K++;
        if (K >= M/2) {
            resize(M * 2);
        }
    }

    public void print() {
        System.out.println(Arrays.toString(keys));
    }

    public static void main(String[] args) {
        LinearProbingHashSTTest t = new LinearProbingHashSTTest(4);
        t.put("E", "0");
        t.put("A", "0");
        t.put("S", "0");
        t.put("Y", "0");
        t.put("Q", "0");
        t.put("U", "0");
        t.put("T", "0");
        t.put("I", "0");
        t.put("O", "0");
        t.put("N", "0");
        t.print();
    }
}
