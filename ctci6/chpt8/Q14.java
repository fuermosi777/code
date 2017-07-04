package ctci6.chpt8;

/**
 * Created by hao on 10/20/16.
 */
public class Q14 {

    // TODO: fix
    public static int countEval(String exp, boolean symbol) {
        if (exp.length() < 3) return -1;
        if (exp.length() == 3) {
            if (val(exp) == symbol) return 1;
            else return 0;
        }

        int ct = 0;
        for (int i = 1; i <= exp.length() - 2; i += 2) {
            String left = exp.substring(0, i);
            String right = exp.substring(i + 1, exp.length());
            if (left.length() >= 3) {
                ct += countEval(left, symbol);
            }
            if (right.length() >= 3) {
                ct += countEval(right, symbol);
            }
        }


        return ct;
    }
    public static boolean val(String exp) {
        if (exp.length() > 3) {
            throw new Error("The exp must be something like 0|1 or 1^0");
        }
        int a = exp.charAt(0) == '0' ? 0 : 1;
        char op = exp.charAt(1);
        int b = exp.charAt(2) == '0' ? 0 : 1;
        int res = 0;
        if (op == '&') {
            res = a & b;
        }
        if (op == '|') {
            res = a | b;
        }
        if (op == '^') {
            res = a ^ b;
        }
        return res == 1 ? true : false;
    }
    public static void main(String[] args) {
        System.out.println(countEval("0&0&0&1^1|0", true));
//        System.out.println(val("1^0"));
    }
}
