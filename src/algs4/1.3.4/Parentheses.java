import java.util.Stack;

public class Parentheses {
    public static boolean run(String s) {
        Stack<Character> stack = new Stack<>();
        for (char ch : s.toCharArray()) {
            if (ch == '[' || ch == '(' || ch == '{') stack.push(ch);
            if (ch == ')') {
                char prev = stack.pop();
                if (prev != '(') return false;
            }
            if (ch == ']') {
                char prev = stack.pop();
                if (prev != '[') return false;
            }
            if (ch == '}') {
                char prev = stack.pop();
                if (prev != '{') return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String s1 = "[()]{}{[()()]()}";
        String s2 = "[(])";
        System.out.println(run(s2));
    }
}