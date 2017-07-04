package algs4.chpt2.part3.A5;

import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class Quick {

    public static void exch(Comparable[] a, int x, int y) {
        Comparable t = a[x];
        a[x] = a[y];
        a[y] = t;
    }
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        sort(a, 0, a.length - 1);
    }

    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int j = partition(a, lo, hi);
        sort(a, lo, j - 1);
        sort(a, j + 1, hi);
    }

    private static int partition(Comparable[] a, int lo, int hi) {
        int i = lo, j = hi + 1;
        Comparable v = a[lo];
        while (true) {
            while (a[++i].compareTo(v) < 0 && i < hi) {

            }
            //System.out.println("i: " + i);
            while (a[--j].compareTo(v) > 0 && j > lo) {

            }
            //System.out.println("j: " + j);
            if (i >= j) break;
            exch(a, i, j);
            //System.out.println(Arrays.toString(a));
        }
        exch(a, lo, j);
        return j;
    }

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(10, 1, 10);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        String[] c = {"E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"};
        Integer[] d = {1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1};
        Integer[] e = {3,2,4,5,7,1,9,8,6};
        sort(e);
        System.out.println(Arrays.toString(e));
    }
}
