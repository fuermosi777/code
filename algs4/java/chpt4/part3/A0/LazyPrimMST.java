package algs4.chpt4.part3.A0;

import algs4.chpt2.part4.A6.MinPQ;
import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 9/8/16.
 */
public class LazyPrimMST {

    private boolean[] marked;
    private MinPQ<Edge> pq;
    private Queue<Edge> mst;

    public LazyPrimMST(EdgeWeightedGraph G) {
        marked = new boolean[G.V()];
        pq = new MinPQ<>(G.V());
        mst = new Queue<>();

        visit(G, 0);
        while (!pq.isEmpty()) {
            Edge e = pq.delMin();
            int v = e.either();
            int w = e.other(v);
            if (!(marked[v] && marked[w])) {
                mst.enqueue(e);
            }
            if (!marked[v]) {
                visit(G, v);
            }
            if (!marked[w]) {
                visit(G, w);
            }
        }
    }

    private void visit(EdgeWeightedGraph G, int v) {
        marked[v] = true;
        for (Edge e : G.adj(v)) {
            if (!marked[e.other(v)]) {
                pq.insert(e);
            }
        }
    }

    public Iterable<Edge> edges() {
        return mst;
    }

    // 4.3.31
    public double weight() {
        double w = 0.0;
        for (Edge e : edges()) {
            w += e.weight();
        }
        return w;
    }
}
