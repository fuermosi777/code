import java.util.Stack;

/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses
 *
 * Easy (33.15%)
 * Total Accepted:    203397
 * Total Submissions: 613534
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 * 
 */
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else if (ch == ')' || ch == '}' || ch == ']') {
                if (stack.size() == 0) return false;
                char left = stack.pop();
                if (ch == ')' && left != '(') return false;
                if (ch == ']' && left != '[') return false;
                if (ch == '}' && left != '{') return false;
            }
        }

        if (stack.size() != 0) return false;

        return true;
    }
}
