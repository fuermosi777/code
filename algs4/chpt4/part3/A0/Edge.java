package algs4.chpt4.part3.A0;

/**
 * Created by hao on 8/25/16.
 */
public class Edge implements Comparable<Edge> {

    private int v;
    private int w;
    private final double weight;

    public Edge(int v, int w, double weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }

    public double weight() {
        return weight;
    }

    public int either() {
        return v;
    }

    public int other(int x) {
        if (v == x) return w;
        if (w == x) return v;
        throw new RuntimeException("WTF?");
    }

    public int compareTo(Edge that) {
        if (weight > that.weight()) return +1;
        else if (weight < that.weight) return -1;
        else return 0;
    }

    public String toString() {
        return String.format("%d-%d %.2f", v, w, weight);
    }

}
