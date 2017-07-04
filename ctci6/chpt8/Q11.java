package ctci6.chpt8;

import java.util.ArrayList;

/**
 * Created by hao on 10/18/16.
 */
public class Q11 {

    public static int ways(int N, int[] coins, int index) {
        int coin = coins[index];
        if (index >= coins.length - 1) {
            return 1;
        }
        int ways = 0;
        for (int j = 0; j * coin <= N; j++) {
            int remain = N - j * coin;
            ways += ways(remain, coins, index + 1);
        }
        return ways;
    }

    public static void main(String[] args) {
        int[] coins = {25, 10, 5, 1};
        System.out.println(ways(103, coins, 0));

    }

}
