package ctci6.chpt8;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Stack;

/**
 * Created by hao on 10/18/16.
 */
public class Q9 {
    public static ArrayList<String> parens(int N) {
        HashSet<String> set = new HashSet<>();
        return parens(N, set);
    }

    private static ArrayList<String> insertInto(String origin) {
        ArrayList<String> res = new ArrayList<>();
        Stack<String> mark = new Stack<>();
        ArrayList<Integer> indices = new ArrayList<>();
        for (int i = 0; i < origin.length(); i++) {
            if (origin.charAt(i) == '(') {
                mark.push("(");
            }
            if (origin.charAt(i) == ')') {
                mark.pop();
            }
            if (mark.isEmpty()) {
                indices.add(i);
            }
        }
        res.add("()" + origin);
        for (int i : indices) {
            res.add(origin.substring(0, i + 1) + "()" + origin.substring(i + 1));
        }
        return res;
    }

    private static String insertOutside(String origin) {
        return "(" + origin + ")";
    }

    private static ArrayList<String> parens(int N, HashSet<String> set) {
        ArrayList<String> parens = new ArrayList<>();
        if (N == 1) {
            set.add("()");
            parens.add("()");
            return parens;
        } else {
            for (String p : parens(N - 1, set)) {
                for (String pInsert : insertInto(p)) {
                    if (!set.contains(pInsert)) {
                        parens.add(pInsert);
                        set.add(pInsert);
                    }
                }
                if (!set.contains(insertOutside(p))) {
                    parens.add(insertOutside(p));
                    set.add(insertOutside(p));
                }
            }
        }
        return parens;
    }

    public static void main(String[] args) {
        System.out.println(parens(4).toString());
//        System.out.println(insertInto("()(())").toString());
    }
}
