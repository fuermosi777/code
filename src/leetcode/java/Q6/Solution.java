package Q6;

/**
 * Created by hao on 5/24/17.
 */
public class Solution {
    public String convert(String s, int numRows) {
        if (numRows <= 0) return "";
        if (s.length() <= 1) return s;
        if (numRows == 1 || numRows >= s.length()) return s;
        String res = "";
        for (int i = 0; i < numRows; i++) {
            for (int j = i; ; ) {
                int d1 = 2 * numRows - 2 * i - 2;
                int d2 = 2 * i;

                if (d1 > 0) res += s.charAt(j);
                j += d1;
                if (j >= s.length()) break;

                if (d2 > 0) res += s.charAt(j);
                j += d2;
                if (j >= s.length()) break;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.convert("PA", 2));
    }
}

/*
    PYAIHRN
    APLSIIG
 */

/*
    P A H N
    APLSIIG
    Y I R
 */

/*
    P  I  N
    A LS IG
    YA HR
    P  I
 */