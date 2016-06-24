package algs4.chpt2.part1.A3;

import java.util.Arrays;

/**
 * Created by hao on 6/24/16.
 */
public class Shell {
    private static boolean less(Comparable a, Comparable b) {
        return a.compareTo(b) < 0;
    }
    private static void exch(Comparable[] a, int x, int y) {
        Comparable t = a[x];
        a[x] = y;
        a[y] = t;
    }
    public static void sort(Comparable[] a) {
        int N = a.length;
        int h = 1;
        while (h < N/3) h = h * 3 + 1;
        while (h > 0) {
            for (int i = h; i < N; i++) {
                for (int j = i; j - h >= 0 && less(a[j], a[j - h]); j -= h) {
                    exch(a, j, j - h);
                }
            }
            h /= 3;
        }
    }
    public static void main(String[] args) {
        Integer[] a = {1,5,4,8,6,0,3,9,2,15,12,8,-1};
        sort(a);
        System.out.println(Arrays.toString(a));
    }
}
