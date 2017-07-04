package ctci6.chpt5;

/**
 * Created by hao on 10/5/16.
 */
public class Q1 {

    public static int clearBit(int N, int i) {
        return N & ~(1 << i);
    }

    public static int insert(int N, int M, int i, int j) {
        int num = N;
        for (int x = i; x <= j; x++) {
            num = clearBit(num, x);
        }
        return num | (M << i);
    }

    public static void main(String[] args) {
        System.out.println(insert(0b10000000000, 0b10011, 2, 6) == 0b10001001100);
    }
}
