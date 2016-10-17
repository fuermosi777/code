package ctci6.chpt8;

import java.util.ArrayList;

/**
 * Created by hao on 10/18/16.
 */
public class Q7 {
    public static ArrayList<String> permutations(String s) {
        ArrayList<String> pers = new ArrayList<>();
        if (s.length() == 1) {
            pers.add(s);
        } else {
            String last = s.substring(s.length() - 1, s.length());
            String sWithoutLast = s.substring(0, s.length() - 1);
            for (String p : permutations(sWithoutLast)) {
                for (int i = 0; i < s.length(); i++) {
                    pers.add(p.substring(0, i) + last + p.substring(i, s.length() - 1));
                }
            }

        }
        return pers;
    }

    public static void main(String[] args) {
        System.out.print(permutations("chad").toString());
    }
}
