package algs4.chpt2.part3.Q17;

import algs4.chpt2.part3.A5.Quick;
import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class QuickSentinel {
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        int max = 0;
        for (int i = 0; i < a.length; i++) {
            if (a[i].compareTo(a[max]) > 0) {
                max = i;
            }
        }
        Quick.exch(a, max, a.length - 1);
        sort(a, 0, a.length - 1);
    }
    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int i = lo, j = hi + 1;
        Comparable v = a[lo];
        while (true) {
            while (a[++i].compareTo(v) < 0) {
                //if (i >= hi) break;
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
        int[] a = RandomArrayOfInts.generate(200, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
