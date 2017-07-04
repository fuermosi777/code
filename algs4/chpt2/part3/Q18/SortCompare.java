package algs4.chpt2.part3.Q18;

import algs4.helper.RandomArrayOfInts;
import algs4.helper.Stopwatch;

import algs4.chpt2.part3.A5.Quick;
import algs4.chpt2.part3.Q18.QuickSimple;
import algs4.chpt2.part3.Q18.Quick3Samples;

import java.util.Arrays;

/**
 * Created by hao on 6/28/16.
 */
public class SortCompare {
    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(1000000, 1, 10000000);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        Integer[] c = b;
        Stopwatch t1 = new Stopwatch();
        Quick.sort(b);
        System.out.println("Quick: " + t1.elapsedTime());
        Stopwatch t2 = new Stopwatch();
        Quick3Samples.sort(c);
        System.out.println("Simple quick: " + t2.elapsedTime());
        //System.out.println(Arrays.toString(b));
    }
}
