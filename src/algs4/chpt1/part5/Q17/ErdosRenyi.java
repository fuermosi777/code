package algs4.chpt1.part5.Q17;


import algs4.chpt1.part5.Q7.QuickUnionUF;
import java.util.Random;
/**
 * Created by hao on 6/23/16.
 */
public class ErdosRenyi {

    public static int count(int N) {
        QuickUnionUF uf = new QuickUnionUF(N);
        Random rand = new Random();
        int ct = 0;
        int tried = 0;
        while (uf.count() > 1) {
            int a = rand.nextInt(N - 1 - 0) + 0;
            int b = rand.nextInt(N - 1 - 0) + 0;
            tried++;
            if (!uf.connected(a, b)) {
                uf.union(a, b);
                System.out.println("union: " + a + " " + b);
                ct++;
            }
        }
        System.out.println("Tried: " + tried + " times");
        return ct;
    }
    public static void main(String[] args) {
        int N = 100;
        System.out.print(count(N));

    }
}
