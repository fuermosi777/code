package algs4.chpt4.part4.A9;

import algs4.chpt2.part4.Q33.IndexMinPQ;
import algs4.chpt4.part3.A0.Edge;
import algs4.chpt4.part4.A0.DirectedEdge;
import algs4.chpt4.part4.A0.EdgeWeightedDigraph;
import edu.princeton.cs.algs4.Stack;

/**
 * Created by hao on 9/9/16.
 */
public class Dijkstra {
    private DirectedEdge[] edgeTo;
    private double[] distTo;
    private IndexMinPQ<Double> pq;

    public Dijkstra(EdgeWeightedDigraph G, int s) {
        edgeTo = new DirectedEdge[G.V()];
        distTo = new double[G.V()];
        pq = new IndexMinPQ<>();

        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Double.POSITIVE_INFINITY;
        }
        distTo[s] = 0.0;

        pq.insert(0, 0.0);
        while (!pq.isEmpty()) {
            relax(G, pq.delMin());
        }
    }

    private void relax(EdgeWeightedDigraph G, int v) {
        for (DirectedEdge e : G.adj(v)) {
            int w = e.to();
            if (distTo[w] > distTo[v] + e.weight()) {
                distTo[w] = distTo[v] + e.weight();
                edgeTo[w] = e;
                if (pq.contains(w)) pq.change(w, distTo[w]);
                else pq.insert(w, distTo[w]);
            }
        }
    }

    public double distTo(int v) {
        return distTo[v];
    }

    public boolean hasPathTo(int v) {
        return distTo[v] < Double.POSITIVE_INFINITY;
    }

    public Iterable<DirectedEdge> pathTo(int v) {
        if (!hasPathTo(v)) return null;
        Stack<DirectedEdge> stack = new Stack<>();
        DirectedEdge e = edgeTo[v];
        while (e != null) {
            stack.push(e);
            e = edgeTo[e.from()];
        }
        return stack;
    }
}
