package algs4.chpt4.part1.Q16;

import algs4.chpt4.part1.A0.Graph;
import algs4.chpt4.part1.A2.BreadthFirstPaths;
import algs4.chpt4.part1.A3.CC;
import edu.princeton.cs.algs4.Queue;

/**
 * Created by hao on 8/20/16.
 */
public class GraphProperties {

    private Graph G;
    private int[] ecc;
    private int[] minCircle; // shortest circle for each v

    public GraphProperties(Graph G) {
        CC cc = new CC(G);
        if (cc.count() != 1) {
            throw new Error();
        }
        this.G = G;

        for (int i = 0; i < G.V(); i++) {
            BreadthFirstPaths b = new BreadthFirstPaths(G, i);
            ecc[i] = b.maxDist();
        }
    }

    public int eccentricity(int v) {
        return ecc[v];
    }

    public int diameter() {
        int d = ecc[0];
        for (int i : ecc) {
            if (i > d) {
                d = i;
            }
        }
        return d;
    }

    public int radius() {
        int r = ecc[0];
        for (int i : ecc) {
            if (i < r) {
                r = i;
            }
        }
        return r;
    }

    public int center() {
        int r = radius();
        for (int i = 0; i < G.V(); i++) {
            if (ecc[i] == r) {
                return i;
            }
        }
        return -1;
    }

    // 4.1.17
    public int girth() {
        int g = Integer.MAX_VALUE;
        for (int i = 0; i < G.V(); i++) {
            int c = findMinCircle(i);
            if (c < g) {
                g = c;
            }
        }
        return g;
    }

    private int findMinCircle(int v) {
        boolean[] marked = new boolean[G.V()];
        int[] dist = new int[G.V()];
        for (int i = 0; i < G.V(); i++) {
            dist[i] = 0;
        }

        Queue<Integer> q = new Queue<>();
        q.enqueue(v);
        while (!q.isEmpty()) {
            int w = q.dequeue();
            marked[w] = true;
            for (int x : G.adj(w)) {
                if (marked[x] && dist[x] >= 2) {
                    return dist[x];
                } else {
                    dist[x]++;
                    q.enqueue(x);
                }
            }
        }
        return Integer.MAX_VALUE;
    }

    public static void main(String[] args) {

    }
}
