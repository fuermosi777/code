package ctci6.chpt8;

/**
 * Created by hao on 10/19/16.
 */
public class Q13 {
    public static void main(String[] args) {
        int A = 3;
        int K = 5;
        int P = 1;
//        System.out.println((double)P / (double)(K - A));
        System.out.println((int) Math.floor((double)P / (double)(K - A)));
        System.out.println((int) Math.ceil(0.5));
    }
}
