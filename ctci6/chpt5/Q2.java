package ctci6.chpt5;

/**
 * Created by hao on 10/5/16.
 */
public class Q2 {

    public static String binaryToString(double a) {
        if (a <= 0 || a >= 1.0) return "ERROR";
        String s = "0.";
        double b = a;
        while (s.length() <= 32) {
            b = b * 2;
            if (b >= 1.0) {
                s += "1";
                b = b - 1;
            } else {
                s += "0";
            }
            if (b == 0.0) return s;
        }
        if (b != 0.0) {
            return "ERROR";
        } else {
            return s;
        }
    }

    public static void main(String[] args) {
        System.out.println(binaryToString(0.25));
    }
}
