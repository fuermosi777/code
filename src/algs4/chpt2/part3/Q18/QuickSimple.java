package algs4.chpt2.part3.Q18;

import algs4.chpt2.part3.A5.Quick;
import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class QuickSimple {
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        //System.out.println(Arrays.toString(a));
        sort(a, 0, a.length - 1);
    }
    private static void sort(Comparable[] a, int lo, int hi) {
        if (hi <= lo) return;
        Comparable v = a[lo];
        int i = lo + 1, j = hi;
        while (true) {
            int cmp = a[i].compareTo(v);
            if (cmp > 0) {
                Quick.exch(a, i, j);
                j--;
            } else {
                i++;
            }
            if (i > j) break;
            //System.out.println(Arrays.toString(a));
        }
        Quick.exch(a, lo, j);
        sort(a, lo, j - 1);
        sort(a, j + 1, hi);
    }
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(10, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        //Integer[] c = {7,1,2,3,4,5};

        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
