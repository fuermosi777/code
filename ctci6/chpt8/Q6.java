package ctci6.chpt8;

import java.util.Stack;

/**
 * Created by hao on 10/18/16.
 */
public class Q6 {
    public static void move(Stack<Integer> a, Stack<Integer> b, Stack<Integer> c, int N) {
        // move topest N disks from a to c
        if (N == 2) {
            b.push(a.pop());
            c.push(a.pop());
            c.push(b.pop());
        } else {
            move(a, c, b, N - 1);
            c.push(a.pop());
            move(b, a, c, N - 1);
        }

    }
    public static void hanoi(Stack<Integer> a, Stack<Integer> b, Stack<Integer> c) {
        move(a, b, c, a.size());
    }
    public static void main(String[] args) {
        Stack<Integer> A = new Stack<>();
        Stack<Integer> B = new Stack<>();
        Stack<Integer> C = new Stack<>();
        A.push(5);
        A.push(4);
        A.push(3);
        A.push(2);
        A.push(1);
        hanoi(A, B, C);
        System.out.println(C.toString());
    }
}
