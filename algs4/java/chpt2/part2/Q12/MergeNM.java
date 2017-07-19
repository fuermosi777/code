package algs4.chpt2.part2.Q12;

import algs4.chpt2.part2.Q11.ImproveMerge;
import algs4.helper.RandomArrayOfInts;

import java.util.Arrays;

/**
 * Created by hao on 6/27/16.
 */
public class MergeNM {
    private static Comparable[] aux;

    public static void sort(Comparable[] a, int M) {
        aux = new Comparable[a.length];

        int N = a.length;
        if (N % M != 0 || N < M) return;
        for (int i = 0; i < N; i += N/M) {
            ImproveMerge.insertionSort(a, i, i + N/M - 1);
        }
        for (int i = 0; i + N/M + N/M - 1 < N; i += N/M) {
            merge(a, 0, i + N/M - 1, i + N/M + N/M - 1);
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

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(9, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b, 3);
        System.out.println(Arrays.toString(b));
    }
}
