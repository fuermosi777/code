package Q9;

/**
 * Created by hao on 6/4/17.
 */
public class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        if (x == 0) return true;

        int r = 0;
        for (int i = x; i >= 1; i /= 10) {
            r = i % 10 + r * 10;
        }

        return r == x;
    }

    public static void main(String[] args) {
        Solution s = new Solution();

        System.out.println(s.isPalindrome(-123));
        System.out.println(s.isPalindrome(121));
        System.out.println(s.isPalindrome(12321));
        System.out.println(s.isPalindrome(0));
        System.out.println(s.isPalindrome(1234));
        System.out.println(s.isPalindrome(12342));
        System.out.println(s.isPalindrome(666));
    }
}
