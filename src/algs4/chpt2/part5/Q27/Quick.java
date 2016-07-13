package algs4.chpt2.part5.Q27;

import java.util.Arrays;

/**
 * Created by hao on 7/12/16.
 */
public class Quick {
    public static int[] indirectSort(Comparable[] a) {
        int[] index = new int[a.length];
        for (int i = 0; i < a.length; i++) {
            index[i] = i;
        }
        for (int i = 0; i < a.length; i++) {
            for (int j = i; j > 0 && a[j].compareTo(a[j - 1]) < 0; j--) {
                exch(index, j, j - 1);
            }
        }
        return index;
    }

    private static void exch(int[] index, int i, int j) {
        int t = index[i];
        index[i] = index[j];
        index[j] = t;
    }

    public static void main(String[] args) {
        String[] a = {"c", "b", "a", "d", "e"};
        System.out.print(Arrays.toString(indirectSort(a)));
    }
}
