package Q10;

import java.util.Arrays;

/**
 * Created by hao on 6/7/17.
 */
public class Solution {

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

        // build first col
        boolean hasSingleBefore = false;
        for (int j = 0; j < pp.length() / 2; j++) {
            if (j == 0) {
                if (isAnySingle(j, pp) || pp.charAt(j) == s.charAt(0)) {
                    dp[0][j] = true;
                } else {
                    dp[0][j] = false;
                }
            } else {
                if (isMultiple(j * 2, pp)) {
                    if (dp[0][j - 1]) {
                        dp[0][j] = true;
                    } else if (hasSingleBefore) {
                        dp[0][j] = false;
                    } else if (pp.charAt(j * 2) == s.charAt(0) || isAnySingle(j * 2, pp)) {
                        dp[0][j] = true;
                    } else {
                        dp[0][j] = false;
                    }
                } else {
                    if (hasSingleBefore) {
                        dp[0][j] = false;
                    } else if (pp.charAt(j * 2) == s.charAt(0) || isAnySingle(j * 2, pp)) {
                        dp[0][j] = true;
                    } else {
                        dp[0][j] = false;
                    }
                }
            }
            if (!isMultiple(j * 2, pp)) hasSingleBefore = true;
        }

        // build rest
        for (int j = 0; j < pp.length() / 2; j++) {
            for (int i = 1; i < s.length(); i++) {
                if (isMultiple(j * 2, pp)) {
                    if (j - 1 >= 0 && dp[i][j - 1]) {
                        dp[i][j] = true;
                    } else if (dp[i - 1][j]) {
                        if (isAnySingle(j * 2, pp) || pp.charAt(j * 2) == s.charAt(i)) {
                            dp[i][j] = true;
                        } else {
                            dp[i][j] = false;
                        }
                    } else  {
                        dp[i][j] = false;
                    }
                } else {
                    if (isAnySingle(j * 2, pp) || pp.charAt(j * 2) == s.charAt(i)) {
                        if ((j - 1 >= 0 && dp[i - 1][j - 1])) {
                            dp[i][j] = true;
                        } else if (dp[i - 1][j]) {
                            dp[i][j] = false;
                        } else {
                            dp[i][j] = false;
                        }
                    } else {
                        dp[i][j] = false;
                    }
                }
            }
        }
//        // DEBUG
//        for (int j = 0; j < pp.length() / 2; j++) {
//            for (int i = 0; i < s.length(); i++) {
//                System.out.print(dp[i][j] + " ");
//            }
//            System.out.print('\n');
//        }

        return dp[s.length() - 1][pp.length() / 2 - 1];
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

        s.isMatch("aaa", "ab*a*c*a");
//        System.out.println("---");
//        s.isMatch("aaa", "c*a*a*.*aa");
//        System.out.println("---");
//        s.isMatch("aaa", "aaaa");

//        // test cases
//        ""
//        "a"
//        ""
//        "a*"
//        "aa"
//        "a"
//        "aa"
//        "aa"
//        "aaa"
//        "aa"
//        "aa"
//        "a*"
//        "aa"
//        ".*"
//        "ab"
//        ".*"
//        "aab"
//        "c*a*b"
//        "ab"
//        "**"
//        "ab"
//        ".*c"
//        "aaa"
//        "a.a"
//        "aaa"
//        "a*a"
//        "aac"
//        "a*cd"
//        "aaa"
//        "aaaa"
//        "a"
//        "ab*a"
//        "aaa"
//        "ab*ac*a"
//        "aaa"
//        "ab*a*c*a"
    }
}
