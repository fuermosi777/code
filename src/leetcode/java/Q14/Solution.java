package Q14;

/*
 * [14] Longest Common Prefix
 *
 * Testcase Example:  '[]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 */
public class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        String lcp = "";

        for (int i = 0; ; i++) {
            if (strs[0].length() == 0) return "";
            if (i >= strs[0].length()) return lcp;
            char t = strs[0].charAt(i);

            for (int j = 0; j < strs.length; j++) {
                if (i >= strs[j].length() || strs[j].charAt(i) != t) {
                    return lcp;
                }
            }

            lcp += t;
        }
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.longestCommonPrefix(new String[]{"aaa", "baa", "aabb", "aaaaaa"}));
    }
}
