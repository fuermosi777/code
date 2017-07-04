package ctci6.chpt8;

/**
 * Created by hao on 10/18/16.
 */
public class Q5 {

    // O(n)
    public static int mul(int a, int b) {
        if (a == 0 || b == 0) return 0;
        if (b == 1) return a;
        else return a + mul(a, b - 1);
    }

    // O(logn)
    public static int mul2(int a, int b) {
        if (b == 1) return a;
        if (b % 2 == 0) {
            return mul2(a + a, b / 2);
        } else {
            return mul2(a + a, b / 2) + a;
        }
    }

    public static void main(String[] args) {
        System.out.println(mul2(8, 6));
    }
}
