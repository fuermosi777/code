package algs4.chpt1.part5.Q7;

/**
 * Created by hao on 6/22/16.
 */
public class QuickUnionUF {
    private int[] a;
    private int count;
    public QuickUnionUF(int N) {
        a = new int[N];
        count = N;
        for (int i = 0; i < N; i++) {
            a[i] = i;
        }
    }
    public int count() {
        return count;
    }

    public boolean connected(int p, int q) {
        return find(p) == find(q);
    }

    public int find(int p) {
        while (a[p] != p) {
            p = a[p];
        }
        return p;
    }
    public void union(int p, int q) {
        int pid = find(p);
        int qid = find(q);
        if (pid == qid) return;
        a[p] = qid;
        count--;
    }
}
