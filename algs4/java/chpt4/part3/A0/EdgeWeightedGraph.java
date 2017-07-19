package algs4.chpt4.part3.A0;

import edu.princeton.cs.algs4.Bag;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 8/25/16.
 */
public class EdgeWeightedGraph {

    private final int V;
    private int E;
    private Bag<Edge>[] adj;

    public EdgeWeightedGraph(int V) {
        this.V = V;
        this.E = 0;
        adj = (Bag<Edge>[]) new Bag[V];
        for (int i = 0; i < V; i++) {
            adj[i] = new Bag<Edge>();
        }
    }

    public EdgeWeightedGraph(In in) {
        this(in.readInt());

        int e = in.readInt();
        String[] lines = in.readAllLines();
        for (int i = 1; i <= e; i++) {
            String line = lines[i];

            String[] vals = line.split(" ");
            Edge edge = new Edge(Integer.parseInt(vals[0]), Integer.parseInt(vals[1]), Double.parseDouble(vals[2]));
            addEdge(edge);
        }
    }

    public int V() {
        return V;
    }

    public int E() {
        return E;
    }

    public void addEdge(Edge e) {
        int v = e.either();
        int w = e.other(v);
        adj[v].add(e);
        adj[w].add(e);
        E++;
    }

    public Iterable<Edge> adj(int v) {
        return adj[v];
    }

    public Iterable<Edge> edges() {
        Bag<Edge> bag = new Bag<>();
        for (int i = 0; i < V; i++) {
            for (Edge e : adj[i]) {
                if (e.other(i) > i) {
                    bag.add(e);
                }
            }
        }
        return bag;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/data/tinyEWG.txt");
        EdgeWeightedGraph g = new EdgeWeightedGraph(in);
    }
}
