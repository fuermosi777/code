package Q17;

import java.util.*;
/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 *
 * Medium (33.94%)
 * Total Accepted:    149441
 * Total Submissions: 440200
 * Testcase Example:  '""'
 *
 * Given a digit string, return all possible letter combinations that the
 * number could represent.
 * 
 * 
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below.
 * 
 * 
 * 
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
public class Solution {
    public List<String> letterCombinations(String digits) {
        Map<Character, Character[]> map = new HashMap<>();
        map.put('2', new Character[]{'a', 'b', 'c'});
        map.put('3', new Character[]{'d', 'e', 'f'});
        map.put('4', new Character[]{'g', 'h', 'i'});
        map.put('5', new Character[]{'j', 'k', 'l'});
        map.put('6', new Character[]{'m', 'n', 'o'});
        map.put('7', new Character[]{'p', 'q', 'r', 's'});
        map.put('8', new Character[]{'t', 'u', 'v'});
        map.put('9', new Character[]{'w', 'x', 'y', 'z'});

        List<String> res = new ArrayList<>();
        for (int i = 0; i < digits.length(); i++) {
            char ch = digits.charAt(i);
            if (ch == '1' || ch == '0') {
                return new ArrayList<>();
            }

            List<String> newRes = new ArrayList<>();
            Character[] next = map.get(ch);
            if (res.size() == 0) {
                for (char c : next) {
                    newRes.add(Character.toString(c));
                }
            } else {
                for (String r : res) {
                    for (char c : next) {
                        newRes.add(r + c);
                    }

                }
            }
            res = newRes;
        }

        return res;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.letterCombinations("1012").toString());
    }
}
