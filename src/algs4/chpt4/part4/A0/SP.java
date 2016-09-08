package algs4.chpt4.part4.A0;

/**
 * Created by hao on 9/8/16.
 */
public class SP {

    private double[] distTo;
    private DirectedEdge[] edgeTo;

    public SP(EdgeWeightedDigraph G, int s) {
        distTo = new double[G.V()];
        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Double.POSITIVE_INFINITY;
        }

        edgeTo = (DirectedEdge[]) new DirectedEdge[G.V()];
    }

    public double distTo(int v) {

    }

    public boolean hasPathTo(int v) {

    }

    public Iterable<DirectedEdge> pathTo(int v) {

    }
}
