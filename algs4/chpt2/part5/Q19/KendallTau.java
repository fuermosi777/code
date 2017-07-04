package algs4.chpt2.part5.Q19;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class KendallTau {
    private int[] pos;
    private int[] aux;
    private int[] b;

    public KendallTau(int[] a, int[] b) {
        this.b = b;
        pos = new int[a.length];
        aux = new int[a.length];
        for (int i = 0; i < a.length; i++) {
            pos[a[i]] = i;
        }
    }

    private void sort(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        sort(a, lo, mid);
        sort(a, mid + 1, hi);
        merge(a, lo, mid, hi);
    }

    private void merge(int[] a, int lo, int mid, int hi) {
        if (lo >= hi) return;
        int i = lo;
        int j = mid + 1;
//        System.out.println(Arrays.toString(b));
//        System.out.println("lo:" + lo + ", hi: " + hi);
        for (int k = lo; k <= hi; k++) {
//            System.out.println(i + " " + j);
            if (i > mid) {
                aux[k] = a[j];
                j++;
            } else if (j > hi) {
                aux[k] = a[i];
                i++;
            } else if (pos[a[i]] < pos[a[j]]) {
                aux[k] = a[i];
                i++;
            } else {
                System.out.println(a[i] + " - " + a[j]);
                aux[k] = a[j];
                j++;
            }
        }
        for (int k = lo; k <= hi; k++) {
            a[k] = aux[k];
        }
//        System.out.println(Arrays.toString(b));
//        System.out.println("---");
    }

    public void distance() {
        sort(b, 0, b.length - 1);
    }
    public static void main(String[] args) {
        int[] a = {0,2,1,3,5,4};
        int[] b = {4,3,5,2,1,0};
        KendallTau kt = new KendallTau(a, b);
        kt.distance();
    }
}
