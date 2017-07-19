package algs4.chpt4.part1.Q29;

import java.util.HashSet;

/**
 * Created by hao on 8/22/16.
 */
public class EuraGraph {

    private int V;
    private int E;
    private HashSet<Integer>[] adj;

    public EuraGraph(String stream) {
        String[] edges = stream.split(" ");
        V = 10;
        E = 0;
        adj = (HashSet<Integer>[]) new HashSet[V];
        for (int i = 0; i < V; i++) {
            adj[i] = new HashSet<>();
        }
        for (String edge: edges) {
            int v = Integer.parseInt(edge.split("-")[0]);
            int w = Integer.parseInt(edge.split("-")[1]);
            addEdge(v, w);
        }
    }

    public void addEdge(int v, int w) {
        adj[v].add(w);
        adj[w].add(v);
        E++;
    }

    public boolean isEuraCircle() {
        for (int i = 0; i < V; i++) {
            if (adj[i].size() % 2 != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        EuraGraph test1 = new EuraGraph("0-1 0-2 0-3 1-3 1-4 2-5 2-9 3-6 4-7 4-8 5-8 5-9 6-7 6-9 7-8");
        EuraGraph test2 = new EuraGraph("0-1 0-2 0-3 1-3 0-3 2-5 5-6 3-6 4-7 4-8 5-8 5-9 6-7 6-9 8-8");
        EuraGraph test3 = new EuraGraph("0-1 1-2 1-3 0-3 0-4 2-5 2-9 3-6 4-7 4-8 5-8 5-9 6-7 6-9 7-8");
        EuraGraph test4 = new EuraGraph("4-1 7-9 6-2 7-3 5-0 0-2 0-8 1-6 3-9 6-3 2-8 1-5 9-8 4-5 4-7");
        EuraGraph test5 = new EuraGraph("0-1 1-2 2-3 3-0");
        System.out.println(test1.isEuraCircle());
        System.out.println(test2.isEuraCircle());
        System.out.println(test3.isEuraCircle());
        System.out.println(test4.isEuraCircle());
        System.out.println(test5.isEuraCircle());
    }
}
