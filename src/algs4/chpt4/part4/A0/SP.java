package algs4.chpt4.part4.A0;

/**
 * Created by hao on 9/8/16.
 */
public class SP {

    private double[] distTo;

    public SP(EdgeWeightedDigraph G, int s) {
        distTo = new double[G.V()];
        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Double.POSITIVE_INFINITY;
        }
    }

    public double distTo(int v) {

    }

    public boolean hasPathTo(int v) {

    }

    public Iterable<DirectedEdge> pathTo(int v) {

    }
}
