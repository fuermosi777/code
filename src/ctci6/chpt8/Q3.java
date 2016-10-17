package ctci6.chpt8;

/**
 * Created by hao on 10/18/16.
 */
public class Q3 {
    public static int magicIndex(int[] a) {
        int lo = 0; int hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == mid) return mid;
            if (a[mid] < mid) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] a = {-2,0,1,3,5,6,7,9,10,11};
        System.out.println(magicIndex(a));
    }
}
