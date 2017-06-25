import java.util.*;

/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum
 *
 * Medium (21.53%)
 * Total Accepted:    213458
 * Total Submissions: 991580
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a
 * + b + c = 0? Find all unique triplets in the array which gives the sum of
 * zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */
public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> res = new LinkedList<>();

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int a = map.containsKey(nums[i]) ? map.get(nums[i]) : 0;
            map.put(nums[i], a + 1);
        }

        Set<Integer> iSet = new HashSet<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (iSet.contains(nums[i])) continue;
            Set<Integer> jSet = new HashSet<>();
            for (int j = i + 1; j < nums.length - 1; j++) {
                if (jSet.contains(nums[j])) continue;
                int t = - nums[i] - nums[j];
                if ((t == nums[i] || t == nums[j]) && map.get(t) <= 1) continue;
                if (t == nums[i] && t == nums[j] && map.get(t) <= 2) continue;
                if (t < nums[j]) continue;
                if (map.containsKey(t)) {
                    List<Integer> l = new LinkedList<>();
                    l.add(nums[i]);
                    l.add(nums[j]);
                    l.add(t);
                    res.add(l);
                    jSet.add(nums[j]);
                }
            }
            iSet.add(nums[i]);
        }

        return res;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        s.threeSum(new int[]{-1,0,1,0}).stream().forEach((list) -> {
            System.out.println(Arrays.toString(list.toArray()));
        });
    }
}
