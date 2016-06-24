package algs4.helper;

import java.util.Arrays;
import java.util.Random;

/**
 * Created by hao on 6/24/16.
 */
public class RandomArrayOfInts {
    public static int[] generate(int N, int min, int max) {
        int[] a = new int[N];
        Random rand = new Random();
        for (int i = 0; i < N; i++) {
            a[i] = rand.nextInt(max - min) + min;
        }
        return a;
    }
    public static Integer[] toInteger(int[] a) {
        Integer[] b = new Integer[a.length];
        for (int i = 0; i < a.length; i++) {
            b[i] = a[i];
        }
        return b;
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(generate(100, 0, 100)));
    }
}
