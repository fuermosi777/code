package ctci6.chpt6;

import java.util.Random;

/**
 * Created by hao on 10/8/16.
 */
public class Q7 {

    public static final boolean MALE = false;
    public static final boolean FEMALE = true;
    public static int boys = 0;
    public static int girls = 0;

    public static boolean giveBirth() {
        Random rand = new Random();
        return rand.nextBoolean();
    }

    public static void makeBaby() {
        boolean baby = giveBirth();
        while (baby == MALE) {
            boys++;
            baby = giveBirth();
        }
        girls++;
    }

    public static void main(String[] args) {
        int N = 10000;
        for (int i = 0; i < N; i++) {
            makeBaby();
        }

        System.out.println("boys: " + boys + "; girls: " + girls + "; b/g: " + (double) boys / (double) girls);
    }
}
