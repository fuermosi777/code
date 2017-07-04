package algs4.chpt1.part5.Q17;


import algs4.chpt1.part5.Q14.QuickUnionWeightedHeightUF;
import algs4.chpt1.part5.Q7.QuickUnionUF;
import algs4.chpt1.part5.Q7.QuickFindUF;
import java.util.Random;
/**
 * Created by hao on 6/23/16.
 */
public class ErdosRenyi {

    public static int count(int N) {
        QuickUnionWeightedHeightUF uf = new QuickUnionWeightedHeightUF(N);
        Random rand = new Random();
        int ct = 0;

        while (uf.count() > 1) {

            int a = rand.nextInt(N - 0) + 0;
            int b = rand.nextInt(N - 0) + 0;
            ct++;
            if (!uf.connected(a, b)) {
                uf.union(a, b);
            }
        }
        return ct;
    }
    public static void main(String[] args) {
        int N = 10000;
        System.out.print(count(N));

    }
}
