package algs4.chpt3.part1.Q2;

import java.util.Arrays;

/**
 * Created by hao on 7/15/16.
 */
public class ArrayST<Key extends Comparable<Key>, Value> {
    private Key[] keys;
    private Value[] values;
    private int N = 0;

    public ArrayST(int cap) {
        keys = (Key[]) new Comparable[cap];
        values = (Value[]) new Object[cap];

    }

    public void put(Key key, Value value) {
        keys[N] = key;
        values[N] = value;
        N++;
    }

    public Value get(Key key) {
        for (int i = 0; i < N; i++) {
            if (keys[i].compareTo(key) == 0) {
                return values[i];
            }
        }
        return null;
    }

    public void delete(Key key) {

    }

    public static void main(String[] args) {
        ArrayST<String, Integer> st = new ArrayST(10);
        st.put("A", 111);
        st.put("B", 222);

        System.out.println(st.get("A"));

        System.out.println(Arrays.toString(st.keys));
        System.out.println(Arrays.toString(st.values));
    }
}
