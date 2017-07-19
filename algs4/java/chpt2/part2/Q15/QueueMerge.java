package algs4.chpt2.part2.Q15;

import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;
import java.util.LinkedList;
/**
 * Created by hao on 6/27/16.
 */
public class QueueMerge {

    public static LinkedList<Comparable> merge(LinkedList<Comparable> a, LinkedList<Comparable> b) {
        LinkedList<Comparable> c = new LinkedList();
        int N = a.size() + b.size();
        while (c.size() < N) {
            if (a.size() == 0) {
                c.add(b.remove());
            } else if (b.size() == 0) {
                c.add(a.remove());
            } else if (a.element().compareTo(b.element()) < 0) {
                c.add(a.remove());
            } else {
                c.add(b.remove());
            }
        }
        return c;
    }

    public static void sort(Comparable[] a) {
        LinkedList<LinkedList> q = new LinkedList<>();
        for (int i = 0; i < a.length; i++) {
            LinkedList<Comparable> j = new LinkedList<>();
            j.add(a[i]);
            q.add(j);
        }
        while (q.size() > 1) {
            LinkedList<Comparable> x = q.remove();
            LinkedList<Comparable> y = q.remove();
            LinkedList<Comparable> z = merge(x, y);
            q.add(z);
        }

        LinkedList<Comparable> finalEl = q.remove();
        for (int i = 0; i < a.length; i++) {
            a[i] = finalEl.remove();
        }
    }

    public static void main(String[] args) {
        // test LinkedList merge
        /*
        LinkedList<Comparable> l1 = new LinkedList<>();
        LinkedList<Comparable> l2 = new LinkedList<>();
        l1.add(1);l1.add(3);l1.add(5);l1.add(7);l1.add(9);
        l2.add(2);l2.add(4);l2.add(6);l2.add(8);l2.add(10);
        LinkedList<Comparable> l3 = merge(l1, l2);
        System.out.println(l3.toString());
        */

        //
        int[] a = RandomArrayOfInts.generate(40, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        System.out.println(Arrays.toString(b));
        sort(b);
        System.out.println(Arrays.toString(b));

    }
}
