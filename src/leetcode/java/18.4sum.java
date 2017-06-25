import java.util.*;

/*
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum
 *
 * Medium (26.43%)
 * Total Accepted:    116803
 * Total Submissions: 441969
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such
 * that a + b + c + d = target? Find all unique quadruplets in the array which
 * gives the sum of target.
 * 
 * Note: The solution set must not contain duplicate quadruplets.
 * 
 * 
 * 
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 */

class Couple {
    public int first;
    public int second;

    public Couple(int first, int second) {
        this.first = first;
        this.second = second;
    }
}

public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);

        List<List<Integer>> res = new ArrayList<>();

        Map<Integer, List<Couple>> coupleMap = new HashMap<>();
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                int sum = nums[i] + nums[j];
                List<Couple> cs = new ArrayList<>();
                if (coupleMap.containsKey(sum)) {
                    cs = coupleMap.get(sum);
                }
                Couple c = new Couple(nums[i], nums[j]);
                cs.add(c);
                coupleMap.put(sum, cs);
            }
        }

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int n = 0;
            if (map.containsKey(nums[i])) {
                n = map.get(nums[i]);
            }
            map.put(nums[i], n + 1);
        }

        for (int i = 0; i < nums.length - 3; i++) {
            for (int j = i + 1; j < nums.length - 2; j++) {
                int t = target - nums[i] - nums[j];

                List<Couple> cs = null;
                if (coupleMap.containsKey(t)) {
                    cs = coupleMap.get(t);
                }
                if (cs == null) continue;

                for (Couple c : cs) {
                    int firstCt = 0;
                    int secondCt = 0;
                    boolean isSame = false;
                    int unifiedCt = 0;
                    if (map.containsKey(c.first)) firstCt = map.get(c.first);
                    if (map.containsKey(c.second)) secondCt = map.get(c.second);
                    if (c.first == c.second) isSame = true; unifiedCt = firstCt;

                    if (c.first == nums[i]) firstCt--;
                    if (c.first == nums[j]) firstCt--;
                    if (c.second == nums[i]) secondCt--;
                    if (c.second == nums[j]) secondCt--;
                    if (isSame && c.first == nums[i]) unifiedCt--;
                    if (isSame && c.first == nums[j]) unifiedCt--;
                    if (firstCt <= 0 || secondCt <= 0) continue;
                    if (isSame && unifiedCt <= 1) continue;

                    if (c.first < nums[j] || c.second < nums[j]) continue;

                    List<Integer> l = new LinkedList<>();
                    l.add(nums[i]);
                    l.add(nums[j]);
                    l.add(c.first);
                    l.add(c.second);
                    res.add(l);
                }
            }
        }

        Set<String> set = new HashSet<>();
        List<List<Integer>> newRes = new ArrayList<>();
        for (List<Integer> item : res) {
            String s = Integer.toString(item.get(0)) +
                    Integer.toString(item.get(1)) +
                    Integer.toString(item.get(2)) +
                    Integer.toString(item.get(3));
            if (!set.contains(s)) {
                newRes.add(item);
                set.add(s);
            }
        }


        return newRes;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        s.fourSum(new int[]{2,0,3,0,1,2,4}, 7).stream().forEach((list) -> {
            System.out.println(Arrays.toString(list.toArray()));
        });
    }
}
