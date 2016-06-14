import java.util.Arrays;
import java.util.Random;

public class RollDice {
    
    private int SIDES = 6;
    
    public RollDice() {
    }
    
    public double[] calculateDist() {
        double[] dist = new double[2*SIDES + 1];
        for (int i = 1; i <= SIDES; i++) {
            for (int j = 1; j <= SIDES; j++) {
                dist[i + j] += 1.0;
            }
        }
        for (int k = 2; k <= 2*SIDES; k++) {
            dist[k] /= 36.0;
        }
        return dist;
    }
    public double[] runExperiment() {
        Random rand = new Random();
        int N = 10000;
        int[] times = new int[2*SIDES + 1];
        double[] dist = new double[2*SIDES + 1];
        for (int i = 1; i <= N; i++) {
            int first = rand.nextInt((6 - 1) + 1) + 1;
            int second = rand.nextInt((6 - 1) + 1) + 1;
            times[first + second] += 1;
        }
        for (int i = 1; i <= 2*SIDES; i++) {
            dist[i] = times[i] / (double) N;
        }
        return dist;
    }
    public static void main(String[] args) {
        RollDice rd = new RollDice();
        System.out.println(Arrays.toString(rd.calculateDist()));
        System.out.println(Arrays.toString(rd.runExperiment()));
    }
}