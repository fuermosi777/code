package algs4.chpt2.part1.A2;

import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/23/16.
 */
public class Insertion {
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
            int j = i;
            while (j > 0 && less(a[j], a[j-1])) {
                exch(a, j, j-1);
                j--;
            }
        }
    }
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(100, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
