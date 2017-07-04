package ctci6.chpt10;

import java.util.Arrays;

/**
 * Created by hao on 10/21/16.
 */
public class Q11 {
    public static void pv(int[] array) {
        if (array.length <= 2) throw new Error("Array too short");
        Arrays.sort(array);
        for (int i = 1; i < array.length; i += 2) {
            if (i + 1 < array.length) {
                int temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    public static void main(String[] args) {
        int[] a = {1,3,4,9,5,5,8,6,2,3,4,6};
        pv(a);
        System.out.println(Arrays.toString(a));
    }
}
