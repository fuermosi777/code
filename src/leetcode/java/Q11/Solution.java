

/**
 * Created by hao on 6/11/17.
 *
 * Thinking: optimized based on brute force method.
 */
public class Solution {
    public int maxArea(int[] height) {
        int maxArea = 0;
        int maxHeight = 0;
        int fullyUsed = height.length - 1;

        for (int i = 0; i < height.length - 1; i++) {
            if (height[i] > maxHeight) {
                boolean metHigherHeight = false;
                for (int j = fullyUsed; !metHigherHeight && j > i; j--) {
                    int area = area(i, j, height);
                    if (area > maxArea) {
                        maxArea = area;
                    }
                    if (height[j] >= height[i]) {
                        fullyUsed = j;
                        metHigherHeight = true;
                    }
                }
                maxHeight = height[i];
            }
        }

        return maxArea;
    }

    private int area(int i, int j, int[] height) {
        return (j - i) * Math.min(height[i], height[j]);
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.maxArea(new int[]{2,1,3,5,3,2,5}));
        System.out.println(s.maxArea(new int[]{1,2,3,4,5}));
        System.out.println(s.maxArea(new int[]{8,7,6,5,4,3,2,1,2,3,4,5,6,7,8}));
//        System.out.println(s.maxArea(new int[]{1,2,3,4,5,6,7,8,7,6,5,4,3,2,1}));
    }
}
