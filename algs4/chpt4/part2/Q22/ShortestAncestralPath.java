package algs4.chpt4.part2.Q22;

import algs4.chpt4.part2.A0.Digraph;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 8/24/16.
 */
public class ShortestAncestralPath {
    private Digraph G;
    private boolean[] marked;

    public ShortestAncestralPath(Digraph G) {
        this.G = G.reverse();
    }

    private void dfs(int v, int[] h) {
        marked[v] = true;
        for (int w: G.adj(v)) {
            if (h[w] >= h[v]) {
                h[w] = h[v] + 1;
            }
            if (!marked[w]) {
                h[w] = h[v] + 1;
                dfs(w, h);
            }
        }
    }

    public int sap(int v, int w) {
        int[] hv = new int[G.V()];
        int[] hw = new int[G.V()];
        for (int i = 0; i < G.V(); i++) {
            hv[i] = -1;
            hw[i] = -1;
            if (i == v) hv[i] = 0;
            if (i == w) hw[i] = 0;
        }

        marked = new boolean[G.V()];
        dfs(v, hv);

        marked = new boolean[G.V()];
        dfs(w, hw);

        int min = 1; // should be the end of G (start of G in constructor)
        for (int i = 0; i < G.V(); i++) {
            if (hv[i] != -1 && hw[i] != -1) {
                if (hv[i] + hw[i] < hv[min] + hw[min]) {
                    min = i;
                }
            }
        }

//        System.out.println(Arrays.toString(hv));
//        System.out.println(Arrays.toString(hw));
//        System.out.println(min);
        return min;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part2/Q22/g.txt");
        Digraph g = new Digraph(in);
        ShortestAncestralPath p = new ShortestAncestralPath(g);
        p.sap(3, 4);
    }
}
