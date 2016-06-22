import java.lang.Math;

public class Euclid {
    public static int lcd(int p, int q) {
        System.out.println(p + " " + q);
        if (p * q < 0) return 0;
        if (p == 0) return q;
        if (q == 0) return p;
        int diff = Math.abs(p - q);
        int smaller = Math.min(p, q);
        return lcd(smaller, diff);
    }
    public static void main(String[] args) {
        System.out.println(lcd(1111111, 1234567));
    }
}