package algs4.chpt1.part5.Q14;

import java.util.Arrays;

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

        if (ht[pid] > ht[qid]) {
            a[qid] = pid;
        } else {
            a[pid] = qid;
            if (ht[pid] == ht[qid]) ht[qid]++;
        }
        count--;
    }
    public static void main(String[] args) {
        QuickUnionWeightedHeightUF uf = new QuickUnionWeightedHeightUF(10);
        uf.union(4, 3);
        uf.union(3, 8);
        uf.union(6, 5);
        uf.union(9, 4);
        uf.union(2, 1);
        uf.union(5, 0);
        uf.union(7, 2);
        uf.union(6, 1);
    }
}
