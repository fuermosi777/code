package ctci6.chpt8;

import java.util.HashSet;
import java.util.Iterator;

/**
 * Created by hao on 10/18/16.
 */
public class Q4 {
    public static HashSet<HashSet<Integer>> subsets(HashSet<Integer> set) {
        HashSet<HashSet<Integer>> subsets = new HashSet<>();
        if (set.size() == 1) {
            subsets.add(set);
            return subsets;
        } else {
            Iterator<Integer> it = set.iterator();
            HashSet<Integer> set2 = new HashSet<>();

            int first = it.next();
            for (int b : set) {
                if (b != first) {
                    set2.add(b);
                }
            }
            return subsets(set2, first);
        }
    }
    private static HashSet<HashSet<Integer>> subsets(HashSet<Integer> set, int a) {
        HashSet<HashSet<Integer>> subsets = new HashSet<>();
        subsets.addAll(subsets(set));

        HashSet<Integer> aSet = new HashSet<>();
        aSet.add(a);

        HashSet<HashSet<Integer>> tempSets = new HashSet<>();
        for (HashSet<Integer> s : subsets) {
            HashSet<Integer> sSet = new HashSet<>();
            sSet.addAll(s);
            sSet.add(a);
            tempSets.add(sSet);
        }

        subsets.addAll(tempSets);

        subsets.add(aSet);

        return subsets;
    }
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);
//        set.add(4);
        System.out.println(subsets(set).toString());
    }
}
