package algs4.chpt4.part4.A0;

/**
 * Created by hao on 9/8/16.
 */
public class DirectedEdge {

    private final double weight;
    private final int from;
    private final int to;

    public DirectedEdge(int v, int w, double weight) {
        from = v;
        to = w;
        this.weight = weight;
    }

    public int from() {
        return from;
    }

    public int to() {
        return to;
    }

    public double weight() {
        return weight;
    }

    public String toString() {
        return String.format("%d -> %d %.2f", from, to, weight);
    }



}
