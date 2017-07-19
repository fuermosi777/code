package algs4.chpt2.part4.Q30;

/**
 * Created by hao on 7/6/16.
 */
import algs4.chpt2.part4.A6.MinPQ;
import algs4.chpt2.part4.A6.MaxPQ;

public class MidPQ {
    private double mid;
    private MinPQ<Integer> minPQ;
    private MaxPQ<Integer> maxPQ;
    private int N = 0;

    public MidPQ(int maxN) {
        minPQ = new MinPQ<>(maxN / 2 + 1);
        maxPQ = new MaxPQ<>(maxN / 2 + 1);
    }

    public void insert(int item) {

        if (N == 0) {
            mid = (double) item;
        } else if (N % 2 == 0) {
            // even -> odd
            if (item <= mid) {
                maxPQ.insert(item);
            } else {
                minPQ.insert(item);
            }
            if (maxPQ.size() > minPQ.size()) {
                mid = maxPQ.delMax();
            } else {
                mid = minPQ.delMin();
            }
        } else {
            // odd -> even
            if (item <= mid) {
                maxPQ.insert(item);
                minPQ.insert((int) mid);
            } else {
                minPQ.insert(item);
                maxPQ.insert((int) mid);
            }
            mid = (double) (maxPQ.max() + minPQ.min()) / 2.0;
        }
        N++;
    }

    public double mid() {
        return mid;
    }

    public double delMid() {
        if (N % 2 == 0) {
            if (minPQ.min() == maxPQ.max()) {
                minPQ.delMin();
                maxPQ.delMax();
                N -= 2;
                return mid;
            } else {
                return mid;
            }
        } else {
            double m = mid;
            mid = (double) (maxPQ.max() + minPQ.min()) / 2.0;
            N--;
            return m;
        }
    }

    public static void main(String[] args) {
        MidPQ mpq = new MidPQ(8);
        mpq.insert(7);System.out.println(mpq.mid());
        mpq.insert(3);System.out.println(mpq.mid());
        mpq.insert(0);System.out.println(mpq.mid());
        mpq.insert(4);System.out.println(mpq.mid());
        mpq.insert(8);System.out.println(mpq.mid());
        mpq.insert(5);System.out.println(mpq.mid());
        mpq.insert(2);System.out.println(mpq.mid());
        mpq.insert(9);System.out.println(mpq.mid());
    }
}
