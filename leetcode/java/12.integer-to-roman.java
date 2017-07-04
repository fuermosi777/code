/*
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman
 *
 * Given an integer, convert it to a roman numeral.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 */
public class Solution {
    public String intToRoman(int num) {
        int a = num / 1000;
        num = num - a * 1000;
        int b = num / 100;
        num = num - b * 100;
        int c = num / 10;
        num = num - c * 10;
        int d = num;

        String roman = get("M", "", "", a) +
                get("C", "D", "M", b) +
                get("X", "L", "C", c) +
                get("I", "V", "X", d);

        return roman;
    }

    private String get(String one, String five, String ten, int a) {
        if (a < 4) {
            return accu(one, a);
        } else if (a == 4) {
            return one + five;
        } else if (a < 9) {
            return five + accu(one, a - 5);
        } else {
            return one + ten;
        }
    }

    private String accu(String sym, int ct) {
        String res = "";
        for (int i = 0; i < ct; i++) {
            res += sym;
        }
        return res;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.intToRoman(1));
        System.out.println(s.intToRoman(2));
        System.out.println(s.intToRoman(5));
        System.out.println(s.intToRoman(10));
        System.out.println(s.intToRoman(25));
        System.out.println(s.intToRoman(68));
        System.out.println(s.intToRoman(1500));
        System.out.println(s.intToRoman(88));
        System.out.println(s.intToRoman(1800));
    }
}
