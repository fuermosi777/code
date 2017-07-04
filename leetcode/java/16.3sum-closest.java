/*
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest
 *
 * Medium (30.91%)
 * Total Accepted:    128173
 * Total Submissions: 414609
 * Testcase Example:  '[0,0,0]\n1'
 *
 * Given an array S of n integers, find three integers in S such that the sum
 * is closest to a given number, target. Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 
 * 
 * ⁠   For example, given array S = {-1 2 1 -4}, and target = 1.
 * 
 * ⁠   The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 */

/*
 * Thinking: Double pointer...
 */

import java.util.*;

public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int minSum = nums[0] + nums[1] + nums[2];
        int minDiff = Math.abs(minSum - target);

        if (nums.length == 3) {
            return minSum;
        }

        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if (sum == target) {
                    return sum;
                } else {
                    int diff = Math.abs(sum - target);
                    if (diff < minDiff) {
                        minDiff = diff;
                        minSum = sum;
                    }
                }

                if (sum > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return minSum;
    }
}
