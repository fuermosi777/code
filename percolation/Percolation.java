import edu.princeton.cs.algs4.StdOut;

public class Percolation {
    public Percolation(int N) {
        if (N <= 0) {
            throw new java.lang.IllegalArgumentException(Integer.toString(N));
        }
    }
    public static void main(String[] args) {
        Percolation p = new Percolation(-1);
    }
}