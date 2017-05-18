package Q4;

/**
 * Created by Hao on 5/16/17.
 *
 * Thinking 1: Merge two arrays into one, and get median of that one. However the time complexity is O(m + n)
 *
 * Thinking 2: Get median of each array, compare, get the second half of the smaller one and the first half of the larger one.
 * Do a recursion. Unfortunately, it is WRONG!
 *
 * Thinking 3: Consider that the count of numbers that larger than the median must be (m + n) / 2...
 *
 * SUCCESS! This solution beats 88.26%!!
 *
 */
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int half = (nums1.length + nums2.length) / 2;
        if ((nums1.length + nums2.length) % 2 == 0) {
            int leftMedian = findMedianByHalf(nums1, nums2, half );
            int rightMedian = findMedianByHalf(nums1, nums2, half - 1);
            return (float) (leftMedian + rightMedian) / 2;
        } else {
            return findMedianByHalf(nums1, nums2, half);
        }
    }

    private int findMedianByHalf(int[] nums1, int[] nums2, int half) {
        int result = 0;
        int midPos = findMedianPosByRightHalf(nums1, nums2, half);
        if (midPos == -1) {
            midPos = findMedianPosByRightHalf(nums2, nums1, half);
            result = nums2[midPos];
        } else {
            result = nums1[midPos];
        }
        return result;
    }

    private int findMedianPosByRightHalf(int[] target, int[] other, int halfCount) {
        int lo = 0;
        int hi = target.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            int targetHalfCount = target.length - 1 - mid;
            int restCount = halfCount - targetHalfCount;
            if (restCount < 0) {
                lo = mid + 1;
            } else if (restCount == 0) {
                if (other.length != 0 && other[other.length - 1] > target[mid]) {
                    lo = mid + 1;
                } else {
                    return mid;
                }
            } else if (other.length == 0) {
                hi = mid - 1;
            } else {
                int otherRightBoundPos = other.length - restCount;
                int otherLeftBoundPos = otherRightBoundPos - 1;
                if (otherRightBoundPos < 0) {
                    hi = mid - 1;
                } else if (target[mid] > other[otherRightBoundPos]) {
                    hi = mid - 1;
                } else if (otherLeftBoundPos < 0) {
                    return mid;
                } else if (target[mid] < other[otherLeftBoundPos]) {
                    lo = mid + 1;
                } else {
                    return mid;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        int[] nums1 = {2,3};
        int[] nums2 = {1,2,3,4,5,6,7,8,9};
        System.out.println(s.findMedianSortedArrays(nums1, nums2));
    }
}
