/*
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer
 *
 * Testcase Example:  '"DCXXI"'
 *
 * Given a roman numeral, convert it to an integer.
 * 
 * Input is guaranteed to be within the range from 1 to 3999.
 */
public class Solution {
    public int romanToInt(String s) {
        String a = "", b = "", c = "", d = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (i == 0) {
                if (ch == 'M') {
                    a += ch;
                } else if (ch == 'C' || ch == 'D') {
                    b += ch;
                } else if (ch == 'X' || ch == 'L') {
                    c += ch;
                } else {
                    d += ch;
                }
            } else if (ch == 'M') {
                if (s.charAt(i - 1) != 'C') {
                    a += ch;
                } else {
                    b += ch;
                }
            } else if (ch == 'C' || ch == 'D') {
                if (s.charAt(i - 1) != 'X') {
                    b += ch;
                } else {
                    c += ch;
                }
            } else if (ch == 'X' || ch == 'L') {
                if (s.charAt(i - 1) != 'I') {
                    c += ch;
                } else {
                    d += ch;
                }
            } else {
                d += ch;
            }
        }

        return d2D(a, 'M', '0', '0', 3) +
                d2D(b, 'C', 'D', 'M', 2) +
                d2D(c, 'X', 'L', 'C', 1) +
                d2D(d, 'I', 'V', 'X', 0);
    }

    private int d2D(String roman, char one, char five, char ten, int pos) {
        // digit to decimal
        if (roman.equals("")) return 0;
        int num = 0;
        if (roman.charAt(roman.length() - 1) == ten) {
            num = 9;
        } else if (roman.charAt(roman.length() - 1) == five && roman.length() == 2) {
            num = 4;
        } else {
            num = countOccur(roman, one) + countOccur(roman, five) * 5;
        }
        return num * (int) Math.pow(10, pos);
    }

    private int countOccur(String roman, char x) {
        return roman.length() - roman.replace(Character.toString(x), "").length();
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.romanToInt("MMMDLXXXVI"));
    }
}
