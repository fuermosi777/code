package ctci6.chpt11;

/**
 * Created by hao on 10/21/16.
 */
public class Q1 {

    public static class UnsignedInteger {
        private int a;
        public UnsignedInteger() {
            a = 1;
        }
        public void set(int b) {
            if (b < 0) a = -b;
            else a = b;
        }
        public int get() {
            return a;
        }
    }

    public static void main(String[] args) {
        UnsignedInteger i = new UnsignedInteger();
        for (i.set(100); i.get() >= 0; i.set(i.get() - 1)) {
            System.out.println(i.get());
        }
    }
}
