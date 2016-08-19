package algs4.chpt4.part1.Q10;

import algs4.chpt4.part1.A0.Graph;

/**
 * Created by hao on 8/19/16.
 */
public class IrrelevantPoint {

    private boolean[] marked;
    private int[] ct;
    private int[] markedct;
    private int pt;

    public IrrelevantPoint(Graph G) {
        marked = new boolean[G.V()];
        ct = new int[G.V()];
        markedct = new int[G.V()];
        for (int i = 0; i < G.V(); i++) {
            ct[i] = 0;
            markedct[i] = 0;
        }
        int s = 0;
        for (int i = 0; i < G.V(); i++) {
            for (int j : G.adj(i)) {
                ct[i]++;
            }
        }
        dfs(G, s);
    }

    private void dfs(Graph G, int v) {
        marked[v] = true;
        for (int w: G.adj(v)) {
            if (!marked[w]) {
                dfs(G, w);
            } else {
                markedct[w]++;
                if (markedct[w] == ct[w]) {
                    pt = w;
                }
            }
        }

    }

    public int point() {
        return pt;
    }

    public static void main(String[] args) {
        Graph g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 3);
        IrrelevantPoint ip = new IrrelevantPoint(g);
        System.out.println(ip.point());
    }
}
