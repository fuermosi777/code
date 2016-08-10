package algs4.chpt3.part4.A5;

import algs4.chpt3.part1.A1.SequentialSearchST;

/**
 * Created by hao on 8/3/16.
 */
public class SeparateChainingHashST<Key, Value> {
    private int N;
    private int M;
    private SequentialSearchST<Key, Value>[] st;

    public SeparateChainingHashST(int M) {
        this.M = M;
        st = new SequentialSearchST[7];
        for (int i = 0; i < st.length; i++) {
            st[i] = new SequentialSearchST<>();
        }
    }

    private int hash(Key key) {
        return (key.hashCode() & 0x7fffffff) % 7;
    }

    public Value get(Key key) {
        return st[hash(key)].get(key);
    }

    public void put(Key key, Value val) {
        st[hash(key)].put(key, val);
    }

    public static void main(String[] args) {
        SeparateChainingHashST s = new SeparateChainingHashST(10);
        s.put("A", 3);
        System.out.print(s.get("A"));
    }


}
