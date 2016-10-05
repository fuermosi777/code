package ctci6.chpt5;

/**
 * Created by hao on 10/5/16.
 */
public class A1 {

    public static boolean getBit(int num, int i) {
        return ((num & (1 << i)) != 0);
    }

    public static int setBit(int num, int i) {
        return num | (1 << i);
    }

    public static void main(String[] args) {
        System.out.println(0b1000);
    }
}
