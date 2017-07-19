package algs4.chpt5.part1.A1;

import java.util.Arrays;

/**
 * Created by hao on 9/9/16.
 */
public class LSD {
    public static void sort(String[] a, int W) {
        int R = 256;
        String[] aux = new String[a.length];
        for (int i = W - 1; i >= 0; i--) {
            int[] ct = new int[R+1];
            for (int j = 0; j < a.length; j++) {
                int code = a[j].charAt(i);
                ct[code + 1]++;
            }
            for (int k = 0; k < R; k++) {
                ct[k + 1] = ct[k] + ct[k + 1];
            }
            for (int j = 0; j < a.length; j++) {
                int code = a[j].charAt(i);
                aux[ct[code]] = a[j];
                ct[code]++;
            }
            for (int j = 0; j < a.length; j++) {
                a[j] = aux[j];
            }
        }
    }

    public static void main(String[] args) {
        String[] a = {"db","ab", "ac"};
        sort(a, 2);
        System.out.println(Arrays.toString(a));
    }

}
