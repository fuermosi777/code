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
        for (int y = 0; y < N; y++) {
            for (int x = 0; x < N; x++) {
                // 0 - block, 1 - open
                // y - row, x - col
                sitesMap[y][x] = 0;
            }
        }

    }

    private int coordinateToIndex(int y, int x) {
        
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
        StdOut.print(p.sites.find(4));
    }
}