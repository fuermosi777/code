package algs4.chpt2.part5.Q8;

import algs4.chpt2.part3.A5.Quick;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class Frequency {
    public static void main(String[] args) {
        In stream = new In("/Users/hao/workspace/exercise/src/algs4/chpt2/part5/Q8/strings.txt");
        String[] words = stream.readAllLines();
        Quick.sort(words);
        System.out.println(Arrays.toString(words));

        int num = 0;
        for (int i = 0; i < words.length; i++) {
            if (i == 0) {
                num += 1;
            } else if (words[i].compareTo(words[i - 1]) == 0) {
                num++;
            } else {
                System.out.println(words[i - 1] + " - " + num);
                num = 1;
            }

        }
    }
}
