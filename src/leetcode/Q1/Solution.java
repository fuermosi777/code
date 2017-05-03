package leetcode.Q1;

/**
 * Created by hao on 7/21/16.
 */
public class Solution {

    private void exch(int[] a, int k, int j) {
        int temp = a[k];
        a[k] = a[j];
        a[j] = temp;
    }

    private void sort(int[] a) {
        partition(a, 0, a.length - 1);
    }

    private void partition(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int v = a[lo];
        int i = lo, j = hi + 1;
        while (true) {
            while (a[++i] < v && i < hi) {}
            while (a[--j] > v && j > lo) {}
            if (i >= j) break;
            exch(a, i, j);
        }
        exch(a, lo, j);
        partition(a, lo, j - 1);
        partition(a, j + 1, hi);
    }

    private int bs(int[] a, int search) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] > search) {
                hi = mid - 1;
            } else if (a[mid] < search) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    private int[] pos(int[] keep, int x, int y) {
        int posx = -1, posy = -1;
        for (int i = 0; i < keep.length; i++) {
            if (keep[i] == x) {
                posx = i;
            }
        }
        for (int i = 0; i < keep.length; i++) {
            if (keep[i] == y && i != posx) {
                posy = i;
            }
        }
        if (posx != -1 && posy != -1) {
            int[] res = {posx, posy};
            return res;
        }
        return null;
    }

    public int[] twoSum(int[] nums, int target) {
        int[] keep = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            keep[i] = nums[i];
        }

        sort(nums);

        for (int i = 0; i < nums.length; i++) {
            int find = bs(nums, target - nums[i]);
            if (find != -1 && find != i) {
                return pos(keep, nums[find], nums[i]);
            }
        }
        return null;
    }

}