package algs4.chpt2.part5.Q6;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class RecursionSelect {
    public static void sort(Comparable[] a) {
        sort(a, 0);
    }

    private static void sort(Comparable[] a, int lo) {
        if (lo == a.length - 1) return;
        int min = lo;
        for (int i = lo; i < a.length; i++) {
            if (a[min].compareTo(a[i]) > 0) {
                min = i;
            }
        }
        Comparable temp = a[lo];
        a[lo] = a[min];
        a[min] = temp;
        lo++;
        sort(a, lo);
    }
    public static void main(String[] args) {
        Integer[] a = {1,5,4,3,8,6,0,3,5,9,2,4,12,8,3};
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
