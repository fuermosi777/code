package algs4.chpt4.part2.A0;

import edu.princeton.cs.algs4.Bag;

/**
 * Created by hao on 8/22/16.
 */
public class Digraph {
    private final int V;
    private int E;
    private Bag<Integer>[] adj;

    public Digraph(int V) {
        this.V = V;
        this.E = 0;
        adj = (Bag<Integer>[]) new Bag[V];
        for (int i = 0; i < V; i++) {
            adj[i] = new Bag<Integer>();
        }
    }

    public int V() { return V; }

    public int E() { return E; }

    public void addEdge(int v, int w) {
        adj[v].add(w);
        E++;
    }

    public Iterable<Integer> adj(int v) {
        return adj[v];
    }

    public Digraph reverse() {
        Digraph r = new Digraph(V);
        for (int i = 0; i < V; i++) {
            for (int j: adj(i)) {
                r.addEdge(j, i);
            }
        }
        return r;
    }
}
