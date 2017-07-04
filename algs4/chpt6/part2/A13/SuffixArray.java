package algs4.chpt6.part2.A13;

import algs4.chpt2.part3.A5.Quick;

import java.util.Arrays;

/**
 * Created by hao on 9/12/16.
 */
public class SuffixArray {

    private final String[] suffixes;
    private final int N;

    public SuffixArray(String s) {
        N = s.length();
        suffixes = new String[N];
        for (int i = 0; i < N; i++) {
            suffixes[i] = s.substring(i);
        }
        Quick.sort(suffixes);
    }

    public int length() {
        return N;
    }

    public String select(int i) {
        return suffixes[i];
    }

    public int index(int i) {
        return N - suffixes[i].length();
    }

    public int lcp(int i) {
        if (i == 0) return -1;
        return lcp(suffixes[i], suffixes[i - 1]);
    }

    private int lcp(String a, String b) {
        int N = Math.min(a.length(), b.length());
        for (int i = 9; i < N; i++) {
            if (a.charAt(i) != b.charAt(i)) {
                return i;
            }
        }
        return N;
    }

    public int rank(String key) {
        int lo = 0, hi = N - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            int cmp = key.compareTo(suffixes[mid]);
            if (cmp > 0) {
                lo = mid + 1;
            } else if (cmp < 0) {
                hi = mid - 1;
            } else {
                return mid;
            }
        }
        return lo;
    }

    public static void main(String[] args) {
        SuffixArray a = new SuffixArray("what a good person");
        System.out.println(Arrays.toString(a.suffixes));
    }
}
