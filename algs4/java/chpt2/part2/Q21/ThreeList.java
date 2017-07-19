package algs4.chpt2.part2.Q21;

import algs4.chpt2.part2.Q10.QuickMerge;
/**
 * Created by hao on 6/28/16.
 */
public class ThreeList {

    public static Comparable find(Comparable[] a, Comparable[] b, Comparable[] c) {
        int i = 0; int j = 0; int k = 0;
        int N = a.length;
        int M = 3 * N;
        for (int x = 0; x < M; x++) {
            if (i >= N) {
                if (b[j].compareTo(c[k]) < 0) {
                    j++;
                } else {
                    k++;
                }
            } else if (j >= N) {
                if (a[i].compareTo(c[k]) < 0) {
                    i++;
                } else {
                    k++;
                }
            } else if (k >= N) {
                if (a[i].compareTo(b[j]) < 0) {
                    i++;
                } else {
                    j++;
                }
            } else if (a[i].compareTo(b[j]) < 0 && a[i].compareTo(c[k]) < 0) {
                i++;
            } else if (b[j].compareTo(a[i]) < 0 && b[j].compareTo(c[k]) < 0) {
                j++;
            } else if (c[k].compareTo(a[i]) < 0 && c[k].compareTo(b[j]) < 0) {
                k++;
            } else {
                return a[i];
            }
        }
        return null;
    }

    public static void main(String[] args) {
        String[] a = {"f", "d", "e", "g", "x", "c"};
        String[] b = {"a", "l", "k", "v", "f", "e"};
        String[] c = {"b", "x", "c", "t", "f", "w"};
        QuickMerge.sort(a);
        QuickMerge.sort(b);
        QuickMerge.sort(c);
        System.out.println(find(a, b, c));
    }
}
