package algs4.chpt2.part3.Q18;

import algs4.chpt2.part3.A5.Quick;
import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class ThreePartition {
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        sort(a, 0, a.length - 1);
    }
    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int lt = lo, e = lo + 1, gt = hi;
        Comparable v = a[lo];

        while (e <= gt) {
            if (a[e].compareTo(v) < 0) {
                Quick.exch(a, e, lt);
                e++;
                lt++;
            } else if (a[e].compareTo(v) > 0) {
                Quick.exch(a, e, gt);
                gt--;
            } else {
                e++;
            }
        }

        sort(a, lo, lt - 1);
        sort(a, gt + 1, hi);
    }
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(100, 1, 10);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
