package ctci6.chpt4;

import ctci6.utils.BinaryTreeNode;
import java.util.LinkedList;

/**
 * Created by hao on 10/3/16.
 */
public class Q9 {

    public static LinkedList<LinkedList<Integer>> BSTSequence(BinaryTreeNode node) {
        return sequence(node);
    }

    private static LinkedList<LinkedList<Integer>> sequence(BinaryTreeNode node) {
        LinkedList<LinkedList<Integer>> lists = new LinkedList<>();

        if (node == null) {
            return lists;
        }
        if (node.left == null && node.right == null) {
            LinkedList<Integer> one = new LinkedList<>();
            one.add((Integer)node.val);
            lists.add(one);
            return lists;
        }
        int first = (Integer) node.val;

        LinkedList<LinkedList<Integer>> leftLists = sequence(node.left);
        LinkedList<LinkedList<Integer>> rightLists = sequence(node.right);


        for (LinkedList<Integer> leftL : leftLists) {
            for (LinkedList<Integer> rightL : rightLists) {
                for (LinkedList<Integer> l : weave(leftL, rightL)) {
                    l.addFirst(first);
                    lists.add(l);
                }
            }
        }
        return lists;
    }

    // a = 1, 2
    // b = 3, 4
    // weaved:
    // 1, 2, 3, 4
    // 1, 3, 2, 4
    // 1, 3, 4, 2
    // 3, 1, 2, 4
    // 3, 2, 1, 4
    // 3, 4, 1, 2
    public static LinkedList<LinkedList<Integer>> weave(LinkedList<Integer> a, LinkedList<Integer> b) {
        LinkedList<LinkedList<Integer>> lists = new LinkedList<>();
        if (a.isEmpty() && b.isEmpty()) return lists;

        if (a.isEmpty()) {
            lists.add(b);
        } else if (b.isEmpty()) {
            lists.add(a);
        } else if (a.size() == 1) {
            int aOnly = a.getFirst();
            lists.addAll(insert(aOnly, b));
        } else if (b.size() == 1) {
            int bOnly = b.getFirst();
            lists.addAll(insert(bOnly, a));
        } else {
            int aFirst = a.removeFirst();
            LinkedList<LinkedList<Integer>> ab = weave(a, b);
            for (LinkedList<Integer> list : ab) {
                list.addFirst(aFirst);
                lists.add(list);
            }
            a.addFirst(aFirst);

            int bFirst = b.removeFirst();
            LinkedList<LinkedList<Integer>> ba = weave(a, b);
            for (LinkedList<Integer> list : ba) {
                list.addFirst(bFirst);
                lists.add(list);
            }
            b.addFirst(bFirst);
        }


        return lists;
    }

    public static LinkedList<LinkedList<Integer>> insert(int a, LinkedList<Integer> list) {
        int i = 0;
        LinkedList<LinkedList<Integer>> lists = new LinkedList<>();
        while (i <= list.size()) {
            int j = 0;
            LinkedList<Integer> l = new LinkedList<>();
            while (j < i) {
                l.add(list.get(j));
                j++;
            }
            l.add(a);
            while (j < list.size()) {
                l.add(list.get(j));
                j++;
            }
            lists.add(l);
            i++;
        }
        return lists;
    }

    public static void main(String[] args) {
        BinaryTreeNode a = new BinaryTreeNode(1);
        BinaryTreeNode b = new BinaryTreeNode(2);
        BinaryTreeNode c = new BinaryTreeNode(3);

        b.left = a;
        b.right = c;

        System.out.println(BSTSequence(b).toString());

        // test weave()
//        LinkedList<Integer> v = new LinkedList<>();
//        v.add(1);
//
//        LinkedList<Integer> w = new LinkedList<>();
//        w.add(3);

//        for (LinkedList<Integer> l : weave(v, w)) {
//            System.out.println(l.toString());
//        }
//        System.out.println(insert(5, v).toString());

    }
}
