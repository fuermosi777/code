package algs4.chpt4.part3.A8;

import algs4.chpt2.part4.A6.MinPQ;
import algs4.chpt4.part3.A0.Edge;
import algs4.chpt4.part3.A0.EdgeWeightedGraph;
import edu.princeton.cs.algs4.Queue;
import edu.princeton.cs.algs4.UF;

/**
 * Created by hao on 9/8/16.
 */
public class Kruskal {

    private Queue<Edge> mst;

    public Kruskal(EdgeWeightedGraph G) {
        mst = new Queue<>();
        MinPQ<Edge> pq = new MinPQ<Edge>();
        for (Edge e : G.edges()) {
            pq.insert(e);
        }

        UF uf = new UF(G.V());
        while (!pq.isEmpty() && mst.size() < G.V() - 1) {
            Edge e = pq.delMin();
            int v = e.either();
            int w = e.other(v);
            if (uf.connected(v, w)) continue;
            uf.union(v, w);
            mst.enqueue(e);
        }
    }
}
