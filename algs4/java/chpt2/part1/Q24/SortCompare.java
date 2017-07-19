package algs4.chpt2.part1.Q24;

import algs4.chpt2.part1.A2.Insertion;
import algs4.helper.RandomArrayOfInts;
import algs4.helper.Stopwatch;
/**
 * Created by hao on 6/24/16.
 */
public class SortCompare {
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(100000, 1, 1000);
        Integer[] b1 = RandomArrayOfInts.toInteger(a);
        Integer[] b2 = RandomArrayOfInts.toInteger(a);

        Stopwatch timer1 = new Stopwatch();
        InsertionWithSentinel.sort(b1);
        System.out.println(timer1.elapsedTime());

        Stopwatch timer2 = new Stopwatch();
        Insertion.sort(b2);
        System.out.println(timer2.elapsedTime());
    }
}
