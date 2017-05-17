package Q4;

import java.util.Arrays;

/**
 * Created by haol on 5/16/17.
 *
 * Thinking 1: Merge two arrays into one, and get median of that one. However the time complexity is O(m + n)
 *
 * Thinking 2: Get median of each array, compare, get the second half of the smaller one and the first half of the larger one.
 * Do a recursion. Unfortunately, it is WRONG!
 *
 * Thinking 3: get median of nums1, assume it is the median of both, try to find it in nums2, if the count of nums2 larger + count of nums1 == m/2 + n/2,
 * then it is the median, otherwise change the median towards directions.
 *
 */
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        return findMedianSortedArrays(nums1, 0, nums1.length -1, nums2, 0, nums2.length - 1);
    }

    private double findMedianSortedArrays(int[] nums1, int lo1, int hi1, int[] nums2, int lo2, int hi2) {
        int length1 = hi1 - lo1 + 1;
        int length2 = hi2 - lo2 + 1;
        System.out.println(length1 + " " + length2);
        if (length1 == 0) return findMedianSortedArray(nums2, lo2, hi2);
        if (length2 == 0) return findMedianSortedArray(nums1, lo1, hi1);
        if (length1 == 1 && length2 == 1) return (double)(nums1[0] + nums2[0]) / 2;
        if (length1 + length2 == 3) {
            int[] singleNums = length1 < length2 ? nums1 : nums2;
            int[] doubleNums = singleNums == nums1 ? nums2 : nums1;
            if (singleNums[0] <= doubleNums[0]) {
                return doubleNums[0];
            } else if (singleNums[0] <= doubleNums[1]) {
                return doubleNums[1];
            } else {
                return singleNums[0];
            }
        } else {
            double m1 = findMedianSortedArray(nums1, lo1, hi1);
            double m2 = findMedianSortedArray(nums2, lo2, hi2);
            if (m1 < m2) {
                int start1 = length1 % 2 == 0 ? lo1 + (hi1 - lo1) / 2 + 1 : lo1 + (hi1 - lo1) / 2;
                return findMedianSortedArrays(nums1, start1, hi1, nums2, lo2, lo2 + (hi2 - lo2) / 2);
            } else if (m1 > m2) {
                int start2 = length2 % 2 == 0 ? lo2 + (hi2 - lo2) / 2 + 1 : lo2 + (hi2 - lo2) / 2;
                return findMedianSortedArrays(nums1, lo1, lo1 + (hi1 - lo1) / 2, nums2, start2, hi2);
            } else {
                return m1;
            }
        }
    }

    private double findMedianSortedArray(int[] nums, int lo, int hi) {
        int length = hi - lo + 1;
        if (length % 2 == 0) {
            return (double)(nums[(hi - lo) / 2 + lo] + nums[(hi - lo) / 2 + lo + 1]) / 2;
        } else {
            return nums[(hi - lo) / 2 + lo];
        }
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums1 = {0,1,1};
        int[] nums2 = {0,3,6m};
        System.out.println(s.findMedianSortedArrays(nums1, nums2));
    }
}
