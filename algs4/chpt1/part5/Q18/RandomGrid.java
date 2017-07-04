package algs4.chpt1.part5.Q18;

import algs4.chpt1.part3.Q34.RandomBag;
import algs4.chpt1.part5.Q7.QuickUnionUF;

import java.util.Random;

/**
 * Created by hao on 6/23/16.
 */
public class RandomGrid {
    private static class Connection {
        int p;
        int q;
        public Connection(int p, int q) {
            this.p = p;
            this.q = q;
        }
    }
    public static Connection[] generate(int N) {
        RandomBag<Connection> bag = new RandomBag<>();
        QuickUnionUF uf = new QuickUnionUF(N * N);
        Random rand = new Random();
        Connection[] result = new Connection[N * N - 1];

        while (uf.count() > 1) {
            int a = rand.nextInt(N * N - 1 - 0) + 0;
            int b = rand.nextInt(N * N - 1 - 0) + 0;
            if (!uf.connected(a, b)) {
                System.out.println(a + " " + b);
                uf.union(a, b);
                Connection c = new Connection(a, b);
                bag.add(c);
            }
        }
        int x = 0;
        for (Connection cn : bag) {
            System.out.println(cn.p + " " + cn.q);
            result[x] = cn;
            x++;
        }
        return result;
    }
    public static void main(String[] args) {
        int N = 4;
        generate(N);
    }
}
