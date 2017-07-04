package algs4.chpt4.part4.A10;

import algs4.chpt4.part4.A0.DirectedEdge;
import algs4.chpt4.part4.A0.EdgeWeightedDigraph;
import edu.princeton.cs.algs4.AcyclicLP;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 9/9/16.
 */
public class CPM {
    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/data/jobsPC.txt");
        in.readLine();
        int N = in.readInt();
        EdgeWeightedDigraph G = new EdgeWeightedDigraph(2 * N + 2);
        int s = 2*N, t = 2*N + 1;
        for (int i = 0; i < N; i++) {
            String[] a = in.readLine().split(" ");
            double weight = Double.parseDouble(a[0]);
            G.addEdge(new DirectedEdge(i, i + N, weight));
            G.addEdge(new DirectedEdge(s, i, 0.0));
            G.addEdge(new DirectedEdge(i + N, t, 0.0));

            for (int j = 1; j < a.length; j++) {
                int following = Integer.parseInt(a[j]);
                G.addEdge(new DirectedEdge(i + N, following, 0.0));
            }
        }

//        AcyclicLP lp = new AcyclicLP(G, s);
    }
}
