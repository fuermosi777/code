package Q5;

import java.util.Arrays;
import java.util.HashMap;

/**
 * Created by hao on 5/21/17.
 *
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 */

public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        String r = reverse(s);
        System.out.println(r);
        System.out.println(s);

        return lcs(s, r);
    }

    private String lcs(String a, String b) {
        String[][] cache = new String[a.length() + 1][b.length() + 1];

        for (int i = 0; i <= a.length(); i++) {
            for (int j = 0; j <= b.length(); j++) {
                if (i == 0 || j == 0) {
                    cache[i][j] = "";
                } else if (a.charAt(i - 1) == b.charAt(j - 1)) {
                    cache[i][j] = cache[i - 1][j - 1] + b.charAt(j - 1);
                } else {
                    cache[i][j] = "";
//                    if (cache[i - 1][j].length() > cache[i][j - 1].length()) {
//                        cache[i][j] = cache[i - 1][j];
//                    } else {
//                        cache[i][j] = cache[i][j - 1];
//                    }
                }
            }
        }
        for (int i = 0; i <= a.length(); i++) {
            System.out.println(Arrays.toString(cache[i]));
        }
        return "";
    }

    private String reverse(String s) {
        String res = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            res += s.charAt(i);
        }
        return res;
    }


    public static void main(String[] args) {
        Solution s = new Solution();
        s.longestPalindrome("abbababbaaababaaabbababbaa");
//        System.out.println(Arrays.toString(s.postfixSubstrings("abbc")));
    }
}
