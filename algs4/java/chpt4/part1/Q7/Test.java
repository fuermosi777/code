package algs4.chpt4.part1.Q7;

import algs4.chpt4.part1.A0.Graph;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 8/18/16.
 */
public class Test {
    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/chpt4/part1/Q7/graph.txt");
        Graph g = new Graph(in);
        System.out.print(g.toString());
    }
}
