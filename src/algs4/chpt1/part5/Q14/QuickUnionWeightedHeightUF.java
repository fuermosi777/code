package algs4.chpt1.part5.Q14;

/**
 * Created by hao on 6/22/16.
 */
public class QuickUnionWeightedHeightUF {
    private int[] a;
    private int[] ht;
    private int count;
    public QuickUnionWeightedHeightUF(int N) {
        a = new int[N];
        count = N;
        for (int i = 0; i < N; i++) {
            a[i] = i;
        }
        ht = new int[N];
        for (int i = 0; i < N; i++) {
            ht[i] = 1;
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

        if (ht[p] >= ht[q]) {
            a[q] = pid;
            if (ht[p] == ht[q]) ht[p]++;
        } else {
            a[q] = qid;
        }

        a[p] = qid;
        count--;
    }
}
