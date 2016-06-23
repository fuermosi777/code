package algs4.chpt1.part5.Q7;

/**
 * Created by hao on 6/22/16.
 */
public class QuickFindUF {
    private int[] a;
    private int count;
    public QuickFindUF(int N) {
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
        return a[p];
    }
    public void union(int p, int q) {
        int pid = find(p);
        int qid = find(q);
        if (pid == qid) return;

        for (int i = 0; i < a.length; i++) {
            if (pid == find(i)) {
                a[i] = qid;
            }
        }
        count--;
    }
    public static void main(String[] args) {}
}
