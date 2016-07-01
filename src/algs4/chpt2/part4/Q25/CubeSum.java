package algs4.chpt2.part4.Q25;

import algs4.chpt2.part4.A6.MinPQ;
/**
 * Created by hao on 6/30/16.
 */
public class CubeSum {

    private static class Elem implements Comparable {
        private int i;
        private int j;
        private int sum;
        public Elem(i, j) {
            this.i = i;
            this.j = j;
            this.sum = i * i * i + j * j * j;
        }
        public int compareTo(Elem el) {
            if (sum < el.sum) {
                return -1;
            } else if (sum > el.sum) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    public static void print(int N) {
        MinPQ pq = new MinPQ(N);
    }

    public static void main(String[] args) {

    }
}
