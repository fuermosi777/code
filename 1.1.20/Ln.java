import java.lang.Math;

public class Ln {
    public static int fac(int N) {
        if (N == 0) return 1;
        return N * fac(N - 1);
    }
    public static void main(String[] args) {
        System.out.println(Math.log(fac(13)));
    }
}