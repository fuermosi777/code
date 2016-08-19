package algs4.chpt4.part1.Q8;

/**
 * Created by hao on 8/19/16.
 */
public class UF {
    private int[] a;
    private int[] ht;
    private int count;

    public UF(int M) {
        a = new int[M];
        ht = new int[M];
        for (int i = 0; i < M; i++) {
            a[i] = i;
            ht[i] = 1;
        }
        count = M;
    }

    public int count() {
        return count;
    }

    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }

    public int find(int x) {
        while (x != find(x)) {
            x = a[x];
        }
        return x;
    }

    public void union(int x, int y) {
        int xroot = find(x);
        int yroot = find(y);
        if (ht[xroot] < ht[yroot]) {
            a[xroot] = yroot;
        } else {
            a[yroot] = xroot;
            if (ht[yroot] == ht[xroot]) ht[xroot]++;
        }
        count--;
    }

    public int V() {
        return a.length;
    }

    public static void main(String[] args) {

    }
}