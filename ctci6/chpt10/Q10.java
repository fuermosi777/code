package ctci6.chpt10;

import java.util.PriorityQueue;
import java.util.Stack;

/**
 * Created by hao on 10/21/16.
 */
public class Q10 {

    private PriorityQueue<Integer> pq;

    public Q10() {
        pq = new PriorityQueue<>();
    }

    public void track(int x) {
        pq.add(x);
    }

    public int getRankOfNumber(int a) {
        if (pq.isEmpty()) return -1;
        int ct = -1;

        Stack<Integer> temp = new Stack<>();
        while (!pq.isEmpty()) {
            int x = pq.remove();
            if (x > a) {
                pq.add(x);
                break;
            } else {
                temp.push(x);
                ct++;
            }
        }

        while (!temp.isEmpty()) {
            pq.add(temp.pop());
        }

        return ct;
    }

    public static void main(String[] args) {
        Q10 q = new Q10();
        q.track(5);q.track(1);q.track(4);
        q.track(4);q.track(5);q.track(9);q.track(7);q.track(13);q.track(3);
        System.out.println(q.getRankOfNumber(4));
    }
}
