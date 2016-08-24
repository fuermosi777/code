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

    // 4.2.3
    public Digraph(Digraph G) {
        this(G.V());
        for (int i = 0; i < G.V(); i++) {
            for (int j : G.adj(i)) {
                addEdge(i, j);
            }
        }
    }

    public int V() { return V; }

    public int E() { return E; }

    public void addEdge(int v, int w) {
        // 4.2.5 no self cycle
        // if (v == w) return;
        // 4.2.5 no parallel edges
        // if (hasEdge(v, w)) return;

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

    public boolean hasEdge(int v, int w) {
        for (int x : adj(v)) {
            if (x == w) return true;
        }
        return false;
    }
}
