package algs4.chpt2.part2.Q10;

import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/27/16.
 */
public class QuickMerge {

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
        for (int i = lo; i <= mid; i++) {
            aux[i] = a[i];
        }
        for (int i = mid + 1, j = hi; i <= hi && j >= mid + 1; i++, j--) {
            aux[i] = a[j];
        }
        int flagLeft = lo;
        int flagRight = hi;
        //System.out.println("lo: " + lo + " mid: " + mid + " hi: " + hi);
        //System.out.println(Arrays.toString(aux));
        for (int i = lo; i <= hi; i++) {
            if (aux[flagLeft].compareTo(aux[flagRight]) < 0) {
                a[i] = aux[flagLeft];
                flagLeft++;
            } else {
                a[i] = aux[flagRight];
                flagRight--;
            }
        }
        //System.out.println(Arrays.toString(a));
        //System.out.println(" --- ");
    }

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(40, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
