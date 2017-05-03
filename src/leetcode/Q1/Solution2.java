import Java.util.Arrays;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            int toFind = target - nums[i];
            Integer findInteger = map.get(toFind);
            int find = findInteger == null ? -1 : findInteger.intValue();
            if (find >= 0 && find != i) {
                int[] res = {i, find};
                return res;
            }
        }
        
        int[] notFound = {0, 0};
        return notFound;
    }
} 