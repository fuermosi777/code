package algs4.chpt4.part2.Q7;

import algs4.chpt4.part2.A0.Digraph;
import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 8/23/16.
 */
public class Degress {

    private Digraph graph;
    private int[] indegree;
    private int[] outdegree;

    public Degress(Digraph G) {
        graph = new Digraph(G);
        indegree = new int[G.V()];
        outdegree = new int[G.V()];
        for (int v = 0; v < G.V(); v++) {
            int ct = 0;
            for (int w : G.adj(v)) {
                ct++;
            }
            outdegree[v] = ct;
        }
        Digraph R = G.reverse();
        for (int v = 0; v < R.V(); v++) {
            int ct = 0;
            for (int w: R.adj(v)) {
                ct++;
            }
            indegree[v] = ct;
        }
    }

    public int indegree(int v) {
        return indegree[v];
    }

    public int outdegree(int v) {
        return outdegree[v];
    }

    public Iterable<Integer> sources() {
        Queue<Integer> q = new Queue<>();
        for (int v = 0; v < graph.V(); v++) {
            if (indegree[v] == 0) {
                q.enqueue(v);
            }
        }
        return q;
    }

    public Iterable<Integer> sinks() {
        Queue<Integer> q = new Queue<>();
        for (int v = 0; v < graph.V(); v++) {
            if (outdegree[v] == 0) {
                q.enqueue(v);
            }
        }
        return q;
    }

    public boolean isMap() {
        for (int v = 0; v < graph.V(); v++) {
            if (indegree[v] != 1) {
                return false;
            }
        }
        return true;
    }
}
