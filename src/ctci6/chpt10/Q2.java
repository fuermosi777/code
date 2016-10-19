package ctci6.chpt10;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by hao on 10/20/16.
 */
public class Q2 {

    public static class StringComparator implements Comparator<String> {

        private String sortString(String s) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            return new String(chars);
        }

        public int compare(String s1, String s2) {
            if (sortString(s1).equals(sortString(s2))) {
                return 0;
            } else {
                return sortString(s1).compareTo(sortString(s2));
            }
        }
    }

    public static void sort(String[] words) {
        Arrays.sort(words, new StringComparator());
    }

    public static void main(String[] args) {
        String[] words = {"a", "ba", "bca", "cab", "ab", "b", "abc"};
        sort(words);
        System.out.println(Arrays.toString(words));
    }
}
