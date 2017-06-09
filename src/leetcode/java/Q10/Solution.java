package Q10;

import javax.sound.midi.SysexMessage;

/**
 * Created by hao on 6/7/17.
 */
public class Solution {
    public boolean isMatch(String s, String p) {
        if (s.equals("") && p.equals("")) return true;
        String pp = "";
        for (int i = 0; i < p.length(); i++) {
            pp += p.charAt(i);
            if ((i == p.length() - 1 && p.charAt(i) != '*') ||
                    (i < p.length() - 1 && p.charAt(i + 1) != '*') &&
                    p.charAt(i) != '*') {
                pp += '#';
            }
        }

        return isMatch(s, pp);
    }

    private boolean isMatchPP(String s, String pp) {
        return true;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.isMatch("", "a"));
        System.out.println(s.isMatch("", "a*"));
        System.out.println(s.isMatch("aa", "a"));
        System.out.println(s.isMatch("aa", "aa"));
        System.out.println(s.isMatch("aaa", "aa"));
        System.out.println(s.isMatch("aa", "a*"));
        System.out.println(s.isMatch("aa", ".*"));
        System.out.println(s.isMatch("ab", ".*"));
        System.out.println(s.isMatch("aab", "c*a*b"));
        System.out.println(s.isMatch("ab", "**"));
        System.out.println(s.isMatch("ab", ".*c"));
        System.out.println(s.isMatch("aaa", "a.a"));
        System.out.println(s.isMatch("aaa", "a*a"));
    }
}
