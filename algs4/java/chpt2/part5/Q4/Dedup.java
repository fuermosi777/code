package algs4.chpt2.part5.Q4;

import algs4.chpt2.part3.A5.Quick;
import edu.princeton.cs.algs4.In;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class Dedup {
    public static void main(String[] args) {
        In stream = new In("/Users/hao/workspace/exercise/src/algs4/chpt2/part5/Q4/words.txt");
        String[] words = stream.readAllLines();
        Quick.sort(words);
        System.out.println(Arrays.toString(words));
        String[] aux = new String[words.length];

        int flag = 0;
        for (int i = 0; i < words.length; i++) {
            if (i > 0 && words[i].compareTo(words[i - 1]) == 0) {
            } else {
                aux[flag] = words[i];
                flag++;
            }
        }

        System.out.println(Arrays.toString(aux));
    }
}
