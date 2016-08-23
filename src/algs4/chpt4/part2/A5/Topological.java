package algs4.chpt4.part2.A5;

import algs4.chpt4.part2.A0.Digraph;
import algs4.chpt4.part2.A4.DirectedCycle;

/**
 * Created by hao on 8/22/16.
 */
public class Topological {
    private Iterable<Integer> order;
    public Topological(Digraph G) {
        DirectedCycle cycleFinder = new DirectedCycle(G);
        if (!cycleFinder.hasCycle()) {
            DepthFirstOrder dfs = new DepthFirstOrder(G);
            order = dfs.reversePost();
        }
    }

    public Iterable<Integer> order() {
        return order;
    }

    public boolean isDAG() {
        return order != null;
    }
}
