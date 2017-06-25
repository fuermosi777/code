import java.util.Arrays;
import java.util.HashMap;

/**
 * Created by hao on 5/21/17.
 *
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Note: for string concat, maybe should use substring() due to performance issue
 *
 * Manacher's Algorithm
 *
 * https://segmentfault.com/a/1190000003914228
 */

public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        String inserted = "#";
        for (int i = 0; i < s.length(); i++) {
            inserted += s.charAt(i);
            inserted += "#";
        }

        int[] RL = new int[inserted.length()];
        int maxRight = 0;
        int maxRightCenter = 0;
        int maxLen = 0;
        int maxLenPos = 0;

        for (int i = 0; i < inserted.length(); i++) {
            if (i >= maxRight) {
                RL[i] = 1;
            } else {
                RL[i] = Math.min(RL[2 * maxRightCenter - i], RL[maxRight - i]);
            }
            for (; i - RL[i] >= 0 && i + RL[i] < inserted.length() && inserted.charAt(i - RL[i]) == inserted.charAt(i + RL[i]); RL[i] += 1) {
                if (i + RL[i] - 1 > maxRight) {
                    maxRight = i + RL[i] - 1;
                    maxRightCenter = i;
                }
            }
            if (RL[i] > maxLen) {
                maxLen = RL[i];
                maxLenPos = i;
            }
        }

        String longest = "";
        String result = "";
        for (int i = maxLenPos - maxLen + 1; i <= maxLenPos + maxLen - 1; i++) {
            longest += inserted.charAt(i);
        }
        for (int i = 0; i < longest.length(); i++) {
            if (longest.charAt(i) != '#') {
                result += longest.charAt(i);
            }
        }

        return result;
    }


    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.longestPalindrome("abccbaef"));
//        System.out.println(Arrays.toString(s.postfixSubstrings("abbc")));
    }
}
