package Q10;

import javax.sound.midi.SysexMessage;
import java.util.Arrays;

/**
 * Created by hao on 6/7/17.
 */
public class Solution {

    // TODO: fix it
    public boolean isMatch(String s, String p) {
        if (s.equals("") && p.equals("")) return true;
        if (p.equals("") && !s.equals("")) return false;

        String pp = "";
        for (int i = 0; i < p.length(); i++) {
            pp += p.charAt(i);
            if ((i == p.length() - 1 && p.charAt(i) != '*') ||
                    (i < p.length() - 1 && p.charAt(i + 1) != '*') &&
                    p.charAt(i) != '*') {
                pp += '#';
            }
        }

        if (s.equals("")) {
            for (int j = 1; j < pp.length(); j += 2) {
                if (pp.charAt(j) != '*') return false;
            }
            return true;
        }

        boolean[][] dp = new boolean[s.length()][pp.length() / 2];

        if (s.charAt(0) == pp.charAt(0) || isAnySingle(0, pp)) dp[0][0] = true;
        else dp[0][0] = false;

        for (int j = 0; j < pp.length() / 2; j++) {
            if (j == 0) continue;
            if (!dp[0][j - 1]) {
                dp[0][j] = false;
            } else if (isMultiple(j * 2, pp)) {
                dp[0][j] = true;
            } else {
                dp[0][j] = false;
            }

            for (int i = 0; i < s.length(); i++) {
                if (i != 0 && j != 0) {
                    if (dp[i - 1][j]) {
                        if (isMultiple(j * 2, pp)) {
                            dp[i][j] = true;
                        } else {
                            dp[i][j] = false;
                        }
                    } else {
                        dp[i][j] = false;
                    }
                }
            }
        }

        for (int j = 0; j < pp.length() / 2; j++) {
            for (int i = 0; i < s.length(); i++) {
                System.out.print(dp[i][j] + " ");
            }
            System.out.print('\n');
        }

        return true;
    }

    private boolean isMultiple(int i, String pp) {
        return pp.charAt(i + 1) == '*';
    }

    private boolean isAnySingle(int i, String pp) {
        return pp.charAt(i) == '.';
    }

    public static void main(String[] args) {
        Solution s = new Solution();
//        System.out.println(s.isMatch("", "a"));
//        System.out.println(s.isMatch("", "a*"));
//        System.out.println(s.isMatch("aa", "a"));
//        System.out.println(s.isMatch("aa", "aa"));
//        System.out.println(s.isMatch("aaa", "aa"));
//        System.out.println(s.isMatch("aa", "a*"));
//        System.out.println(s.isMatch("aa", ".*"));
//        System.out.println(s.isMatch("ab", ".*"));
//        System.out.println(s.isMatch("aab", "c*a*b"));
//        System.out.println(s.isMatch("ab", "**"));
//        System.out.println(s.isMatch("ab", ".*c"));
//        System.out.println(s.isMatch("aaa", "a.a"));
//        System.out.println(s.isMatch("aaa", "a*a"));
//        System.out.println(s.isMatch("aaa", "aaaa"));

        s.isMatch("aab", "c*a*b");
    }
}
