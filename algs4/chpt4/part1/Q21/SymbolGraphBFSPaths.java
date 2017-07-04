package algs4.chpt4.part1.Q21;

import algs4.chpt4.part1.A0.SymbolGraph;
import edu.princeton.cs.algs4.Queue;

import java.util.Arrays;
import java.util.HashMap;

/**
 * Created by hao on 8/20/16.
 */
public class SymbolGraphBFSPaths {

    private SymbolGraph G;
    private HashMap<String, Integer> distTo;

    public SymbolGraphBFSPaths(SymbolGraph G, String s) {
        this.G = G;
        distTo = new HashMap<>();
        bfs(s);
    }

    private void bfs(String v) {
        Queue<String> q = new Queue<>();
        q.enqueue(v);
        distTo.put(v, 0);
        while (!q.isEmpty()) {
            String w = q.dequeue();
            for (String x: G.adj(w)) {
                if (!distTo.containsKey(x)) {
                    distTo.put(x, distTo.get(w) + 1);
                    q.enqueue(x);
                }
            }
        }
    }

    public int distTo(String d) {
        return distTo.get(d);
    }

}
