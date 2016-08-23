package algs4.chpt4.part1.A0;

import edu.princeton.cs.algs4.Bag;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 8/16/16.
 */
public class Graph {

    private final int V;
    private int E;
    private Bag<Integer>[] adj;

    public Graph(int V) {
        this.V = V;
        this.E = 0;
        adj = (Bag<Integer>[]) new Bag[V];
        for (int v = 0; v < V; v++) {
            adj[v] = new Bag<>();
        }
    }

    public Graph(In in) {
        this(in.readInt());
        int E = in.readInt();
        for (int i = 0; i < E; i++) {
            int v = in.readInt();
            int w = in.readInt();
            addEdge(v, w);
        }
    }

    // 4.1.3
    public Graph(Graph G) {
        this(G.V());
        this.E = G.E();
        for (int i = 0; i < V; i++) {
            for (int v : G.adj(i)) {
                adj[i].add(v);
            }
        }
    }

    // 4.1.4
    public boolean hasEdge(int v, int w) {
        for (int x : adj[v]) {
            if (x == w) return true;
        }
        for (int y : adj[w]) {
            if (y == v) return true;
        }
        return false;
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

    public String toString() {
        String s = V + " vertices, " + E + " edges\n";
        for (int v = 0; v < V; v++) {
            s += v + ": ";
            for (int w : adj(v)) {
                s += w + " ";
            }
            s += "\n";
        }
        return s;
    }

    // 4.1.31
    public int parallel() {
        int count = 0;
        boolean marked[] = new boolean[V];
        Queue<Integer> q = new Queue<>();
        q.enqueue(0);
        marked[0] = true;
        while (!q.isEmpty()) {
            int v = q.dequeue();
            for (int w: adj(v)) {
                if (!marked[w]) {
                    q.enqueue(w);
                    marked[w] = true;
                    count++;
                }
            }
        }
        return E - count;
    }

    public static void main(String[] args) {

    }

}
