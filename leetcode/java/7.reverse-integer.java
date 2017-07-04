/**
 * Created by haol on 5/25/17.
 */
public class Solution {
    public int reverse(int x) {
        String max32String = "2147483647";
        String s = x + "";
        String sign = "";
        int endPos = 0;
        if (s.charAt(0) == '-') {
            sign = "-";
            endPos = 1;
        }

        String r = "";
        for (int i = s.length() - 1; i >= endPos; i--) {
            r += s.charAt(i);
        }

        int rLength = r.length();
        if (rLength > max32String.length()) return 0;
        if (rLength == max32String.length()) {
            for (int i = 0; i < rLength; i++) {
                int compare =  Integer.parseInt(r.charAt(i) + "") - Integer.parseInt(max32String.charAt(i) + "");
                if (compare == 0) {
                    continue;
                } else if (compare > 0) {
                    return 0;
                } else {
                    break;
                }
            }
        }

        r = sign + r;
        return Integer.parseInt(r);
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.reverse(-1463847412));
    }
}