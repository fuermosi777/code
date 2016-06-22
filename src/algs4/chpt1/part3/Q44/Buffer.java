import java.util.Arrays;
import java.util.Stack;

public class Buffer {
    public Stack<Character> left = new Stack<>();
    public Stack<Character> right = new Stack<>();

    public void insert(char c) {
        left.push(c);
    }
    public char delete() {
        return left.pop();
    }
    public void moveleft(int k) {
        for (int i = 1; i <= k; i++) {
            right.push(left.pop());
        }
    }

    public void moveright(int k) {
        for (int i = 1; i <= k; i++) {
            left.push(left.pop());
        }
    }
    public int size() {
        return left.size() + right.size();
    }
    public static void main(String[] args) {
        Buffer b = new Buffer();
        b.insert('a');
        b.insert('a');
        b.moveleft(1);
        for (char c : b.left) {
            System.out.print(c);
        }
        System.out.print("|");
        for (char c : b.right) {
            System.out.print(c);
        }
    }
}