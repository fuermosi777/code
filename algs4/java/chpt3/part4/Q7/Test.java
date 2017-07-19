package algs4.chpt3.part4.Q7;

import java.util.Arrays;

/**
 * Created by hao on 8/10/16.
 */
public class Test {

    private int a;
    private int M;
    private int[] ct;

    public Test(int a, int M) {
        this.M = M;
        this.a = a;
        ct = new int[M];
        for (int i = 0; i < ct.length; i++) {
            ct[i] = 0;
        }
    }

    public void put(int key) {
        ct[hash(key)]++;
    }

    private int hash(int key) {
        return (key * a) % M;
    }

    public void print() {
        System.out.print(Arrays.toString(ct));
    }

    public static void main(String[] args) {
        Test t = new Test(5, 40);
        for (int i = 0; i < 4000; i++) {
            t.put(i);
        }
        t.print();
    }
}
