public class Binomial {
    public static double binomial(int N, int k, double p) {
        System.out.println(N + " " + k);
        if (N == 0 && k == 0) return 1.0;
        if (N < 0 || k < 0) return 0.0;
        return (1.0 - p) * binomial(N-1, k, p) + p * binomial(N-1, k-1, p);
    }
    public static void main(String[] args) {
        System.out.println(binomial(100, 50, 0));
    }
}