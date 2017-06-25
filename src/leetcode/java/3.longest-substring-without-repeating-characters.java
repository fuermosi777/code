import java.util.HashMap;

/**
 * Created by haol on 5/15/17.
 *
 * Thinking: iterate characters and use a marker to get the current longest, use a map to find duplicates.
 * If found one, store the current length and compare with the known longest. Start the iteration from the position
 * of the duplicate + 1
 */
public class Solution2 {
    public int lengthOfLongestSubstring(String s) {
        // edge cases
        if (s.length() == 0 || s.length() == 1) {
            return s.length();
        }

        int longestLength = 0;
        int currentLength = 0;
        HashMap<Character, Integer> map = new HashMap<>();
        int longestStartPos = 0;

        for (int i = 0; i < s.length(); i++) {
            if (currentLength == 0) {
                longestStartPos = i;
            }

            char currentChar = s.charAt(i);
            if (map.containsKey(currentChar)) {
                int duplicatePos = map.get(currentChar);
                for (int j = longestStartPos; j <= duplicatePos; j++) {
                    map.remove(s.charAt(j));
                }
                if (currentLength > longestLength) longestLength = currentLength;
                currentLength = currentLength - (duplicatePos - longestStartPos + 1) + 1;
                longestStartPos = duplicatePos + 1;
            } else {
                currentLength++;
            }
            map.put(currentChar, i);
        }

        if (currentLength > longestLength) longestLength = currentLength;

        return longestLength;
    }

    public static void main(String[] args) {
        Solution2 s = new Solution2();
        System.out.println(s.lengthOfLongestSubstring("")); // 0
        System.out.println(s.lengthOfLongestSubstring("a")); // 1
        System.out.println(s.lengthOfLongestSubstring("aa")); // 1
        System.out.println(s.lengthOfLongestSubstring("aaa")); // 1
        System.out.println(s.lengthOfLongestSubstring("abc")); // 3
        System.out.println(s.lengthOfLongestSubstring("abca")); // 3
        System.out.println(s.lengthOfLongestSubstring("babcdefbdac")); // 6
    }
}
