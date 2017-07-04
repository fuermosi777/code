package ctci6.chpt8;

import java.util.ArrayList;

/**
 * Created by hao on 10/15/16.
 */
public class Q1 {

    public static int steps(int N) {
        if (N <= 2) return N;
        if (N == 3) return 4;
        ArrayList<Integer> s = new ArrayList<>();
        s.add(0, 0);
        s.add(1, 1);
        s.add(2, 2);
        s.add(3, 3);
        for (int i = 4; i <= N; i++) {
            s.add(i, s.get(i - 1) + s.get(i - 2) + s.get(i - 3));
        }
        return s.get(N);
    }

    public static void main(String[] args) {
        System.out.println(steps(5));

    }
}
