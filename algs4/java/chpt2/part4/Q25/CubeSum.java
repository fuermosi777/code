package algs4.chpt2.part4.Q25;

import algs4.chpt2.part4.A6.MinPQ;
/**
 * Created by hao on 6/30/16.
 */
public class CubeSum {
    private static Elem lastMin;
    private static class Elem implements Comparable<Elem> {
        public int i;
        public int j;
        private int sum;

        public Elem(int i, int j) {
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
        public String toString() {
            return i + " " + j + " " + sum;
        }
    }

    public static void print(int N) {
        MinPQ<Elem> pq = new MinPQ(N + 1);
        for (int i = 0; i <= N; i++) {
            Elem el = new Elem(i, 0);
            pq.insert(el);
        }

        while (!pq.isEmpty()) {
            Elem el = pq.delMin();
            if (lastMin != null && el.compareTo(lastMin) == 0) {
                if (el.i != el.j && el.j != lastMin.i && lastMin.i != lastMin.j && lastMin.j != el.i) {
                    System.out.println("Found same: " + el.toString() + " " + lastMin.toString());
                }
            }
            lastMin = el;
            System.out.println(el.toString());
//            System.out.println(pq.toString());

            if (el.j + 1 <= N) {
                Elem nl = new Elem(el.i, el.j + 1);
                pq.insert(nl);
            }
//            System.out.println(pq.toString());
//            System.out.println("---");
        }
    }

    public static void main(String[] args) {
        print(1000);
    }
}
