package ctci6.chpt5;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by hao on 10/5/16.
 */
public class Q3 {
    public static int maxFlip(int N) {
        if (~N == 0) return Integer.BYTES * 8;
        ArrayList<Integer> lengths = new ArrayList<>();
        int counter = 0;
        while (N != 0) {
            if ((N & 1) == 1) {
                counter++;
            } else {
                addValue(lengths, counter);
                counter = 0;
            }
            N = N >>> 1;
        }
        addValue(lengths, counter);
        Collections.sort(lengths);
        return lengths.get(lengths.size() - 1) + 1;
    }

    public static void addValue(ArrayList<Integer> lengths, int a) {
        if (lengths.isEmpty()) {
            lengths.add(a);
        } else {
            int index = lengths.size() - 1;
            int last = lengths.get(index);
            lengths.set(index, last + a);
            lengths.add(a);
        }
    }

    public static void main(String[] args) {
        System.out.println(maxFlip(0b11011101111));
    }
}
