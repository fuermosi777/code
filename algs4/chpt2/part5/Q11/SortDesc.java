package algs4.chpt2.part5.Q11;

import algs4.chpt2.part1.A1.Selection;
import algs4.chpt2.part1.A2.Insertion;
import algs4.chpt2.part1.A3.Shell;
import algs4.chpt2.part2.A4.Merge;
import algs4.chpt2.part3.A5.Quick;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class SortDesc {
    private static class Elem implements Comparable<Elem> {
        private Comparable value;
        private int position;
        public Elem(Comparable value, int position) {
            this.value = value;
            this.position = position;
        }
        public int compareTo(Elem that) {
            return this.value.compareTo(that.value);
        }
        public int position() {
            return position;
        }
    }

    public static Elem[] elementalize(Comparable[] a) {
        Elem[] els = new Elem[a.length];
        for (int i = 0; i < a.length; i++) {
            Elem el = new Elem(a[i], i);
            els[i] = el;
        }
        return els;
    }

    public static Elem[] duplicate(Elem[] a) {
        Elem[] b = new Elem[a.length];
        for (int i = 0; i < a.length; i++) {
            Elem el = new Elem(a[i].value, i);
            b[i] = el;
        }
        return b;
    }

    public static void main(String[] args) {
        Integer a[] = {2, 2, 2, 2, 2, 2, 2};
        Elem[] els = elementalize(a);
        Elem[] els2 = duplicate(els);


        for (Elem el: els) {
            System.out.print(el.position() + " ");
        }

        Selection.sort(els);
        System.out.println("\nSelection");
        for (Elem el: els) {
            System.out.print(el.position() + " ");
        }
        Insertion.sort(els);
        System.out.println("\nInsertion");
        for (Elem el: els) {
            System.out.print(el.position() + " ");
        }

        Shell.sort(els);
        System.out.println("\nShell");
        for (Elem el: els) {
            System.out.print(el.position() + " ");
        }

        Merge.sort(els);
        System.out.println("\nMerge");
        for (Elem el: els) {
            System.out.print(el.position() + " ");
        }

        Quick.sort(els2);
        System.out.println("\nQuick");
        for (Elem el: els2) {
            System.out.print(el.position() + " ");
        }
    }
}
