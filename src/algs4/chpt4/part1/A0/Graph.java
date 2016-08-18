package algs4.chpt4.part1.A0;

import edu.princeton.cs.algs4.Bag;

/**
 * Created by hao on 8/16/16.
 */
public class Graph {

    private final int V;
    private int E;
    private Bag<Integer>[] adj;

    public Graph(int V) {
        this.V = V;
    }

    public int V() {
        return V;
    }

    public int E() {
        return E;
    }

    public void addEdge(int v, int w) {
        adj[v].add(w);
        adj[w].add(v);
        E++;
    }

    public Iterable<Integer> adj(int v) {
        return adj[v];
    }

}
