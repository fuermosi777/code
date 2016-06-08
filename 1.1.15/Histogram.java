import java.util.Arrays;

public class Histogram {
    public static int[] histogram(int[] a, int M) {
        int[] res = new int[M];
        for (int x = 0; x < M; x++) {
            int sum = 0;
            for (int y = 0; y < a.length; y++) {
                if (a[y] == x) {
                    sum += 1;
                }
            }
            res[x] = sum;
        }
        return res;
    }
    public static void main(String [] args) {
        int[] a = {3,4,6,4,3,3,5,6,7,9,0,7,5,4,3,3,2};
        int M = 9;
        System.out.println(Arrays.toString(Histogram.histogram(a, M)));
    }
}
