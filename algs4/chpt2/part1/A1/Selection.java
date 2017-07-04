package algs4.chpt2.part1.A1;

import java.util.Arrays;

/**
 * Created by hao on 6/23/16.
 */
public class Selection {
    private static boolean less(Comparable a, Comparable b) {
        if (a.compareTo(b) < 0) return true;
        return false;
    }
    private static void exch(Comparable[] a, int x, int y) {
        Comparable temp = a[x];
        a[x] = a[y];
        a[y] = temp;
    }
    public static void sort(Comparable[] a) {
        for (int i = 0; i < a.length; i++) {
            int min = i;
            for (int j = i; j < a.length; j++) {
                if (less(a[j], a[min])) {
                    min = j;
                }
            }
            exch(a, i, min);
        }
    }
    public static void main(String[] args) {
        Integer[] a = {1,5,4,3,8,6,0,3,5,9,2,4,12,8,3};
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
