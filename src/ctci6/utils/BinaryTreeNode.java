package ctci6.utils;

/**
 * Created by hao on 10/3/16.
 */
public class BinaryTreeNode<Value> {

    public Value val;
    public BinaryTreeNode left;
    public BinaryTreeNode right;
    public BinaryTreeNode parent;

    public BinaryTreeNode(Value val) {
        this.val = val;
    }

    public BinaryTreeNode sibling() {
        if (parent == null) return null;
        BinaryTreeNode sibling = parent.left == this ? parent.right : parent.left;
        return sibling;
    }

    public int size() {
        return size(this);
    }

    private int size(BinaryTreeNode node) {
        if (node == null) return 0;
        return size(node.left) + size(node.right) + 1;
    }
}
