package algs4.chpt2.part1.A2;

import java.util.Arrays;

/**
 * Created by hao on 6/23/16.
 */
public class Insertion {
    private static boolean less(Comparable a, Comparable b) {
        return a.compareTo(b) < 0;
    }
    private static void exch(Comparable[] a, int x, int y) {
        Comparable t = a[x];
        a[x] = y;
        a[y] = t;
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
        Integer[] a = {1,5,4,3,8,6,0,3,5,9,2,4,12,8,3};
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
