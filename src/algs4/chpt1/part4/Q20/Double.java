public class Double {
    public static void main(String[] args) {
        int[] a = {0,1,2,4,5,6,7,8,10,13,15,26,9,7,6,5,3,2};
        int tofind = 7;
        // find max
        int lo = 0;
        int hi = a.length - 1;
        int max = 0;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid - 1] < a[mid] && a[mid + 1] < a[mid]) {
                max = mid;
                break;
            }
            if (a[mid - 1] < a[mid] && a[mid + 1] > a[mid]) {
                lo = mid + 1;
            }
            if (a[mid - 1] > a[mid] && a[mid + 1] < a[mid]) {
                hi = mid - 1;
            }
        }
        // find in left
        int leftlo = 0;
        int lefthi = max;
        while (leftlo <= lefthi) {
            int mid = leftlo + (lefthi - leftlo) / 2;
            if (a[mid] < tofind) {
                leftlo = mid + 1;
            } else if (a[mid] > tofind) {
                lefthi = mid - 1;
            } else {
                System.out.println(mid);
                break;
            }
        }

        // find in right
        int rightlo = 0;
        int righthi = a.length - 1;
        while (rightlo <= righthi) {
            int mid = rightlo + (righthi - rightlo) / 2;
            if (a[mid] < tofind) {
                rightlo = mid + 1;
            } else if (a[mid] > tofind) {
                righthi = mid - 1;
            } else {
                System.out.println(mid);
                break;
            }
        }
    }
}