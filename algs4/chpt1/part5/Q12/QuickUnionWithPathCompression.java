package algs4.chpt1.part5;

/**
 * Created by hao on 6/22/16.
 */
public class QuickUnionWithPathCompression {
    private int[] a;
    public int find(int p) {
        int temp = p;
        while (a[p] != p) {
            p = a[p];
        }
        while (a[temp] != temp) {
            int temp2 = temp;
            a[temp2] = p;
            temp = a[temp];
        }
        return p;
    }
}
