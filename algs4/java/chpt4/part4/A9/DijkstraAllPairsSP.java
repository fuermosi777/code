package algs4.chpt4.part4.A9;

import algs4.chpt4.part4.A0.DirectedEdge;
import algs4.chpt4.part4.A0.EdgeWeightedDigraph;

/**
 * Created by hao on 9/9/16.
 */
public class DijkstraAllPairsSP {
    private Dijkstra[] all;

    public DijkstraAllPairsSP(EdgeWeightedDigraph G) {
        all = new Dijkstra[G.V()];
        for (int i = 0; i < G.V(); i++) {
            all[i] = new Dijkstra(G, i);
        }
    }

    public Iterable<DirectedEdge> path(int s, int t) {
        return all[s].pathTo(t);
    }

    public double dist(int s, int t) {
        return all[s].distTo(t);
    }
}
