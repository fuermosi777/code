import java.util.Arrays;

public class Closet {
    public static void main(String[] args) {
        double[] a = {1.2, 0.2, 2.1, 2.2, 2.4, -1.1, -0.5};
        Arrays.sort(a);
        double min = 1000;
        double min1 = 0, min2 = 0;
        for (int i = 0; i < a.length - 1; i++) {
            double diff = Math.abs(a[i] - a[i + 1]);
            if (diff <= min) {
                min = diff;
                min1 = a[i];
                min2 = a[i + 1];
            }
        }
        System.out.println(min1 + " - " + min2);
    }
}