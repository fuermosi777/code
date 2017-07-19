package algs4.chpt2.part2.A4;

import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/27/16.
 */
public class Merge {

    private static Comparable[] aux;

    public static void sort(Comparable[] a) {
        aux = new Comparable[a.length];
        sort(a, 0, a.length - 1);
    }

    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        sort(a, lo, mid);
        sort(a, mid + 1, hi);
        merge(a, lo, mid, hi);
    }

    public static void merge(Comparable[] a, int lo, int mid, int hi) {
        int flagLeft = lo;
        int flagRight = mid + 1;
        for (int i = lo; i <= hi; i++) {
            aux[i] = a[i];
        }
        for (int i = lo; i <= hi; i++) {
            if (flagLeft > mid) {
                a[i] = aux[flagRight];
                flagRight++;
            } else if (flagRight > hi) {
                a[i] = aux[flagLeft];
                flagLeft++;
            } else if (aux[flagLeft].compareTo(aux[flagRight]) < 0) {
                a[i] = aux[flagLeft];
                flagLeft++;
            } else {
                a[i] = aux[flagRight];
                flagRight++;
            }
        }
    }

    public static void sortBottomUp(Comparable[] a) {
        aux = new Comparable[a.length];
        int size = 1;
        while (size < a.length) {
            //System.out.println(Arrays.toString(a));
            int lo = 0;
            while (lo < a.length - size) {
                merge(a, lo, lo + size - 1, Math.min(lo + size + size - 1, a.length - 1));
                lo += size + size;
            }
            size += size;
            //System.out.println(Arrays.toString(a));
            //System.out.println(" --- ");
        }
    }

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(40, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }

}
