package algs4.chpt4.part2.Q23;

import algs4.chpt4.part2.A0.Digraph;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.Stack;

import java.util.Arrays;

/**
 * Created by hao on 8/25/16.
 */
public class LinearSCC {

    private Stack<Integer> stack;
    private boolean[] marked;
    private boolean[] reverseMarked;


    public LinearSCC(Digraph G, int v) {
        stack = new Stack<>();
        marked = new boolean[G.V()];
        reverseMarked = new boolean[G.V()];
        dfs(G, v, marked);
        dfs(G.reverse(), v, reverseMarked);
        for (int i = 0; i < G.V(); i++) {
            if (marked[i] && reverseMarked[i]) {
                stack.push(i);
            }
        }
    }

    private void dfs(Digraph G, int v, boolean[] marked) {
        marked[v] = true;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                dfs(G, w, marked);
            }
        }
    }

    public Iterable<Integer> SCC() {
        System.out.println(Arrays.toString(marked));
        System.out.println(Arrays.toString(reverseMarked));
        return stack;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part2/Q23/g.txt");
        Digraph digraph = new Digraph(in);
        LinearSCC scc = new LinearSCC(digraph, 0);
        System.out.println(scc.SCC().toString());
    }

}
