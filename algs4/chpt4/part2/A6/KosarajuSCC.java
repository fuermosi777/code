package algs4.chpt4.part2.A6;

import algs4.chpt4.part2.A0.Digraph;
import algs4.chpt4.part2.A5.DepthFirstOrder;

/**
 * Created by hao on 8/23/16.
 */
public class KosarajuSCC {

    private boolean[] marked;
    private int[] id;
    private int count = 0;


    public KosarajuSCC(Digraph G) {
        marked = new boolean[G.V()];
        id = new int[G.V()];

        DepthFirstOrder order = new DepthFirstOrder(G.reverse());
        for (int s: order.reversePost()) {
            if (!marked[s]) {
                dfs(G, s);
                count++;
            }
        }
    }

    private void dfs(Digraph G, int v) {
        marked[v] = true;
        id[v] = count;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                dfs(G, w);
            }
        }
    }

    public boolean stronglyConnected(int v, int w) {
        return id[v] == id[w];
    }

    public int id(int v) {
        return id[v];
    }

    public int count() {
        return count;
    }

}
