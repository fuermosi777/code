public class Fibonacci {
    public static long F(int N, long[] a) {
        if (N == 0) {
            return 0;
        }
        if (N == 1) {
            return 1;
        }
        if (a != null) {
            return a[N-1] + a[N-2];
        }
        return 0;
    }
    
    public static void main(String[] args) {
        long[] a = new long[100];
        for (int N = 0; N < 100; N++) {
            long f = F(N, a);
            a[N] = f;
            System.out.println(N + " " + f);
        }
    }
}