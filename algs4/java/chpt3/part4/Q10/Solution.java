package algs4.chpt3.part4.Q10;

import algs4.chpt3.part4.A6.LinearProbingHashST;

/**
 * Created by hao on 8/11/16.
 */
public class Solution {

    public static void main(String[] args) {
        LinearProbingHashST lst = new LinearProbingHashST(16);
        String[] keys = {"E", "A", "S", "Y", "Q", "U", "T", "I", "O", "N"};
        for (String s : keys) {
            lst.put(s, 0);
        }
        lst.printKeys();
    }

}
