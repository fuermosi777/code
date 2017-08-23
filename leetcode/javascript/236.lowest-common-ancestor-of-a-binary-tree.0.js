/*
 * [236] Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 *
 * algorithms
 * Medium (29.66%)
 * Total Accepted:    109.1K
 * Total Submissions: 367.7K
 * Testcase Example:  '[1,2]\nnode with value 1\nnode with value 2'
 *
 * 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 * 
 * 
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes v and w as the lowest node in T that has both v
 * and w as descendants (where we allow a node to be a descendant of
 * itself).”
 * 
 * 
 * 
 * ⁠       _______3______
 * ⁠      /              \
 * ⁠   ___5__          ___1__
 * ⁠  /      \        /      \
 * ⁠  6      _2       0       8
 * ⁠        /  \
 * ⁠        7   4
 * 
 * 
 * 
 * For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another
 * example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of
 * itself according to the LCA definition.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */








function dfs(node) {
  if (node.left) {
    node.left.parent = node;
    dfs(node.left);
  }
  if (node.right) {
    node.right.parent = node;
    dfs(node.right);
  }
}

function length(child) {
  let n = child;
  let l = 0;
  while (n) {
    l++;
    n = n.parent;
  }
  return l;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  dfs(root);
  let pl = length(p);
  let ql = length(q);
  let longer = pl >= ql ? p : q;
  let n = longer;
  let s = p === longer ? q : p;
  let i = 0;
  while (i < Math.abs(pl - ql)) {
    n = n.parent;
    i++;
  }
  while (s !== n) {
    s = s.parent;
    n = n.parent;
  }
  return s.val;
};
