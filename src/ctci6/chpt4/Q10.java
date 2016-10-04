package ctci6.chpt4;

import ctci6.utils.BinaryTreeNode;

/**
 * Created by hao on 10/3/16.
 */
public class Q10 {
    private static boolean isSub = false;

    public static boolean isSubTree(BinaryTreeNode T1, BinaryTreeNode T2) {
        isSub = false;
        dfs(T1, T2);
        return isSub;
    }

    public static void dfs(BinaryTreeNode node, BinaryTreeNode T2) {
        if (node == null) return;
        if (isIdentical(node, T2)) {
            isSub = true;
        } else {
            dfs(node.left, T2);
            dfs(node.right, T2);
        }
    }

    public static boolean isIdentical(BinaryTreeNode v, BinaryTreeNode w) {
        if (v != w) return false;
        if (v == null && w == null) return true;
        return isIdentical(v.left, w.left) && isIdentical(v.right, w.right);
    }

    public static void main(String[] args) {
        BinaryTreeNode a1 = new BinaryTreeNode(1);
        BinaryTreeNode b1 = new BinaryTreeNode(2);
        BinaryTreeNode c1 = new BinaryTreeNode(3);
        BinaryTreeNode a2 = a1;
        BinaryTreeNode b2 = b1;
        BinaryTreeNode c2 = c1;
        a1.left = b1; a1.right = c1;
        a2.left = b2; a2.right = c2;

        System.out.println(isSubTree(a1, a2));

    }
}
