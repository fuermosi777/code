package algs4.chpt2.part5.Q2;

import algs4.chpt2.part2.A4.Merge;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class CombineWord {
    public static int find(String[] a, String str) {
        int lo = 0;
        int hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid].compareTo(str) == 0) {
                return mid;
            } else if (a[mid].compareTo(str) < 0) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return -1;
    }
    public static boolean contains(String str1, String str2) {
        if (str1.length() < str2.length()) return false;
        for (int i = 0; i < str2.length(); i++) {
            if (str1.charAt(i) != str2.charAt(i)) return false;
        }
        return true;
    }
    public static String remains(String str1, String str2) {
        if (str1.length() < str2.length()) return null;
        String s = "";
        for (int i = str2.length(); i < str1.length(); i++) {
            s += str1.charAt(i);
        }
        return s;
    }
    public static void main(String[] args) {
        In stream = new In("/Users/hao/workspace/exercise/src/algs4/chpt2/part5/Q2/words.txt");
        String[] words = stream.readAllLines();
        Merge.sort(words);
        System.out.println(Arrays.toString(words));
        for (int i = 0; i < words.length - 1; i++) {
            if (contains(words[i + 1], words[i])) {
                String remain = remains(words[i + 1], words[i]);
                //System.out.println("Try to find \"" + remain + "\"");
                if (find(words, remain) > 0) {
                    System.out.println(words[i + 1]);
                }
            }
        }
    }
}
