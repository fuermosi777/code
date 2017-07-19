package algs4.chpt4.part2.Q20;

import algs4.chpt4.part2.A0.Digraph;
import algs4.chpt4.part2.Q7.Degress;
import edu.princeton.cs.algs4.Stack;

/**
 * Created by hao on 8/23/16.
 */
public class DirectedEulerCycle {

    private Stack<Integer> EulerCycle;
    private boolean[] marked;
    private boolean[] onStack;
    private Degress degress;
    private int[] edgeTo;

    public DirectedEulerCycle(Digraph G) {
        marked = new boolean[G.V()];
        onStack = new boolean[G.V()];
        degress = new Degress(G);
        edgeTo = new int[G.V()];
        for (int v = 0; v < G.V(); v++) {
            if (!marked[v]) {
                findCycle(G, v);
            }
        }
    }

    public void findCycle(Digraph G, int v) {
        marked[v] = true;

        onStack[v] = degress.indegree(v) == degress.outdegree(v);

        for (int w : G.adj(v)) {
            if (foundCycle()) return;
            if (!marked[w]) {
                edgeTo[w] = v;
                findCycle(G, w);
            } else if (onStack[w]) {
                EulerCycle = new Stack<>();
                int x = w;
                while (x != v) {
                    EulerCycle.push(x);
                    x = edgeTo[x];
                }
                for (int p : EulerCycle) {
                    if (!onStack[p]) EulerCycle = null;
                }
            }
        }

        onStack[v] = false;
    }

    public boolean foundCycle() {
        return EulerCycle != null;
    }

    public Iterable<Integer> EulerCycle() {
        return EulerCycle;
    }

}
