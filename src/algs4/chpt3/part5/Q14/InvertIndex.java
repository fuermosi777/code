package algs4.chpt3.part5.Q14;

import edu.princeton.cs.algs4.Bag;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;
import java.util.HashMap;

/**
 * Created by hao on 8/15/16.
 */
public class InvertIndex {
    public static HashMap<String, Bag<String>> invert(HashMap<String, Bag<String>> st) {
        HashMap<String, Bag<String>> inverted = new HashMap<>();
        for (String movie : st.keySet()) {
            for (String actor : st.get(movie)) {
                if (inverted.containsKey(actor)) {
                    inverted.get(actor).add(movie);
                } else {
                    Bag<String> b = new Bag<>();
                    b.add(movie);
                    inverted.put(actor, b);
                }
            }
        }
        return inverted;
    }

    public static void main(String[] args) {
        In in = new In("/Users/hao/workspace/exercise/src/algs4/data/movies.txt");
        String[] lines = in.readAllLines();
        in.close();

        HashMap<String, Bag<String>> st = new HashMap<>();
        for (String l : lines) {
            String[] ws = l.split("/");
            Bag<String> bag = new Bag<>();
            for (int i = 1; i < ws.length; i++) {
                bag.add(ws[i]);
            }
            st.put(ws[0], bag);
        }
        HashMap<String, Bag<String>> inverted = invert(st);
        for (String actor : inverted.keySet()) {
            System.out.println(actor);
            for (String movie : inverted.get(actor)) {
                System.out.println('\t' + movie);
            }
        }

    }
}
