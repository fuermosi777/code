package algs4.chpt4.part1.Q21;

import algs4.chpt4.part1.A0.SymbolGraph;

/**
 * Created by hao on 8/20/16.
 */
public class KevinBacon {
    public static void main(String[] args) {
        String[] nominations = {"DiCaprio, Leonardo", "Damon, Matt", "Cranston, Bryan", "Latarjet, Tania"};
        String s = "Bacon, Kevin";

        SymbolGraph sg = new SymbolGraph("/Users/hao/workspace/exercise/src/algs4/data/movies.txt", "/");

        SymbolGraphBFSPaths paths = new SymbolGraphBFSPaths(sg, s);
        for (String n : nominations) {
            System.out.println(n + ": " + paths.distTo(n) / 2);
        }
    }
}
