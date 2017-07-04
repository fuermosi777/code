package algs4.chpt2.part3.Q18;

import algs4.chpt2.part3.A5.Quick;
import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;

/**
 * Created by hao on 6/29/16.
 */
public class Quick3Samples {
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        sort(a, 0, a.length - 1);
    }
    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        if (hi - lo >= 3) {
            for (int i = lo; i <= lo + 2; i++) {
                for (int j = i + 1; j > lo && a[j].compareTo(a[j - 1]) < 0; j--) {
                    Quick.exch(a, j, j - 1);
                }
            }
            Quick.exch(a, lo, lo + 1);
        }
        Comparable v = a[lo];
        int i = lo, j = hi + 1;
        while (true) {
            while (a[++i].compareTo(v) < 0) {
                if (i == hi) return;
            }
            while (a[--j].compareTo(v) > 0) {

            }
            if (i >= j) break;
            Quick.exch(a, i, j);
        }
        Quick.exch(a, lo, j);
        sort(a, lo, j - 1);
        sort(a, j + 1, hi);
    }
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(100, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);

        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
