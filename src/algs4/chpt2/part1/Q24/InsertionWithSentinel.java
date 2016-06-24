package algs4.chpt2.part1.Q24;

import algs4.helper.RandomArrayOfInts;

/**
 * Created by hao on 6/24/16.
 */
public class InsertionWithSentinel {
    private static boolean less(Comparable a, Comparable b) {
        return a.compareTo(b) < 0;
    }
    private static void exch(Comparable[] a, int x, int y) {
        Comparable temp = a[x];
        a[x] = a[y];
        a[y] = temp;
    }

    public static void sort(Comparable[] a) {
        for (int i = 0; i < a.length; i++) {
            Comparable min = a[0];
            if (less(a[i], min)) {
                exch(a, 0, i);
            }
        }

        for (int i = 1; i < a.length; i++) {
            for (int j = i; less(a[j], a[j - 1]); j--) {
                exch(a, j, j - 1);
            }
        }
    }
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(100, 1, 100);
        Integer[] ai = RandomArrayOfInts.toInteger(a);
    }
}
