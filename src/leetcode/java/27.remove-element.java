public class Solution {
    public int removeElement(int[] nums, int val) {
        if (nums.length == 0) return 0;
        int i = 0, j = nums.length - 1;
        while (i < nums.length) {
            if (nums[i] == val) {
                while (j > i && nums[j] == val) {
                    j--;
                }
                swap(nums, i, j);
                if (j == i) break;
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
