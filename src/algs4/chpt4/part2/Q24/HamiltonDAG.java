package algs4.chpt4.part2.Q24;

import algs4.chpt4.part2.A0.Digraph;
import algs4.chpt4.part2.A5.Topological;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 8/25/16.
 */
public class HamiltonDAG {

    private boolean hasPath = true;

    public HamiltonDAG(Digraph G) {
        Topological t = new Topological(G);

        int[] orderArray = new int[G.V()];
        int key = 0;

        for (int v : t.order()) {
            orderArray[key] = v;
            key++;
        }

        for (int i = 0; i < orderArray.length; i++) {
            if (i != orderArray.length - 1) {
                if (!G.hasEdge(orderArray[i], orderArray[i + 1])) {
                    hasPath = false;
                }
            }
        }
    }

    public boolean hasPath() {
        return hasPath;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part2/Q24/g.txt");
        Digraph g = new Digraph(in);
        HamiltonDAG h = new HamiltonDAG(g);
        System.out.println(h.hasPath());
    }

}
