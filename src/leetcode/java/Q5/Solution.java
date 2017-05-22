package Q5;

/**
 * Created by hao on 5/21/17.
 *
 * Difficult at first glance, but easy when think through...
 *
 * Thinking 1: Brute force - simple one
 *
 * Thinking 2: iterate the string by char, test String[index - current] is the same as current char or not
 *
 */
public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;

        String longest = "" + s.charAt(0);
        String current = "";
        boolean isCurrentSingleChar = true;

        for (int i = 1; i < s.length(); i++) {
            int counterPos = i - current.length() - 1;
            int counterPos2 = i - current.length() - 2;

            if (current != "" && isCurrentSingleChar && s.charAt(i) == s.charAt(i - 1)) {
                current = current + s.charAt(i);
            } else if (counterPos < 0 && isCurrentSingleChar && s.charAt(0) == s.charAt(i)) {
                current = current + s.charAt(i);
            } else if (current == "" && counterPos2 >=0 && s.charAt(counterPos2) == s.charAt(i)) {
                current = "" + s.charAt(counterPos2) + s.charAt(counterPos) + s.charAt(i);
                isCurrentSingleChar = s.charAt(counterPos) == s.charAt(i);
            } else if (counterPos >= 0 && s.charAt(counterPos) == s.charAt(i)) {
                if (isCurrentSingleChar && current != "") {
                    isCurrentSingleChar = current.charAt(0) == s.charAt(counterPos);
                }
                current = s.charAt(counterPos) + current + s.charAt(i);
            } else {
                current = "";
                isCurrentSingleChar = true;
            }

            if (current.length() > longest.length()) {
                longest = current;
            }
            System.out.println(current);
        }
        return longest;
    }


    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.longestPalindrome("abbbabaaababbbabaaabab"));
    }
}
