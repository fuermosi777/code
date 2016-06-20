import java.lang.Math;

public class Rational {

    public int a;
    public int b;

    private void simplify() {
        // euclid algs
        int x = a;
        int y = b;
        int gcd = 1;
        while (true) {
            if (x == 1 || y == 1) break;
            if (x == 0) {
                gcd = y;
                break;
            }
            if (y == 0) {
                gcd = x;
                break;
            }
            int bigger = Math.max(x, y);
            int smaller = Math.min(x, y);
            int diff = Math.abs(bigger - smaller);
            if (x == bigger) {
                x = diff;
            } else {
                y = diff;
            }
        }
        a /= gcd;
        b /= gcd;
    }

    public Rational(int numberator, int denominator) {
        a = numberator;
        b = denominator;
        simplify();
    }

    public Rational plus(Rational x) {
        int i = a * x.b + b * x.a;
        int j = b * x.b;
        Rational r = new Rational(i, j);
        return r;
    }

    public Rational times(Rational x) {
        int i = a * x.a;
        int j = b * x.b;
        Rational r = new Rational(i, j);
        return r;
    }

    public static void main(String[] args) {
        Rational r = new Rational(6, 8);
        Rational r2 = new Rational(2, 4);
        Rational r3 = r.plus(r2);
        Rational r4 = r.times(r2);
        System.out.println(r.a + "/" + r.b);
        System.out.println("r + r2 = " + r3.a + "/" + r3.b);
        System.out.println("r x r2 = " + r4.a + "/" + r4.b);
    }
}