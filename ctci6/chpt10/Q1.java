package ctci6.chpt10;

import java.util.Arrays;

/**
 * Created by hao on 10/20/16.
 */
public class Q1 {
    public static void sort(int[] A, int[] B) {
        int helper = 0;
        int i = 0, j = 0;
        while (j < B.length) {
            if (helper != 0) {
                if (B[j] < helper) {
                    if (A[i] == 0) {
                        int temp = A[i];
                        helper = A[i];
                        A[i] = temp;
                        i++;
                    } else {
                        int temp = A[i];
                        A[i] = B[j];
                        B[j] = helper;
                        helper = temp;
                    }
                } else {
                    if (A[i] == 0) {
                        A[i] = helper;
                        helper = 0;
                        i++;
                    } else {
                        int temp = helper;
                        helper = A[i];
                        A[i] = temp;
                        i++;
                    }
                }
            } else {
                if (B[j] > A[i]) {
                    if (A[i] == 0) {
                        A[i] = B[j];
                        i++; j++;
                    } else {
                        i++;
                    }
                } else {
                    helper = A[i];
                    A[i] = B[j];
                    i++;
                    j++;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] A = new int[6];
        A[0] = 1; A[1] = 2; A[2] = 3;
        int[] B = new int[3];
        B[0] = 5; B[1] = 5; B[2] = 6;
        System.out.println(Arrays.toString(A));
        System.out.println(Arrays.toString(B));
        sort(A, B);
        System.out.println(Arrays.toString(A));
    }
}
