import java.util.Arrays;
import java.util.Random;

public class BinaryMatch {
    public static int bs(int[] a, int val) {
        int low = 0;
        int high = a.length - 1;
        
        while (high >= low) {
            int mid = low + (high - low) / 2;
            if (val < a[mid]) {
                high = mid - 1;
            } else if (val > a[mid]) {
                low = mid + 1;
            } else {
                return mid;
            }
            
        }
        return -1;
    }
    public static int[] generateArray(int N) {
        int[] res = new int[N];
        Random rand = new Random();
        for (int i = 0; i < N; i++) {
            res[i] = rand.nextInt((999999 - 100000) + 1) + 100000;
        }
        return res;
    }
    public static int runOnce(int N) {
        int[] first = generateArray(N);
        int[] second = generateArray(N);

        int count = 0;
        for (int i = 0; i < N; i++) {
            if (bs(second, first[i]) != -1) {
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        //int T = Integer.parseInt(args[0]);
        int T = 10;
        int[] Ns = {1000, 10000, 100000, 1000000};
        int[] SUMs = {0, 0, 0, 0};
        for (int i = 0; i < Ns.length; i++) {
            for (int j = 1; j <= T; j++) {
                int num = runOnce(Ns[i]);
                SUMs[i] += num;
            }
            System.out.println(Ns[i] + ": " + SUMs[i] / T);
        }
        
    }
}