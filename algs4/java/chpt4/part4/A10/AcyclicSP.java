package algs4.chpt4.part4.A10;

import algs4.chpt4.part2.A5.Topological;
import algs4.chpt4.part4.A0.DirectedEdge;
import algs4.chpt4.part4.A0.EdgeWeightedDigraph;
import algs4.chpt4.part4.A0.EdgeWeightedDigraphTopological;

/**
 * Created by hao on 9/9/16.
 */
public class AcyclicSP {
    private DirectedEdge[] edgeTo;
    private double[] distTo;

    public AcyclicSP(EdgeWeightedDigraph G, int s) {
        edgeTo = new DirectedEdge[G.V()];
        distTo = new double[G.V()];
        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Double.POSITIVE_INFINITY;
        }
        distTo[s] = 0.0;

        EdgeWeightedDigraphTopological topo = new EdgeWeightedDigraphTopological(G);
        for (int v : topo.reversePost()) {
            relax(G, v);
        }
    }

    private void relax(EdgeWeightedDigraph G, int v) {
        for (DirectedEdge e : G.adj(v)) {
            int w = e.to();
            if (distTo[w] > distTo[v] + e.weight()) {
                distTo[w] = distTo[v] + e.weight();
                edgeTo[w] = e;
            }
        }
    }
}
