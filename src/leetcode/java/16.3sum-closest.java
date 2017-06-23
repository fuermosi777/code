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

import java.util.*;

public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        if (nums.length == 3) {
            return nums[0] + nums[1] + nums[2];
        }

        Arrays.sort(nums);

        int minDiff = -1;
        int minSum = -1;

        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                int t = target - nums[i] - nums[j];
                int find1 = bs(nums, 0, i - 1, t);
                int find2 = bs(nums, i + 1, j - 1, t);
                int find3 = bs(nums, j + 1, nums.length - 1, t);
                int find = findClosestAmongThree(find1, find2, find3, t);

                int sum = nums[i] + nums[j] + find;

                int diff = Math.abs(target - sum);
                if (minDiff == -1 || diff < minDiff) {
                    minSum = sum;
                    minDiff = diff;
                }
            }
        }

        return minSum;
    }
    private int bs(int[] nums, int lo, int hi, int s) {
        while (lo < hi) {
            if (hi - lo == 2 || hi - lo == 1) {
                return findClosestAmongThree(nums[lo], nums[lo + 1], nums[hi], s);
            }

            int mid = lo + (hi - lo) / 2;
            if (nums[mid] == s) {
                return nums[mid];
            } else if (nums[mid] > s) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        if (lo == hi) return nums[lo];

        return Integer.MAX_VALUE;
    }
    private int findClosestAmongThree(int f1, int f2, int f3, int t) {
        int max = Integer.MAX_VALUE;
        int d1 = f1 == max ? max : f1 - t;
        int d2 = f2 == max ? max : f2 - t;
        int d3 = f3 == max ? max : f3 - t;

        int min = Math.min(Math.min(Math.abs(d1), Math.abs(d2)), Math.abs(d3));
        if (min == Math.abs(d1)) {
            return f1;
        } else if (min == Math.abs(d2)) {
            return f2;
        } else {
            return f3;
        }
    }
}
