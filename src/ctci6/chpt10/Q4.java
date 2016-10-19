package ctci6.chpt10;

import java.util.ArrayList;

/**
 * Created by hao on 10/20/16.
 */
public class Q4 {
    public static int search(Listy list, int val) {
        if (list.get(0) == val) return 0;
        int last = 0;
        int i = 1;
        while (last <= i) {
            if (list.get(i) == -1 || list.get(i) > val) {
                i = last + (i - last) / 2;
                continue;
            }
            if (list.get(i) == val) return i;
            if (list.get(i) < val) {
                last = i;
                i = i * 2;
            }
        }

        return -1;
    }

    public static class Listy {
        ArrayList<Integer> data;
        public Listy() {
            data = new ArrayList<>();
        }
        public int get(int idx) {
            if (idx > data.size() - 1) return -1;
            else return data.get(idx);
        }
        public void add(int val) {
            data.add(val);
        }
    }

    public static void main(String[] args) {
        Listy list = new Listy();
        list.add(1);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(7);
        list.add(9);
        list.add(10);
        list.add(11);
        list.add(12);
        list.add(15);
        System.out.println(search(list, 15));
    }
}
