package algs4.chpt5.part1.A2;

/**
 * Created by hao on 9/11/16.
 */
public class MSD {
    private static int R = 256;
    private static String[] aux;

    public static void sort(String[] a) {
        int N = a.length;
        aux = new String[N];
        sort(a, 0, N-1, 0);
    }

    private static int charAt(String a, int b) {
        if (b < a.length()) {
            return a.charAt(b);
        } else {
            return -1;
        }
    }

    private static void sort(String[] a, int lo, int hi, int d) {
        int[] ct = new int[R+2];
        if (lo >= hi) return;

        // frequency
        for (int i = lo; i <= hi; i++) {
            String b = a[i];
            int x = charAt(b, d);
            ct[x + 2]++;
        }

        // freq -> index
        for (int r = 0; r <= R; r++) {
            ct[r + 1] = ct[r] + ct[r + 1];
        }

        // allocate
        for (int i = lo; i <= hi; i++) {
            String b = a[i];
            int x = charAt(b, d);
            int idx = ct[x];
            aux[idx + lo] = b;
            ct[x]++;
        }

        // copy back
        for (int i = lo; i <= hi; i++) {
            a[i] = aux[i];
        }

        for (int r = 0; r < R; r++) {
            sort(a, lo + ct[r], lo + ct[r + 1] - 1, d + 1);
        }
    }
}