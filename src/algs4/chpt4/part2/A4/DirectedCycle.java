package algs4.chpt4.part2.A4;

import algs4.chpt4.part2.A0.Digraph;
import edu.princeton.cs.algs4.Stack;

/**
 * Created by hao on 8/22/16.
 */
public class DirectedCycle {

    private boolean[] marked;
    private int[] edgeTo;
    private Stack<Integer> cycle;
    private boolean[] onStack;

    public DirectedCycle(Digraph G) {
        marked = new boolean[G.V()];
        edgeTo = new int[G.V()];
    }

    private void dfs(Digraph G, int v) {
        marked[v] = true;
        onStack[v] = true;
        for (int w: G.adj(v)) {
            if (hasCycle()) return;
            if (!marked[w]) {
                edgeTo[w] = v;
                dfs(G, w);
            } else if (onStack[w]) {
                cycle = new Stack<Integer>();
                int x = w;
                while (x != v) {
                    cycle.push(x);
                    x = edgeTo[x];
                }
            }
        }
        onStack[v] = false;
    }

    public boolean hasCycle() {
        return cycle != null;
    }

    public Iterable<Integer> cycle() {
        return cycle;
    }
}
