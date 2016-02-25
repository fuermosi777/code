import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private int n;
    private int top;
    private int bottom;
    private WeightedQuickUnionUF sites;
    private int[][] sitesMap;

    public Percolation(int N) {
        n = N;
        top = n * n;
        bottom = top + 1;
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
        return y * n + x;
    }

    public void open(int i, int j) {
        sitesMap[i - 1][j - 1] = 1;
        int index = coordinateToIndex(i - 1, j - 1);
        if (i - 1 == 0) {
            sites.union(index, top);
        }
        if (i - 1 == n) {
            sites.union(index, bottom);
        }
        // up
        if (i > 1 && isOpen(i - 1, j)) {
            sites.union(coordinateToIndex(i - 2, j - 1), index);
        }
        // down
        if (i < n && isOpen(i + 1, j)) {
            sites.union(coordinateToIndex(i + 2, j - 1), index);
        }
        // left
        if (j > 1 && isOpen(i, j - 1)) {
            sites.union(coordinateToIndex(i - 1, j - 2), index);
        }
        // right
        if (j < n && isOpen(i, j + 1)) {
            sites.union(coordinateToIndex(i - 1, j + 2), index);
        }
    }
    public boolean isOpen(int i, int j) {
        return sitesMap[i - 1][j - 1] == 1;
    }
    public boolean isFull(int i, int j) {
        return sites.connected(coordinateToIndex(i - 1, j - 1), top);
    }
    public boolean percolates() {
        return sites.connected(top, bottom);
    }
    public static void main(String[] args) {
        Percolation p = new Percolation(5);
        p.open(1, 2);
        p.open(2, 2);
        p.open(2, 3);
        StdOut.println(p.isFull(2, 4));
        /*
        for (int x = 0; x < p.n; x++) {
            for (int y = 0; y < p.n; y++) {
                StdOut.print(p.sitesMap[x][y]);
                StdOut.print('\t');
            }
            StdOut.println(' ');
        }

        for (int x = 0; x < p.n; x++) {
            for (int y = 0; y < p.n; y++) {
                StdOut.print(p.sites.find(p.coordinateToIndex(x , y)));
                StdOut.print('\t');
            }
            StdOut.println(' ');
        }
        */
    }
}