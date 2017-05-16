package Q4;

import java.util.Arrays;

/**
 * Created by haol on 5/16/17.
 *
 * Merge two arrays into one, and get median of that one.
 *
 */
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] merged = new int[nums1.length + nums2.length];
        int i = 0;
        int j = 0;
        int k = 0;
        while (i < nums1.length + nums2.length) {
            if (j >= nums1.length) {
                merged[i] = nums2[k];
                k++;
            } else if (k >= nums2.length) {
                merged[i] = nums1[j];
                j++;
            } else if (nums1[j] <= nums2[k]) {
                merged[i] = nums1[j];
                j++;
            } else {
                merged[i] = nums2[k];
                k++;
            }
            i++;
        }
        if ((nums1.length + nums2.length) % 2 == 0) {

        } else {

        }
        return 0.0;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums1 = {};
        int[] nums2 = {1, 5};
        s.findMedianSortedArrays(nums1, nums2);
    }
}
