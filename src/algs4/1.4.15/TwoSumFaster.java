import java.util.Stack;

public class TwoSumFaster {
    public static void main(String[] args) {
        int[] a = {-7,-3,-2,5,7};
        Stack<Integer> stack = new Stack<>();
        int buffer = a[0];
        for (int i = 0; i < a.length; i++) {
            if (a[i] < 0) {
                System.out.println("push: " + a[i]);
                stack.push(a[i]);
            } else if (a[i] > 0) {
                while (-buffer < a[i] && stack.size() > 0) {
                    buffer = stack.pop();
                    System.out.println("pop: buffer = " + buffer);
                }
                System.out.println(a[i] + " compare with " + buffer);
                if (a[i] == -buffer) {
                    System.out.println(buffer + " " + a[i]);
                }
            }
        }
    }
}