package ctci6.chpt10;

/**
 * Created by hao on 10/20/16.
 */
public class Q3 {
    public static int bs(int[] a, int k) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == k) return mid;
            if (a[mid] < a[mid + 1]) {
                if (a[mid] < k) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            } else {
                if (k >= a[0] && k < a[mid]) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] sample = {15, 16, 19, 20, 25, 1, 3, 4, 5, 6, 7, 8, 9};
        int[] sample2 = {2, 2, 2, 3, 4, 2};
        System.out.println(bs(sample2, 2));
    }
}
