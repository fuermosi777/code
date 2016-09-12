package algs4.chpt5.part1.A3;

/**
 * Created by hao on 9/11/16.
 */
public class Quick3string {

    private static int charAt(String a, int b) {
        if (b < a.length()) {
            return a.charAt(b);
        } else {
            return -1;
        }
    }
    public static void sort(String[] a) {
        sort(a, 0, a.length - 1, 0);
    }

    private static void sort(String[] a, int lo, int hi, int d) {
        if (hi <= lo) return;
        int v = charAt(a[lo], d);
        int lt = lo;
        int gt = hi;
        int i = lo + 1;
        while (i <= hi) {
            int t = charAt(a[i], d);
            if (t < v) {
                exch(a, i, lt);
                i++;
                lt++;
            } else if (t > v) {
                exch(a, i, gt);
                gt--;
            } else {
                i++;
            }
        }
        sort(a, lo, lt - 1, d);
        if (v >= 0) sort(a, lt, gt, d + 1);
        sort(a, gt + 1, hi, d);
    }

    private static void exch(String[] a, int j, int k) {
        String temp = a[j];
        a[j] = a[k];
        a[k] = temp;
    }
}
