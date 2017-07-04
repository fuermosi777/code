import java.util.*;

public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0 || nums.length == 1) return nums.length;
        int i = 1, j = 1;
        int d = nums[0]; // duplicate
        while (i < nums.length && j < nums.length) {
            if (nums[i] <= nums[i - 1]) {
                if (j <= i) j = i + 1;
                if (nums[i] > d) d = nums[i];
                while (j < nums.length && nums[j] <= d) {
                    j++;
                }
                if (j < nums.length) {
                    d = nums[j];
                    swap(nums, i, j);
                } else {
                    break;
                }
            }
            i++;
        }

        return i;
    }
    private void swap(int[] nums, int i, int j) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
}
