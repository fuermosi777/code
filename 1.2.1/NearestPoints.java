import edu.princeton.cs.algs4.StdDraw;
import java.lang.Math;
import java.util.Random;

public class NearestPoints {
    private static class Point {
        double x;
        double y;
        public Point(double a, double b) {
            x = a;
            y = b;
        }
    }
    public static double getDistance(Point a, Point b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2.0) + Math.pow(a.y - b.y, 2.0));
    }
    public static void main(String[] args) {
        int N = 10;
        Random gen = new Random();
        
        Point[] points = new Point[N];
        for (int i = 0; i < N; i++) {
            double x = gen.nextDouble();
            double y = gen.nextDouble();
            Point p = new Point(x, y);
            points[i] = p;
        }
        double min = 2.0;
        for (int i = 0; i < N; i++) {
            for (int j = i + 1; j < N; j++) {
                double d = getDistance(points[i], points[j]);
                min = min > d ? d : min;
                System.out.println(d);
            }
        }
        System.out.println("min:" + min);
    }
}