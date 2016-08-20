package algs4.chpt4.part1.Q15;

import edu.princeton.cs.algs4.Bag;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 8/20/16.
 */
public class Graph {

    private int V;
    private int E;
    private Bag<Integer>[] adj;

    public Graph(In in) {
        String[] lines = in.readAllLines();
        this.V = Integer.parseInt(lines[0]);
        this.E = Integer.parseInt(lines[1]);
        adj = (Bag<Integer>[]) new Bag[this.V];
        for (int i = 0; i < this.V; i++) {
            adj[i] = new Bag<>();
        }
        for (int i = 2; i < lines.length; i++) {
            String[] pts = lines[i].split(" ");
            int v = Integer.parseInt(pts[0]);
            for (int j = 1; j < pts.length; j++) {
                adj[v].add(Integer.parseInt(pts[j]));
            }
        }
    }

    public int V() {
        return V;
    }

    public int E() {
        return E;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part1/Q15/tinyGadj.txt");
        Graph graph = new Graph(in);
        in.close();
        System.out.println(graph.V());
    }
}
