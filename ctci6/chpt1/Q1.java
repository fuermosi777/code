package ctci6.chpt1;

import java.util.Arrays;

/**
 * Created by hao on 9/16/16.
 */
public class Q1 {

    public static boolean isUnique(String str) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        for (int i = 1; i < chars.length; i++) {
            if (chars[i] == chars[i - 1]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        assert isUnique("wtf");
        System.out.println(isUnique("wwf"));
    }
}
