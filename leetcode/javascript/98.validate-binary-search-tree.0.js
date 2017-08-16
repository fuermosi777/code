/*
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree
 *
 * algorithms
 * Medium (23.28%)
 * Total Accepted:    173.8K
 * Total Submissions: 746.5K
 * Testcase Example:  '[2,1,3]'
 *
 * 
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * 
 * 
 * Assume a BST is defined as follows:
 * 
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * 
 * Example 1:
 * 
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 
 * Binary tree [2,1,3], return true.
 * 
 * 
 * Example 2:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * 
 * Binary tree [1,2,3], return false.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function isValid(node, lo, hi) {
  if (node === null) return true;
  if ((hi !== null && node.val >= hi) || (node.val <= lo && lo !== null)) return false;
  return isValid(node.left, lo, node.val) && isValid(node.right, node.val, hi);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) return true;
  return isValid(root.left, null, root.val) && isValid(root.right, root.val, null);
};
