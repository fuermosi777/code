package algs4.chpt3.part1.A2;

import edu.princeton.cs.algs4.BinarySearch;

import java.util.Arrays;

/**
 * Created by hao on 7/13/16.
 */
public class BinarySearchST<Key extends Comparable<Key>, Value> {
    private Key[] keys;
    private Value[] values;
    private int N = 0;

    public BinarySearchST(int capacity) {
        keys = (Key[]) new Comparable[capacity];
        values = (Value[]) new Object[capacity];
    }

    public int size() {
        return N;
    }

    public Value get(Key key) {
        int find = rank(key);
        if (keys[find].compareTo(key) == 0) return values[find];
        else return null;
    }

    public void put(Key key, Value value) {
        int find = rank(key);
        if (find < N && keys[find].compareTo(key) == 0) {
            values[find] = value;
        } else {
            for (int i = N - 1; i >= find; i--) {
                keys[i + 1] = keys[i];
                values[i + 1] = values[i];
            }
            N++;
            keys[find] = key;
            values[find] = value;
        }

    }

    public int rank(Key key) {
        int lo = 0;
        int hi = N - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (keys[mid].compareTo(key) == 0) return mid;
            if (keys[mid].compareTo(key) > 0) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    public void delete(Key key) {
        int find = rank(key);
        if (find < N && keys[find].compareTo(key) == 0) {
            for (int i = find; i < N - 1; i++) {
                keys[i] = keys[i + 1];
                values[i] = values[i + 1];
            }
            keys[N - 1] = null;
            values[N - 1] = null;
            N--;
        }
    }

    public static void main(String[] args) {
        BinarySearchST<String, Integer> map = new BinarySearchST(10);

        map.put("A", 111);
        map.put("B", 222);
        map.put("D", 444);
        map.put("C", 333);
        map.put("D", 4442);
        map.delete("B");
        map.put("B", 555);
        map.delete("D");

        System.out.println(map.get("C"));
        System.out.println(Arrays.toString(map.keys));
        System.out.println(Arrays.toString(map.values));
    }
}
