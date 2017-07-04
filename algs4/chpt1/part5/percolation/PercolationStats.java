/**
 * Created by hao on 2/25/16.
 */

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {
    private int n;
    private int t;
    private double[] pps;

    public PercolationStats(int N, int T) {
        n = N;
        t = T;
        if (N <= 0 || T <= 0) {
            throw new java.lang.IllegalArgumentException();
        }
        pps = new double[T];
        for (int i = 0; i < T; i++) {
            Percolation p = new Percolation(N);
            pps[i] = percolates(p);
        }
    }

    private double percolates(Percolation p) {
        int openNum = 0;
        while (!p.percolates()) {
            int randI = StdRandom.uniform(1, n + 1);
            int randJ = StdRandom.uniform(1, n + 1);
            if (!p.isOpen(randI, randJ)) {
                p.open(randI, randJ);
                openNum += 1;
            }
        }

        double pp = (double)openNum / n / n;
        return pp;
    }

    public double mean() {
        return StdStats.mean(pps);
    }


    public double stddev() {
        return StdStats.stddev(pps);
    }

    public double confidenceLo() {
        return mean() - 1.96 * stddev() / Math.sqrt(t);
    }

    public double confidenceHi() {
        return mean() - 1.96 * stddev() / Math.sqrt(t);
    }

    public static void main(String[] args) {
        PercolationStats s = new PercolationStats(Integer.parseInt(args[0]), Integer.parseInt(args[1]));
        StdOut.println("mean" + "\t\t\t" + "=" + " " + s.mean());
        StdOut.println("stddev" + "\t\t\t" + "=" + " " + s.stddev());
        StdOut.println("95% confidence interval" + "\t" + "=" + " " + s.confidenceLo() + ", " + s.confidenceHi());
    }
}
