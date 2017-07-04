package algs4.chpt4.part3.A7;

import algs4.chpt2.part4.Q33.IndexMinPQ;
import algs4.chpt4.part3.A0.Edge;
import algs4.chpt4.part3.A0.EdgeWeightedGraph;
import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 9/8/16.
 */
public class PrimMST {

    private Edge[] edgeTo;
    private double[] distTo;
    private boolean[] marked;
    private IndexMinPQ<Double> pq;

    public PrimMST(EdgeWeightedGraph G) {
        edgeTo = new Edge[G.V()];
        distTo = new double[G.V()];
        marked = new boolean[G.V()];
        pq = new IndexMinPQ<>(G.V());
        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Double.POSITIVE_INFINITY;
        }

        distTo[0] = 0.0;
        pq.insert(0, 0.0);
        while (!pq.isEmpty()) {
            visit(G, pq.delMin());
        }

    }

    private void visit(EdgeWeightedGraph G, int v) {
        marked[v] = true;
        for (Edge e : G.adj(v)) {
            int w = e.other(v);
            if (marked[w]) continue;
            if (e.weight() < distTo[w]) {
                edgeTo[w] = e;
                distTo[w] = e.weight();
                if (pq.contains(w)) {
                    pq.change(w, e.weight());
                } else {
                    pq.insert(w, e.weight());
                }
            }
        }
    }

    // 4.3.21
    public Iterable<Edge> edges() {
        Queue<Edge> q = new Queue<>();
        for (int i = 0; i < edgeTo.length; i++) {
            if (edgeTo[i] != null) {
                q.enqueue(edgeTo[i]);
            }
        }
        return q;
    }

    public double weights() {
        double w = 0.0;
        for (int i = 0; i < distTo.length; i++) {
            w += distTo[i];
        }

        return w;
    }

}
