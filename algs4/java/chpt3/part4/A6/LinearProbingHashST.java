package algs4.chpt3.part4.A6;

import java.util.Arrays;

/**
 * Created by hao on 8/4/16.
 */
public class LinearProbingHashST<Key, Value> {
    private int N;
    private int M;
    private Key[] keys;
    private Value[] vals;

    public LinearProbingHashST(int M) {
        this.M = M;
        keys = (Key[]) new Object[M];
        vals = (Value[]) new Object[M];
    }

    private int hash(Key key) {
        return (key.hashCode() & 0x7fffffff) % M;
    }

    private void resize(int X) {
        LinearProbingHashST t = new LinearProbingHashST<Key, Value>(X);
        for (int i = 0; i < M; i++) {
            if (keys[i] != null) {
                t.put(keys[i], vals[i]);
            }
        }
        keys = (Key[]) t.keys;
        vals = (Value[]) t.vals;
        M = t.M;
    }

    public void put(Key key, Value val) {
        if (N > M/2) resize(M * 2);

        int i = hash(key);

        while (keys[i] != null) {
            if (keys[i].equals(key)) {
                keys[i] = key;
                vals[i] = val;
                return;
            }
            i = (i + 1) % M; // if i reaches the max, start from 0
        }

        keys[i] = key;
        vals[i] = val;
        N++;
    }

    public Value get(Key key) {
        int i = hash(key);
        while (keys[i] != null) {
            if (keys[i].equals(key)) {
                return vals[i];
            }
            i = (i + 1) % M;
        }
        return null;
    }

    public boolean contains(Key key) {
        return true;
    }

    public void delete(Key key) {
        int i = hash(key);
        while (!keys[i].equals(key)) {
            i = (i + 1) % M;
        }
        keys[i] = null;
        vals[i] = null;

        i = (i + 1) % M; // reset i to target + 1
        while (keys[i] != null) {
            Key keyToMove = keys[i];
            Value valToMove = vals[i];
            keys[i] = null;
            vals[i] = null;
            N--;
            put(keyToMove, valToMove);
            i = (i + 1) % M;
        }
        N--;
        if (N > 0 && N == M / 8) resize(M / 2);
    }

    public void printKeys() {
        System.out.print(Arrays.toString(keys));
    }

    // 3.4.19
    public Iterable keys() {
        Iterable<Key> iter = Arrays.asList(keys);
        return iter;
    }

    public static void main(String[] args) {
        System.out.println("polygenelubricants".hashCode() & 0x7fffffff);
        System.out.println(-1 & 0x7fffffff);
    }

}
