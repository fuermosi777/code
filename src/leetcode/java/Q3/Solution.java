package Q3;

import java.util.HashMap;

/**
 * Created by hao on 7/22/16.
 */
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int pointer = 0, flag = 0;
        int N = s.length();
        int longest = 0;
        while (flag <= N - 1) {
            Character c = s.charAt(flag);
            Integer pos = map.get(c);
            if (pos == null) pos = -1;
            if (pos < pointer) {
                map.put(c, flag);
                int current = flag - pointer + 1;
                if (current > longest) {
                    longest = current;
                }
            } else {
                pointer = pos + 1;
                map.put(c, flag);
            }
            flag++;
        }
        return longest;
    }
}