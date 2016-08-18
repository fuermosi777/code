package algs4.chpt4.part1.A1;

import algs4.chpt4.part1.A0.Graph;
import edu.princeton.cs.algs4.Stack;

/**
 * Created by hao on 8/18/16.
 */
public class DepthFirstPaths {
    private boolean[] marked;
    private int[] edgeTo;
    private final int s;

    public DepthFirstPaths(Graph G, int s) {
        marked = new boolean[G.V()];
        edgeTo = new int[G.V()];
        this.s = s;
        dfs(G, s);
    }

    private void dfs(Graph G, int v) {
        marked[v] = true;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                edgeTo[w] = v;
                dfs(G, w);
            }
        }
    }

    public boolean hasPathTo(int v) {
        return marked[v];
    }

    public Iterable<Integer> pathTo(int v) {
        if (!hasPathTo(v)) return null;
        Stack<Integer> path = new Stack<>();
        int x = v;
        while (x != s) {
            path.push(x);
            x = edgeTo[x];
        }
        path.push(s);
        return path;
    }
}
