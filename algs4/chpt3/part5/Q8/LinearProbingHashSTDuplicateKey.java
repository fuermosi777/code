package algs4.chpt3.part5.Q8;

import java.util.Arrays;

/**
 * Created by hao on 8/12/16.
 */
public class LinearProbingHashSTDuplicateKey<K, V> {
    private K[] keys;
    private V[] vals;
    private int M = 10;
    private int N = 0;

    public LinearProbingHashSTDuplicateKey() {
        keys = (K[]) new Object[M];
        vals = (V[]) new Object[M];
    }

    private int hash(K key) {
        return key.hashCode() & 0x7fffffff % M;
    }

    public void put(K key, V val) {
        int i = hash(key);
        while (keys[i] != null) {
            i = (i + 1) % M;
        }
        keys[i] = key;
        vals[i] = val;
        N++;
    }

    public V get(K key) {
        int i = hash(key);
        while (keys[i] != null) {
            i = (i + 1) % M;
        }
        keys[i] = key;
        return vals[i];
    }

    public void delete(K key) {
        int i = hash(key);
        delete(key, i);
    }

    private void delete(K key, int lo) {
        int i = lo;
        if (keys[i] == null) return;

        while (!keys[i].equals(key)) {
            i = (i + 1) % M;
        }
        keys[i] = null;
        vals[i] = null;
        int j = (i + 1) % M;
        while (keys[j] != null) {
            K k = keys[j];
            V v = vals[j];
            keys[j] = null;
            vals[j] = null;
            put(k, v);
        }
        delete(key, i);
    }

    public void printKeys() {
        System.out.print(Arrays.toString(keys));
    }

    public static void main(String[] args) {

    }
}
