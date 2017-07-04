package algs4.chpt2.part3.Q5;

import algs4.chpt2.part3.A5.Quick;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class BinarySort {

    public static void sort(Comparable[] a) {
        Comparable v = a[0];
        int lo = 0, hi = a.length - 1, i = lo, j = hi + 1;
        while (true) {
            while (a[++i].compareTo(v) <= 0) {
                if (i >= hi) break;
            }
            while (a[--j].compareTo(v) > 0) {
                if (j <= lo) break;
            }
            if (i >= j) break;
            Quick.exch(a, i, j);
        }

        Quick.exch(a, 0, j);
    }
    public static void main(String[] args) {
        Integer[] a = {1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1};
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
