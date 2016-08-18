package algs4.chpt4.part1.A2;

import algs4.chpt4.part1.A0.Graph;
import edu.princeton.cs.algs4.Queue;
import edu.princeton.cs.algs4.Stack;

/**
 * Created by hao on 8/18/16.
 */
public class BreadthFirstPaths {

    private boolean[] marked;
    private int[] edgeTo;

    private final int s;

    public BreadthFirstPaths(Graph G, int s) {
        marked = new boolean[G.V()];
        edgeTo = new int[G.V()];
        this.s = s;
        bfs(G, s);
    }

    private void bfs(Graph G, int s) {
        Queue<Integer> q = new Queue<>();
        marked[s] = true;
        q.enqueue(s);
        while (!q.isEmpty()) {
            int v = q.dequeue();
            for (int w : G.adj(v)) {
                if (!marked[w]) {
                    edgeTo[w] = v;
                    marked[w] = true;
                    q.enqueue(w);
                }
            }
        }
    }

    public boolean hasPathTo(int v) {
        return marked[v];
    }

    public Iterable<Integer> pathTo(int v) {
        if (!hasPathTo(v)) return null;
        Stack<Integer> path = new Stack<>();
        int x = v;
        while (x != s) {
            path.push(x);
            x = edgeTo[x];
        }

        path.push(s);

        return path;
    }

}
