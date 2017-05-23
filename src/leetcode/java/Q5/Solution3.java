package Q5;

import java.util.Arrays;

/**
 * Created by hao on 5/23/17.
 *
 * DP
 * TODO: need to fix the abcdefdcba
 */
public class Solution3 {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        String r = reverse(s);

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
                }
            }
        }

        String longest = Character.toString(a.charAt(0));

        for (int i = 0; i <= a.length(); i++) {
            System.out.println(Arrays.toString(cache[i]));
            for (int j = 0; j <= b.length(); j++) {
                if (cache[i][j].length() > longest.length()) {
                    longest = cache[i][j];
                }
            }
        }
        return longest;
    }

    private String reverse(String s) {
        String res = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            res += s.charAt(i);
        }
        return res;
    }
}
