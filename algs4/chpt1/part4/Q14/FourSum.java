import java.util.Arrays;

public class FourSum {
    public static int bs(int[] a, int item) {
        int lo = 0;
        int hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (item < a[mid]) {
                hi = mid - 1;
            } else if (item > a[mid]) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] a = {-1,-2,3,1,0,4,5,-4,7,9};
        Arrays.sort(a);
        for (int x = 0; x <= a.length - 4; x++) {
            for (int y = x + 1; y <= a.length - 3; y++) {
                for (int z = y + 1; z <= a.length - 2; z++) {

                    int searchResult = bs(a, -a[x]-a[y]-a[z]);
                    if (searchResult > z) {
                        System.out.println(a[x] + " " + a[y] + " " + a[z] + " " + a[searchResult]);
                    }
                }
            }
        }

    }
}