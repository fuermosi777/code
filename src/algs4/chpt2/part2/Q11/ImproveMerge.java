package algs4.chpt2.part2.Q11;

import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/27/16.
 */
public class ImproveMerge {

    private static Comparable[] aux;

    public static void sort(Comparable[] a) {
        aux = new Comparable[a.length];
        sort(a, 0, a.length - 1);
    }

    private static void sort(Comparable[] a, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        if (hi - lo <= 15) {
            insertionSort(a, lo, hi);
        } else {
            sort(a, lo, mid);
            sort(a, mid + 1, hi);
            if (a[mid].compareTo(a[mid + 1]) > 0) {
                merge(a, lo, mid, hi);
            }
        }
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

    private static void insertionSort(Comparable[] a, int lo, int hi) {
        for (int i = lo; i <= hi; i++) {
            for (int j = i; j > lo && a[j].compareTo(a[j - 1]) < 0; j--) {
                Comparable t = a[j];
                a[j] = a[j - 1];
                a[j - 1] = t;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(40, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
