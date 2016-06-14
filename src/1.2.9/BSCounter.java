public class BSCounter {
    private static class Counter {
        private int n = 0;
        public Counter() {

        }
        public void increment() {
            n += 1;
        }
    }
    public static int bs(int[] a, int val, Counter c) {
        int hi = a.length -1;
        int lo = 0;
        while(hi >= lo) {
            c.increment();
            int mid = lo + (hi - lo) / 2;
            if (val > a[mid]) {
                lo = mid + 1;
            } else if (val < a[mid]) {
                hi = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Counter c = new Counter();
        int[] a = {1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,23,24,25,26,27,28,28,30};
        System.out.println(bs(a, 4, c));
        System.out.println(c.n);
    }
}