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

/*function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function dsp(root, n) {
  if (root === n) return;
  if (root.left !== null) {
    root.left.path = root;
    dsp(root.left, n);
  }
  if (root.right !== null) {
    root.right.path = root;
    dsp(root.right, n);
  }
}
 
var lowestCommonAncestor = function(root, p, q) {
  dsp(root, p);
  dsp(root, q);

  let p1 = [], p2 = [];
  let n1 = p, n2 = q;
  while (n1) {
    p1.unshift(n1);
    n1 = n1.path;
  }
  while (n2) {
    p2.unshift(n2);
    n2 = n2.path;
  }

  let i = 0;
  let lca = null;
  while (p1[i] === p2[i]) {
    lca = p1[i];
    i++;
  }

  return lca;
};*/

/*var lowestCommonAncestor = function(root, p, q) {
  if (root === null || p === root || q === root) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  else if (left) return left;
  return right;
};*/


var lowestCommonAncestor = function(root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left !== null && right !== null) {
    return root;
  }
  if (left !== null) {
    return left;
  }
  if (right !== null) {
    return right;
  }
  return null;
};