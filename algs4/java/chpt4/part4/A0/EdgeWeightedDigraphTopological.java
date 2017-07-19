package algs4.chpt4.part4.A0;


import java.util.Stack;

/**
 * Created by hao on 9/9/16.
 */
public class EdgeWeightedDigraphTopological {

    Stack<Integer> reversePostOrder;

    private boolean[] marked;

    public EdgeWeightedDigraphTopological(EdgeWeightedDigraph G) {
        marked = new boolean[G.V()];
        reversePostOrder = new Stack<>();

        dfs(G, 0);
    }

    private void dfs(EdgeWeightedDigraph G, int v) {
        marked[v] = true;

        for (DirectedEdge e : G.adj(v)) {
            int w = e.to();
            if (!marked[w]) {
                dfs(G, w);
            }
        }

        reversePostOrder.push(v);

    }

    public Iterable<Integer> reversePost() {
        return reversePostOrder;
    }
}
