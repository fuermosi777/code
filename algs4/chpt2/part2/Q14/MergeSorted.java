package algs4.chpt2.part2.Q14;

import java.util.Arrays;

/**
 * Created by hao on 6/27/16.
 */
public class MergeSorted {
    public static Comparable[] merge(Comparable[] a, Comparable[] b) {
        Comparable[] c = new Comparable[a.length + b.length];
        int left = 0;
        int right = 0;
        for (int i = 0; i < a.length + b.length; i++) {
            if (left > a.length - 1) {
                c[i] = b[right];
                right++;
            } else if (right > b.length - 1) {
                c[i] = a[left];
                left++;
            } else if (a[left].compareTo(b[right]) < 0) {
                c[i] = a[left];
                left++;
            } else {
                c[i] = b[right];
                right++;
            }
        }
        return c;
    }
    public static void main(String[] args) {
        Integer[] a = {1,3,5,7,9};
        Integer[] b = {2,4,6,8,10,11,13};
        Comparable[] c = merge(a, b);
        System.out.println(Arrays.toString(c));
    }
}
