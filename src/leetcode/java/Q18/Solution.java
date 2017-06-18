package Q18;

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
public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);

        List<List<Integer>> res = new LinkedList<>();

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int a = map.containsKey(nums[i]) ? map.get(nums[i]) : 0;
            map.put(nums[i], a + 1);
        }

        Set<Integer> iSet = new HashSet<>();
        for (int i = 0; i < nums.length - 3; i++) {
            if (iSet.contains(nums[i])) continue;
            Set<Integer> jSet = new HashSet<>();

            for (int j = i + 1; j < nums.length - 2; j++) {
                if (jSet.contains(nums[j])) continue;
                Set<Integer> kSet = new HashSet<>();

                for (int k = j + 1; k < nums.length - 1; k++) {
                    if (kSet.contains(nums[k])) continue;
                    int t = target - nums[i] - nums[j] - nums[k];

                    int n = 0;
                    if (map.containsKey(t)) n = map.get(t);
                    if (t == nums[i]) n--;
                    if (t == nums[j]) n--;
                    if (t == nums[k]) n--;
                    if (n <= 0) continue;
                    if (t < nums[k]) continue;
                    if (map.containsKey(t)) {
                        List<Integer> l = new LinkedList<>();
                        l.add(nums[i]);
                        l.add(nums[j]);
                        l.add(nums[k]);
                        l.add(t);
                        res.add(l);

                        kSet.add(nums[k]);
                    }
                }
                jSet.add(nums[j]);
            }
            iSet.add(nums[i]);
        }

        return res;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        s.fourSum(new int[]{1, 0, -1, 0, -2, 2}, -1).stream().forEach((list) -> {
            System.out.println(Arrays.toString(list.toArray()));
        });
    }
}
