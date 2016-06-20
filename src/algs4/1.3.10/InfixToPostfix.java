import java.util.Stack;

public class InfixToPostfix {
    public static String convert(String infix) {
        Stack<Character> ps = new Stack<>();
        Stack<Character> os = new Stack<>();
        String result = "";
        for (char c : infix.toCharArray()) {
            if (c == '(') {
                ps.push(c);
            } else if (c == ')') {
                ps.pop();
                result = result + os.pop();
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                if (ps.isEmpty() && !os.isEmpty()) {
                    result = result + os.pop();
                    os.push(c);
                } else {
                    os.push(c);
                }
            } else {
                result = result + c;
            }
        }
        while (!os.isEmpty()) {
            result += os.pop();
        }
        return result;
    }
    public static void main(String[] args) {
        String i1 = "5+((1+2)*4)-3";
        System.out.println(convert(i1));
    }
}