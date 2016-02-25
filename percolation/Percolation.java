import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private WeightedQuickUnionUF sites;
    private int[][] sitesMap;

    public Percolation(int N) {
        if (N <= 0) {
            throw new java.lang.IllegalArgumentException(Integer.toString(N));
        }
        sites = new WeightedQuickUnionUF(N * N + 2);

        sitesMap = new int[N][N];
        int index = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                sitesMap[i][j] = index;
                index++;
            }
        }

    }
    public void open(int i, int j) {

    }
    public boolean isOpen(int i, int j) {
        return true;
    }
    public boolean isFull(int i, int j) {
        return true;
    }
    public boolean percolates() {
        return true;
    }
    public static void main(String[] args) {
        Percolation p = new Percolation(10);
        StdOut.print(p.sites.count());
    }
}