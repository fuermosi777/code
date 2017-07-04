package algs4.chpt2.part1.Q1;

import algs4.chpt2.part1.A1.Selection;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        String[] a = {"E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"};
        Selection.sort(a);
        System.out.println(Arrays.toString(a));
    }
}
