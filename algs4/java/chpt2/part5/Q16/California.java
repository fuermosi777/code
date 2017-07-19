package algs4.chpt2.part5.Q16;

import algs4.chpt2.part3.A5.Quick;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 7/11/16.
 */
public class California {
    private static class Candidate implements Comparable<Candidate> {
        private String name;
        private final char[] order = {'R','W','Q','O','J','M','V','A','H','B','S','G','Z','X','N','T','C','I','E','K','U','P','D','Y','F','L'};
        private int pos;

        public Candidate(String name) {
            this.name = name;
            char firstLetter = name.charAt(0);
            for (int i = 0; i < order.length; i++) {
                if (firstLetter == order[i]) {
                    this.pos = i;
                }
            }
        }
        public int compareTo(Candidate that) {
            if (this.pos == that.pos) return 0;
            if (this.pos > that.pos) return 1;
            return -1;
        }
    }
    public static void main(String[] args) {
        In stream = new In("/Users/hao/workspace/exercise/src/algs4/chpt2/part5/Q16/candidates.txt");
        String[] names = stream.readAllLines();
        Candidate[] candidates = new Candidate[names.length];
        for (int i = 0; i < names.length; i++) {
            Candidate can = new Candidate(names[i]);
            candidates[i] = can;
        }
        Quick.sort(candidates);
        for (Candidate c : candidates) {
            System.out.println(c.name);
        }
    }
}
