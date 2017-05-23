package Q5;

/**
 * Created by hao on 5/23/17.
 */
public class Solution2 {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;

        int maxLen = 0;
        int maxStart = 0;
        int maxEnd = 0;

        for (int i = 1; i < s.length() ; i++) {
            int start = 0;
            int end = 0;
            for (int j = i - 1; j >= 0 && 2 * i - j - 1 < s.length() && s.charAt(j) == s.charAt(2 * i - j - 1); j--) {
                start = j;
                end = 2 * i - j - 1;
            }
            if (end - start + 1 > maxLen) {
                maxStart = start;
                maxEnd = end;
                maxLen = end - start + 1;
            }
            for (int j = i - 1; j >= 0 && 2 * i - j < s.length() && s.charAt(j) == s.charAt(2 * i - j); j--) {
                start = j;
                end = 2 * i - j;
            }
            if (end - start + 1 > maxLen) {
                maxStart = start;
                maxEnd = end;
                maxLen = end - start + 1;
            }
        }

        return s.substring(maxStart, maxEnd + 1);
    }

    public static void main(String[] args) {
        Solution2 s = new Solution2();
        System.out.println(s.longestPalindrome("aaabbababab"));
    }
}
