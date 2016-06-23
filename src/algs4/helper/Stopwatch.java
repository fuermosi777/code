package algs4.helper;

/**
 * Created by hao on 6/22/16.
 */
public class Stopwatch {
    private final long start;
    public Stopwatch() {
        start = System.currentTimeMillis();
    }
    public double elapsedTime() {
        long now = System.currentTimeMillis();
        return (now - start) / 1000.0;
    }
}
