package algs4.chpt1.part4.Q37;

import algs4.chpt1.part4.Q37.FixedCapacityStackOfInts;
import algs4.chpt1.part4.Q37.FixedCapacityStack;
import algs4.helper.Stopwatch;
import javafx.scene.paint.Stop;

/**
 * Created by hao on 6/22/16.
 */
public class BoxingExperiment {
    public static void main(String[] args) {
        FixedCapacityStack autobox = new FixedCapacityStack(1000000);
        FixedCapacityStackOfInts notautobox = new FixedCapacityStackOfInts(1000000);
        Stopwatch timer = new Stopwatch();
        for (int i = 0; i < 999999; i++) {
            autobox.push(i);
            autobox.pop();
        }
        System.out.println(timer.elapsedTime());
        Stopwatch timer2 = new Stopwatch();
        for (int i = 0; i < 999999; i++) {
            notautobox.push(i);
            notautobox.pop();
        }
        System.out.println(timer2.elapsedTime());
    }
}
