package algs4.chpt4.part1.Q33;

import edu.princeton.cs.algs4.Bag;
import edu.princeton.cs.algs4.In;

import java.util.HashMap;

/**
 * Created by hao on 8/22/16.
 */
public class SymbolGraph {

    private HashMap<String, Bag<String>> adj;
    private int V;
    private int E;

    public SymbolGraph(In in) {
        V = 0;
        E = 0;
        adj = new HashMap<>();
        String[] lines = in.readAllLines();
        for (String line: lines) {
            String v = line.split("-")[0];
            String w = line.split("-")[1];
            if (!adj.containsKey(v)) {
                adj.put(v, new Bag<>());
                V++;
            }
            if (!adj.containsKey(w)) {
                adj.put(w, new Bag<>());
                V++;
            }
            adj.get(v).add(w);
            adj.get(w).add(v);
            E++;
        }
    }

    public static void main(String[] args) {

    }

}
