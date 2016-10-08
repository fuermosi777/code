package ctci6.chpt6;

import java.util.Arrays;
import java.util.Stack;

/**
 * Created by hao on 10/7/16.
 */
public class A {
    public static int[] primeNumbers(int max) {
        boolean[] flags = new boolean[max + 1];
        for (int i = 0; i < flags.length; i++) {
            flags[i] = true;
        }
        flags[0] = false; flags[1] = false;
        int p = 2;
        while (p <= max) {
            for (int i = p; i < flags.length; i += p) {
                if (i != p) {
                    flags[i] = false;
                }
            }
            p = nextPrime(flags, p);
        }

        Stack<Integer> primes = new Stack<>();
        for (int i = 0; i < flags.length; i++) {
            if (flags[i]) {
                primes.push(i);
            }
        }
        int[] res = new int[primes.size()];
        for (int i = 0; i < primes.size(); i++) {
            res[i] = primes.get(i);
        }
        return res;
    }

    private static int nextPrime(boolean[] flags, int prime) {
        int next = prime + 1;
        while (next < flags.length && !flags[next]) {
            next++;
        }
        return next;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(primeNumbers(100)));
    }
}
