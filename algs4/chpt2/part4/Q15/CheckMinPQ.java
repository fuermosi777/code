package algs4.chpt2.part4.Q15;

/**
 * Created by hao on 6/30/16.
 */
public class CheckMinPQ<Item extends Comparable<Item>> {

    private boolean check = true;

    public CheckMinPQ(Item[] pq) {
        for (int i = 2; i <= pq.length; i++) {
            if (pq[i] == null) break;
            if (pq[i].compareTo(pq[i / 2]) < 0) {
                check = false;
                break;
            }
        }
    }
    public boolean isMinPQ() {
        return check;
    }
    public static void main(String[] args) {
        Integer[] a = {null, 1, 2, 3, 4, 5, 6, 2, null, null};
        CheckMinPQ c = new CheckMinPQ(a);
        System.out.print(c.isMinPQ());
    }
}
