package algs4.chpt3.part4.Q31;

import java.util.Arrays;

/**
 * Created by hao on 8/11/16.
 */
public class CuckooHashST<Key> {

    private Key[] keys1;
    private Key[] keys2;

    private int M;
    private int N = 0;

    public CuckooHashST(int M) {
        keys1 = (Key[]) new Object[M];
        keys2 = (Key[]) new Object[M];
        this.M = M;
    }

    private void resize(int X) {

    }

    private int hash1(Key key) {
        return (17 * (key.hashCode() & 0x7fffffff)) % M;
    }

    private int hash2(Key key) {
        return (23 * (key.hashCode() & 0x7fffffff)) % M;
    }

    public void put(Key key) {
        int h1 = hash1(key);
        int h2 = hash2(key);
        if (keys1[h1] == null) {
            keys1[h1] = key;
        } else if (keys2[h2] == null) {
            keys2[h2] = key;
        } else {
            Key k = put(key, keys1, 1);
        }
    }

    private Key put(Key key, Key[] keys, int flag) {
        int hash = flag == 1 ? hash1(key) : hash2(key);
        Key[] anotherKeys = flag == 1 ? keys2 : keys1;
        int nFlag = flag == 1 ? 2 : 1;
        if (keys[hash] == null) {
            keys[hash] = key;
            return null;
        }
        if (keys[hash] == key) {
            return null;
        }
        Key old = keys[hash];
        keys[hash] = key;
        return put(old, anotherKeys, nFlag);
    }

    public void print() {
        System.out.println(Arrays.toString(keys1));
        System.out.println(Arrays.toString(keys2));
    }

    public static void main(String[] args) {
        CuckooHashST c = new CuckooHashST(4);
        c.put("A");
        c.put("B");
        c.put("D");
        c.put("C");
        c.put("E");
        c.put("F");
        c.put("G");
        c.put("X");
        c.print();
    }


}
