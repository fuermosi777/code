package Q8;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Created by hao on 6/4/17.
 *
 * Something to consider:
 *
 * empty string
 * string with spaces
 * string with "-"
 * string with "+"
 * string larger than 2^31 - 1
 * string smaller than -2^31
 * string without number
 * string mixed number and other stuff
 */
public class Solution {
    public int myAtoi(String str) {
        str = str.trim();

        if (str.equals("")) return 0;

        boolean isNegative = true;
        if (str.charAt(0) == '-') {
            str = str.substring(1);
        } else if (str.charAt(0) == '+') {
            isNegative = false;
            str = str.substring(1);
        } else {
            isNegative = false;
        }

        Map<Character, Integer> numDict = new HashMap<>();
        numDict.put('0', 0);
        numDict.put('1', 1);
        numDict.put('2', 2);
        numDict.put('3', 3);
        numDict.put('4', 4);
        numDict.put('5', 5);
        numDict.put('6', 6);
        numDict.put('7', 7);
        numDict.put('8', 8);
        numDict.put('9', 9);

        String filtered = "";
        for (int i = 0; i < str.length(); i++) {
            if (parseChar(numDict, str.charAt(i)) == -1)  break;
            filtered += str.charAt(i);
        }
        int fLength = filtered.length();

        if (filtered.equals("")) return 0;
        int res = 0;
        for (int i = 0; i < fLength; i++) {
            res -= numDict.get(filtered.charAt(i)) * Math.pow(10, fLength - i - 1);
        }

        if (!isNegative) {
            if (res == Integer.MIN_VALUE) {
                return Integer.MAX_VALUE;
            }
            res = -res;
        }

        return res;
    }

    private int parseChar(Map<Character, Integer> dict, char ch) {
        if (dict.containsKey(ch)) {
            return dict.get(ch);
        }

        return -1;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.myAtoi(""));
        System.out.println(s.myAtoi("+1"));
        System.out.println(s.myAtoi("a"));
        System.out.println(s.myAtoi("-2"));
        System.out.println(s.myAtoi("1234"));
        System.out.println(s.myAtoi("1234566789912"));
        System.out.println(s.myAtoi("aa1122bbbb"));
        System.out.println(s.myAtoi("-aaabbbas122312"));
        System.out.println(s.myAtoi("123aawasd21123"));
        System.out.println(s.myAtoi("-123aawasd21123"));
        System.out.println(s.myAtoi("   123"));
        System.out.println(s.myAtoi("2147483647"));
        System.out.println(s.myAtoi("2147483648"));
        System.out.println(s.myAtoi("-2147483648"));
        System.out.println(s.myAtoi("-2147483649"));
    }
}
