package algs4.chpt4.part2.Q21;

import algs4.chpt4.part2.A0.Digraph;
import algs4.chpt4.part2.A5.Topological;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.Stack;

import java.util.Arrays;

/**
 * Created by hao on 8/24/16.
 */
public class LCA {

    private boolean[] marked;
    private boolean[] onStack;
    private boolean[] foundv;
    private boolean[] foundw;
    private int[] edgeTo;
    private Stack<Integer> ancestors;
    private int[] height;
    private Digraph G;
    private int source;

    public LCA(Digraph G) {
        this.G = G;
        marked = new boolean[G.V()];
        onStack = new boolean[G.V()];
        height = new int[G.V()];
        ancestors = new Stack<>();
        for (int i = 0; i < G.V(); i++) {
            height[i] = 0;
        }
    }

    private void dfs(Digraph G, int v, int x, int y) {
        marked[v] = true;
        onStack[v] = true;
        for (int w : G.adj(v)) {
            edgeTo[w] = v;

            if (w == x) {
                int i = w;
                while (i != source) {
                    foundv[i] = true;
                    i = edgeTo[i];
                }
            }

            if (w == y) {
                int i = w;
                while (i != source) {
                    foundw[i] = true;
                    i = edgeTo[i];
                }
            }

            if (height[w] <= height[v]) {
                height[w] = height[v] + 1;
            }

            if (!marked[w]) {
                dfs(G, w, x, y);
            }
        }
        onStack[v] = false;
    }

    public int lca(int v, int w) {
        Topological tp = new Topological(G);
        foundv = new boolean[G.V()];
        foundw = new boolean[G.V()];
        edgeTo = new int[G.V()];

        source = tp.order().iterator().next();
        foundv[source] = true;
        foundw[source] = true;

        dfs(G, source, v, w);

        int max = source;
        for (int i = 0; i < G.V(); i++) {
            if (foundv[i] && foundw[i]) {
                if (height[i] > height[max]) {
                    max = i;
                }
            }
        }
        System.out.println(Arrays.toString(height));
        return max;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part2/Q21/graph.txt");
        Digraph graph = new Digraph(in);
        LCA lca = new LCA(graph);
        System.out.print(lca.lca(6, 5));
    }

}
