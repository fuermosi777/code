import java.util.Stack;

public class EvaluatePostfix {
    public static int evaluate(String postfix) {
        Stack<Integer> ns = new Stack<>();
        for (char c : postfix.toCharArray()) {
            System.out.println(c);
            if (c == '+' || c == '-' || c == '*' || c == '/') {
                int result = 0;
                int second = ns.pop();
                int first = ns.pop();
                if (c == '+') result = first + second;
                if (c == '-') result = first - second;
                if (c == '*') result = first * second;
                if (c == '/') result = first / second;
                ns.push(result);
                System.out.println(first + " xx " + second + " = " + result);
            } else {
                ns.push(Character.getNumericValue(c));
            }
        }
        return ns.pop();
    }
    public static void main(String[] args) {
        System.out.print(evaluate("512+4*+3-"));
    }
}