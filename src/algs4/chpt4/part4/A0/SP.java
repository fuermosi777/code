package algs4.chpt4.part4.A0;

import edu.princeton.cs.algs4.Stack;

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
        distTo[s] = 0;

        edgeTo = (DirectedEdge[]) new DirectedEdge[G.V()];
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
            int start = e.from();
            stack.push(e);
            e = edgeTo[start];
        }
        return stack;
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
