package algs4.chpt1.part5.Q22;


import algs4.chpt1.part5.Q17.ErdosRenyi;
import algs4.helper.Stopwatch;

/**
 * Created by hao on 6/23/16.
 */
public class ErdosRenyiPerformance {
    public static void run(int N) {
        Stopwatch timer = new Stopwatch();
        int count = ErdosRenyi.count(N);
        double time = timer.elapsedTime();
        System.out.println(N + "; count: " + count + "; time: " +  time);
    }
    public static void main(String[] args) {
        int T = 5;
        for (int i = 0; i < T; i++) {
            run(10 * (int) Math.pow(10, i));
        }
    }
}
