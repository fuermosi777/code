/*
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses
 *
 * Medium (44.02%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
import java.util.*;

public class Solution {
    public List<String> generateParenthesis(int n) {
        List<List<String>> dp = new ArrayList<>();

        List<String> emptyList = new ArrayList<>();
        emptyList.add("");
        dp.add(emptyList);

        List<String> first = new ArrayList<>();
        first.add("()");
        dp.add(first);

        for (int i = 2; i <= n; i++) {
          Set<String> set = new HashSet<>();
          List<String> list = new ArrayList<>();
          List<String> lastList = dp.get(i - 1);

          for (String item : lastList) {
            for (int j = 0; j < item.length(); j++) {
              if (item.charAt(j) == ')') {
                String newStr = item.substring(0, j) + "()" + item.substring(j);
                if (!set.contains(newStr)) {
                  set.add(newStr);
                  list.add(newStr);
                }
              }
            }
            String newStr = item + "()";
            if (!set.contains(newStr)) {
              set.add(newStr);
              list.add(newStr);
            }
          }

          dp.add(list);
        }

        return dp.get(n);
    }
}
