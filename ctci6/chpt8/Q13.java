package ctci6.chpt8;

import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by hao on 10/19/16.
 */
public class Q13 {

    public static int tallest(ArrayList<Box> boxes) {
        Collections.sort(boxes);
        int height = 0;
        for (int i = 0; i < boxes.size(); i++) {
            height = Math.max(tallest(boxes, i), height);
        }
        return height;
    }

    private static int tallest(ArrayList<Box> boxes, int index) {
        Box box = boxes.get(index);
        int max = 0;
        for (int i = index + 1; i < boxes.size(); i++) {
            if (boxes.get(i).canBeAbove(box)) {
                int height = tallest(boxes, i);
                max = Math.max(max, height);
            }
        }
        max += box.height;
        return max;
    }

    public static class Box implements Comparable<Box> {
        public int width;
        public int height;
        public int depth;
        public Box(int w, int h, int d) {
            width = w;
            height = h;
            depth = d;
        }
        public int compareTo(Box that) {
            int cmp = this.height - that.height;
            if (cmp > 0) {
                return -1;
            } else if (cmp < 0) {
                return +1;
            } else {
                return 0;
            }
        }
        public boolean canBeAbove(Box bottom) {
            return this.width < bottom.width && this.height < bottom.height && this.depth < bottom.depth;
        }
    }



    public static void main(String[] args) {
        Box a = new Box(4, 4, 4);
        Box b = new Box(3, 3, 3);
        Box c = new Box(2, 2, 2);
        Box d = new Box(3, 6, 5);
        Box e = new Box(2, 1, 4);
        ArrayList<Box> boxes = new ArrayList<>();
        boxes.add(a);
        boxes.add(b);
        boxes.add(c);
        boxes.add(d);
        boxes.add(e);
        System.out.print(tallest(boxes));
    }
}
